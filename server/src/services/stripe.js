// ⚠️ STRIPE TEMPORARILY DISABLED - Will enable in production
// Uncomment when ready to use Stripe payments

// Temporary mock functions for development
export const createBookingCheckout = async () => {
    console.log('⚠️ Stripe disabled - Mock checkout');
    return {
        sessionId: 'mock_session',
        url: '/mock-checkout'
    };
};

export const createProgramCheckout = async () => {
    console.log('⚠️ Stripe disabled - Mock checkout');
    return {
        sessionId: 'mock_session',
        url: '/mock-checkout'
    };
};

export const verifyPaymentSession = async () => {
    return {
        status: 'paid',
        amount: 0,
        currency: 'EUR',
        metadata: {}
    };
};

export const createRefund = async () => {
    return {
        id: 'mock_refund',
        status: 'succeeded',
        amount: 0
    };
};

export default null;

/*
// ============================================
// ENABLE THIS CODE WHEN READY FOR PRODUCTION
// ============================================

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createBookingCheckout = async ({ amount, currency, bookingId, clientEmail, trainerName }) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [{
            price_data: {
                currency: currency.toLowerCase(),
                product_data: {
                    name: `Training Session with ${trainerName}`,
                },
                unit_amount: Math.round(amount * 100),
            },
            quantity: 1,
        }],
        customer_email: clientEmail,
        metadata: { bookingId: bookingId.toString() },
        success_url: `${process.env.CLIENT_URL}/bookings/${bookingId}/success`,
        cancel_url: `${process.env.CLIENT_URL}/bookings/${bookingId}/cancel`,
    });
    return { sessionId: session.id, url: session.url };
};

// Add other Stripe functions here...

*/
