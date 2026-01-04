import TrainerProfile from '../models/TrainerProfile.js';
import User from '../models/User.js';
import { uploadImage, deleteImage } from '../config/cloudinary.js';
import { z } from 'zod';
import fs from 'fs';

// Validation Schema
const createProfileSchema = z.object({
    bio: z.string().min(50).max(1000),
    specialties: z.array(z.string()).min(1),
    experience: z.object({
        years: z.number().min(0).max(50),
        description: z.string().optional(),
    }),
    pricing: z.object({
        hourlyRate: z.number().min(0),
        currency: z.enum(['EUR', 'GBP']),
    }),
    location: z.object({
        city: z.string(),
        country: z.string(),
        onlineOnly: z.boolean().optional(),
        inPerson: z.boolean().optional(),
    }),
    languages: z.array(z.string()).min(1),
});

// @desc    Create trainer profile
// @route   POST /api/trainers
// @access  Private (Trainer only)
export const createTrainerProfile = async (req, res) => {
    try {
        // Check if user is trainer
        const user = await User.findById(req.user.userId);
        if (user.role !== 'trainer') {
            return res.status(403).json({
                success: false,
                message: 'Only trainers can create a profile',
            });
        }

        // Check if profile already exists
        const existingProfile = await TrainerProfile.findOne({ userId: req.user.userId });
        if (existingProfile) {
            return res.status(400).json({
                success: false,
                message: 'Trainer profile already exists',
            });
        }

        // Validate input
        const validatedData = createProfileSchema.parse(JSON.parse(req.body.data || '{}'));

        // Upload profile image if provided
        let profileImage = null;
        if (req.file) {
            profileImage = await uploadImage(req.file, 'trainers/profiles');
            // Delete temp file
            fs.unlinkSync(req.file.path);
        }

        // Create profile
        const profile = await TrainerProfile.create({
            userId: req.user.userId,
            ...validatedData,
            profileImage,
        });

        res.status(201).json({
            success: true,
            message: 'Trainer profile created successfully',
            data: {
                profile: profile.getPublicProfile(),
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

        console.error('Create profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// @desc    Get all verified trainers
// @route   GET /api/trainers
// @access  Public
export const getAllTrainers = async (req, res) => {
    try {
        const { specialty, country, minRating, page = 1, limit = 12 } = req.query;

        // Build query
        const query = { verified: true, active: true };

        if (specialty) query.specialties = specialty;
        if (country) query['location.country'] = country;
        if (minRating) query.rating = { $gte: parseFloat(minRating) };

        // Execute query with pagination
        const trainers = await TrainerProfile
            .find(query)
            .populate('userId', 'name email')
            .sort({ rating: -1, reviewCount: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const count = await TrainerProfile.countDocuments(query);

        res.json({
            success: true,
            data: {
                trainers: trainers.map(t => ({
                    ...t.getPublicProfile(),
                    name: t.userId.name,
                })),
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                total: count,
            },
        });

    } catch (error) {
        console.error('Get trainers error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// @desc    Get single trainer
// @route   GET /api/trainers/:id
// @access  Public
export const getTrainer = async (req, res) => {
    try {
        const trainer = await TrainerProfile
            .findById(req.params.id)
            .populate('userId', 'name email country');

        if (!trainer) {
            return res.status(404).json({
                success: false,
                message: 'Trainer not found',
            });
        }

        res.json({
            success: true,
            data: {
                trainer: {
                    ...trainer.getPublicProfile(),
                    name: trainer.userId.name,
                    email: trainer.userId.email,
                },
            },
        });

    } catch (error) {
        console.error('Get trainer error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// @desc    Verify trainer (Admin only)
// @route   PUT /api/trainers/:id/verify
// @access  Private (Admin only)
export const verifyTrainer = async (req, res) => {
    try {
        const trainer = await TrainerProfile.findById(req.params.id);

        if (!trainer) {
            return res.status(404).json({
                success: false,
                message: 'Trainer not found',
            });
        }

        trainer.verified = true;
        trainer.verifiedAt = new Date();
        trainer.verifiedBy = req.user.userId;
        await trainer.save();

        res.json({
            success: true,
            message: 'Trainer verified successfully',
            data: { trainer: trainer.getPublicProfile() },
        });

    } catch (error) {
        console.error('Verify trainer error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// @desc    Upload certification
// @route   POST /api/trainers/certification
// @access  Private (Trainer only)
export const uploadCertification = async (req, res) => {
    try {
        const profile = await TrainerProfile.findOne({ userId: req.user.userId });

        if (!profile) {
            return res.status(404).json({
                success: false,
                message: 'Trainer profile not found',
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Please upload a certification image',
            });
        }

        // Upload certification image
        const certImage = await uploadImage(req.file, 'trainers/certifications');
        fs.unlinkSync(req.file.path);

        // Add certification
        profile.certifications.push({
            name: req.body.name,
            issuer: req.body.issuer,
            issueDate: req.body.issueDate,
            expiryDate: req.body.expiryDate,
            imageUrl: certImage.url,
            publicId: certImage.publicId,
        });

        await profile.save();

        res.json({
            success: true,
            message: 'Certification uploaded successfully',
            data: { profile: profile.getPublicProfile() },
        });

    } catch (error) {
        console.error('Upload certification error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};
