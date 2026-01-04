import Program from '../models/Program.js';
import { createProgramCheckout } from '../services/stripe.js';
import User from '../models/User.js';
import { z } from 'zod';

// @desc    Create training program
// @route   POST /api/programs
// @access  Private (Trainer only)
export const createProgram = async (req, res) => {
    try {
        const program = await Program.create({
            trainerId: req.user.userId,
            ...req.body,
        });

        res.status(201).json({
            success: true,
            message: 'Program created successfully',
            data: { program },
        });

    } catch (error) {
        console.error('Create program error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// @desc    Get all programs
// @route   GET /api/programs
// @access  Public
export const getPrograms = async (req, res) => {
    try {
        const { category, difficulty, trainerId } = req.query;

        const query = { active: true };
        if (category) query.category = category;
        if (difficulty) query.difficulty = difficulty;
        if (trainerId) query.trainerId = trainerId;

        const programs = await Program.find(query)
            .populate('trainerId', 'name')
            .select('-enrolledClients');

        res.json({
            success: true,
            count: programs.length,
            data: { programs },
        });

    } catch (error) {
        console.error('Get programs error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// @desc    Enroll in program
// @route   POST /api/programs/:id/enroll  
// @access  Private (Client)
export const enrollProgram = async (req, res) => {
    try {
        const program = await Program.findById(req.params.id).populate('trainerId', 'name');

        if (!program) {
            return res.status(404).json({
                success: false,
                message: 'Program not found',
            });
        }

        // Check if already enrolled
        const alreadyEnrolled = program.enrolledClients.some(
            client => client.clientId.toString() === req.user.userId
        );

        if (alreadyEnrolled) {
            return res.status(400).json({
                success: false,
                message: 'Already enrolled in this program',
            });
        }

        // Create Stripe checkout
        const client = await User.findById(req.user.userId);
        const checkout = await createProgramCheckout({
            amount: program.price.amount,
            currency: program.price.currency,
            programId: program._id,
            clientEmail: client.email,
            programTitle: program.title,
        });

        // Add client to enrolled (will be confirmed after payment)
        program.enrolledClients.push({
            clientId: req.user.userId,
            enrolledAt: new Date(),
            progress: [],
        });

        await program.save();

        res.json({
            success: true,
            message: 'Enrollment initiated',
            data: {
                checkoutUrl: checkout.url,
            },
        });

    } catch (error) {
        console.error('Enroll program error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};
