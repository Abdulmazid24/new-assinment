import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.js';
import trainerRoutes from './routes/trainer.js';
import { globalRateLimit } from './middlewares/rateLimit.js';

dotenv.config();

const app = express();
const PORT = process.env.NODE_ENV || 5000;

// Connect to MongoDB
connectDB();

// Security Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
}));
app.use(mongoSanitize());

// Global Rate Limiting
app.use(globalRateLimit);

// Body Parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'FitTrain-EU API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        features: {
            authentication: true,
            trainerProfiles: true,
            rateLimit: true,
            gdprCompliance: true,
        },
    });
});

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to FitTrain-EU API',
        version: '1.0.0',
        documentation: '/api/health',
    });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/trainers', trainerRoutes);

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🔐 Authentication: Enabled`);
    console.log(`👔 Trainer Profiles: Enabled`);
    console.log(`🛡️  Rate Limiting: Active`);
});
