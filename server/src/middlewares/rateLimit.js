import { Redis } from '@upstash/redis';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Initialize Upstash Redis (or use in-memory for development)
let redis = null;
let useRedis = false;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    useRedis = true;
    console.log('✅ Rate limiting with Upstash Redis');
} else {
    console.log('⚠️  Rate limiting with in-memory store (dev mode)');
}

// Rate limiter configurations
const rateLimiters = {
    // Global rate limiter (DDoS protection)
    global: new RateLimiterMemory({
        points: 100, // Number of requests
        duration: 15 * 60, // Per 15 minutes
    }),

    // Auth routes rate limiter (stricter)
    auth: new RateLimiterMemory({
        points: 5, // 5 requests
        duration: 60, // Per minute
    }),

    // Role-based rate limiters
    admin: new RateLimiterMemory({
        points: 1000,
        duration: 60,
    }),
    trainer: new RateLimiterMemory({
        points: 300,
        duration: 60,
    }),
    client: new RateLimiterMemory({
        points: 100,
        duration: 60,
    }),
    guest: new RateLimiterMemory({
        points: 50,
        duration: 60,
    }),
};

// Global rate limiting middleware
export const globalRateLimit = async (req, res, next) => {
    try {
        const key = req.ip || req.connection.remoteAddress;

        await rateLimiters.global.consume(key);
        next();

    } catch (error) {
        res.status(429).json({
            success: false,
            message: 'Too many requests, please try again later',
            retryAfter: Math.ceil(error.msBeforeNext / 1000),
        });
    }
};

// Auth route rate limiting
export const authRateLimit = async (req, res, next) => {
    try {
        const key = req.ip || req.connection.remoteAddress;

        await rateLimiters.auth.consume(key);
        next();

    } catch (error) {
        res.setHeader('Retry-After', Math.ceil(error.msBeforeNext / 1000));
        res.status(429).json({
            success: false,
            message: 'Too many authentication attempts, please try again later',
            retryAfter: Math.ceil(error.msBeforeNext / 1000),
        });
    }
};

// Role-based rate limiting
export const roleBasedRateLimit = async (req, res, next) => {
    try {
        const userRole = req.user?.role || 'guest';
        const userId = req.user?.userId || req.ip;

        const limiter = rateLimiters[userRole] || rateLimiters.guest;

        const result = await limiter.consume(userId);

        // Set rate limit headers
        res.setHeader('X-RateLimit-Limit', limiter.points);
        res.setHeader('X-RateLimit-Remaining', result.remainingPoints);
        res.setHeader('X-RateLimit-Reset', new Date(Date.now() + result.msBeforeNext));

        next();

    } catch (error) {
        res.setHeader('Retry-After', Math.ceil(error.msBeforeNext / 1000));
        res.status(429).json({
            success: false,
            message: 'Rate limit exceeded',
            retryAfter: Math.ceil(error.msBeforeNext / 1000),
        });
    }
};

export default {
    globalRateLimit,
    authRateLimit,
    roleBasedRateLimit,
};
