// ⚠️ STRIPE TEMPORARILY DISABLED - Will enable in production
// Uncomment when ready to use Stripe

/*
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createBookingCheckout = async ({ amount, currency, bookingId, clientEmail, trainerName }) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: currency.toLowerCase(),
                    product_data: {
                        name: `Training Session with ${trainerName}`,
                        description: 'Personal training session booking',
                    },
                    unit_amount: Math.round(amount * 100),
                },
                quantity: 1,
            }],
            customer_email: clientEmail,
            metadata: {
                bookingId: bookingId.toString(),
                type: 'booking',
            },
            success_url: `${process.env.CLIENT_URL}/bookings/${bookingId}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/bookings/${bookingId}/cancel`,
        });

        return {
            sessionId: session.id,
            url: session.url,
        };
    } catch (error) {
        console.error('Stripe create booking checkout error:', error);
        throw new Error('Failed to create payment session');
    }
};

export const createProgramCheckout = async ({ amount, currency, programId, clientEmail, programTitle }) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: currency.toLowerCase(),
                    product_data: {
                        name: programTitle,
                        description: 'Training program enrollment',
                    },
                    unit_amount: Math.round(amount * 100),
                },
                quantity: 1,
            }],
            customer_email: clientEmail,
            metadata: {
                programId: programId.toString(),
                type: 'program',
            },
            success_url: `${process.env.CLIENT_URL}/programs/${programId}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/programs/${programId}`,
        });

        return {
            sessionId: session.id,
            url: session.url,
        };
    } catch (error) {
        console.error('Stripe create program checkout error:', error);
        throw new Error('Failed to create payment session');
    }
};

export const verifyPaymentSession = async (sessionId) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        return {
            status: session.payment_status,
            amount: session.amount_total / 100,
            currency: session.currency.toUpperCase(),
            metadata: session.metadata,
        };
    } catch (error) {
        console.error('Stripe verify session error:', error);
        throw new Error('Failed to verify payment');
    }
};

export const createRefund = async (paymentIntentId, amount) => {
    try {
        const refund = await stripe.refunds.create({
            payment_intent: paymentIntentId,
            amount: amount ? Math.round(amount * 100) : undefined,
        });

        return {
            id: refund.id,
            status: refund.status,
            amount: refund.amount / 100,
        };
    } catch (error) {
        console.error('Stripe refund error:', error);
        throw new Error('Failed to process refund');
    }
};

export default stripe;
*/

// Temporary mock functions (remove when enabling Stripe)
export const createBookingCheckout = async () => {
    console.log('⚠️ Stripe disabled - Mock checkout');
    return { sessionId: 'mock', url: '/mock-checkout' };
};

export const createProgramCheckout = async () => {
    console.log('⚠️ Stripe disabled - Mock checkout');
    return { sessionId: 'mock', url: '/mock-checkout' };
};

export const verifyPaymentSession = async () => {
    return { status: 'paid', amount: 0, currency: 'EUR', metadata: {} };
};

export const createRefund = async () => {
    return { id: 'mock', status: 'succeeded', amount: 0 };
};

export default null;

// Create Stripe Checkout Session for booking payment
export const createBookingCheckout = async ({ amount, currency, bookingId, clientEmail, trainerName }) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: currency.toLowerCase(),
                    product_data: {
                        name: `Training Session with ${trainerName}`,
                        description: 'Personal training session booking',
                    },
                    unit_amount: Math.round(amount * 100), // Convert to cents
                },
                quantity: 1,
            }],
            customer_email: clientEmail,
            metadata: {
                bookingId: bookingId.toString(),
                type: 'booking',
            },
            success_url: `${process.env.CLIENT_URL}/bookings/${bookingId}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/bookings/${bookingId}/cancel`,
        });

        return {
            sessionId: session.id,
            url: session.url,
        };
    } catch (error) {
        console.error('Stripe create booking checkout error:', error);
        throw new Error('Failed to create payment session');
    }
};

// Create Stripe Checkout Session for program purchase
export const createProgramCheckout = async ({ amount, currency, programId, clientEmail, programTitle }) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: currency.toLowerCase(),
                    product_data: {
                        name: programTitle,
                        description: 'Training program enrollment',
                    },
                    unit_amount: Math.round(amount * 100),
                },
                quantity: 1,
            }],
            customer_email: clientEmail,
            metadata: {
                programId: programId.toString(),
                type: 'program',
            },
            success_url: `${process.env.CLIENT_URL}/programs/${programId}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/programs/${programId}`,
        });

        return {
            sessionId: session.id,
            url: session.url,
        };
    } catch (error) {
        console.error('Stripe create program checkout error:', error);
        throw new Error('Failed to create payment session');
    }
};

// Verify payment session
export const verifyPaymentSession = async (sessionId) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        return {
            status: session.payment_status,
            amount: session.amount_total / 100,
            currency: session.currency.toUpperCase(),
            metadata: session.metadata,
        };
    } catch (error) {
        console.error('Stripe verify session error:', error);
        throw new Error('Failed to verify payment');
    }
};

// Create refund
export const createRefund = async (paymentIntentId, amount) => {
    try {
        const refund = await stripe.refunds.create({
            payment_intent: paymentIntentId,
            amount: amount ? Math.round(amount * 100) : undefined,
        });

        return {
            id: refund.id,
            status: refund.status,
            amount: refund.amount / 100,
        };
    } catch (error) {
        console.error('Stripe refund error:', error);
        throw new Error('Failed to process refund');
    }
};

export default stripe;
