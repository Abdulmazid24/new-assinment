import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    trainerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        start: {
            type: String,
            required: true, // "09:00"
        },
        end: {
            type: String,
            required: true, // "10:00"
        },
    },
    duration: {
        type: Number,
        required: true, // in minutes
    },
    type: {
        type: String,
        enum: ['online', 'in-person'],
        required: true,
    },
    location: {
        type: String,
        required: function () {
            return this.type === 'in-person';
        },
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending',
    },
    payment: {
        amount: Number,
        currency: String,
        stripeSessionId: String,
        stripePaymentIntentId: String,
        status: {
            type: String,
            enum: ['pending', 'paid', 'refunded'],
            default: 'pending',
        },
        paidAt: Date,
    },
    notes: String,
    cancelledBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    cancelledAt: Date,
    cancellationReason: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

// Indexes
bookingSchema.index({ trainerId: 1, date: 1 });
bookingSchema.index({ clientId: 1, status: 1 });
bookingSchema.index({ status: 1 });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
