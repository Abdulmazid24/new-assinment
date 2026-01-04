import Booking from '../models/Booking.js';
import TrainerProfile from '../models/TrainerProfile.js';
import User from '../models/User.js';
import { createBookingCheckout } from '../services/stripe.js';
import { z } from 'zod';

// Validation Schema
const createBookingSchema = z.object({
    trainerId: z.string(),
    date: z.string(),
    time: z.object({
        start: z.string(),
        end: z.string(),
    }),
    duration: z.number().min(30).max(240),
    type: z.enum(['online', 'in-person']),
    location: z.string().optional(),
    notes: z.string().optional(),
});

// @desc    Create booking
// @route   POST /api/bookings
// @access  Private (Client)
export const createBooking = async (req, res) => {
    try {
        const validatedData = createBookingSchema.parse(req.body);

        // Get trainer profile
        const trainerProfile = await TrainerProfile.findOne({
            userId: validatedData.trainerId
        }).populate('userId', 'name email');

        if (!trainerProfile || !trainerProfile.verified) {
            return res.status(404).json({
                success: false,
                message: 'Trainer not found or not verified',
            });
        }

        // Calculate amount
        const amount = (validatedData.duration / 60) * trainerProfile.pricing.hourlyRate;

        // Create booking
        const booking = await Booking.create({
            trainerId: validatedData.trainerId,
            clientId: req.user.userId,
            date: validatedData.date,
            time: validatedData.time,
            duration: validatedData.duration,
            type: validatedData.type,
            location: validatedData.location,
            notes: validatedData.notes,
            payment: {
                amount,
                currency: trainerProfile.pricing.currency,
                status: 'pending',
            },
        });

        // Create Stripe checkout session
        const client = await User.findById(req.user.userId);
        const checkout = await createBookingCheckout({
            amount,
            currency: trainerProfile.pricing.currency,
            bookingId: booking._id,
            clientEmail: client.email,
            trainerName: trainerProfile.userId.name,
        });

        // Update booking with session ID
        booking.payment.stripeSessionId = checkout.sessionId;
        await booking.save();

        res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            data: {
                booking,
                checkoutUrl: checkout.url,
            },
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: error.errors,
            });
        }

        console.error('Create booking error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// @desc    Get user bookings
// @route   GET /api/bookings
// @access  Private
export const getBookings = async (req, res) => {
    try {
        const query = req.user.role === 'trainer'
            ? { trainerId: req.user.userId }
            : { clientId: req.user.userId };

        const bookings = await Booking.find(query)
            .populate('trainerId', 'name email')
            .populate('clientId', 'name email')
            .sort({ date: -1 });

        res.json({
            success: true,
            count: bookings.length,
            data: { bookings },
        });

    } catch (error) {
        console.error('Get bookings error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private
export const updateBookingStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found',
            });
        }

        // Only trainer can confirm, only client/trainer can cancel
        if (status === 'confirmed' && booking.trainerId.toString() !== req.user.userId) {
            return res.status(403).json({
                success: false,
                message: 'Only trainer can confirm bookings',
            });
        }

        booking.status = status;
        if (status === 'cancelled') {
            booking.cancelledBy = req.user.userId;
            booking.cancelledAt = new Date();
        }

        await booking.save();

        res.json({
            success: true,
            message: 'Booking updated successfully',
            data: { booking },
        });

    } catch (error) {
        console.error('Update booking error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};
