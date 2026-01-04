import express from 'express';
import {
    createTrainerProfile,
    getAllTrainers,
    getTrainer,
    verifyTrainer,
    uploadCertification,
} from '../controllers/trainerController.js';
import { protect, authorize } from '../middlewares/auth.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// Public routes
router.get('/', getAllTrainers);
router.get('/:id', getTrainer);

// Protected routes - Trainer only
router.post('/', protect, authorize('trainer'), upload.single('profileImage'), createTrainerProfile);
router.post('/certification', protect, authorize('trainer'), upload.single('certificate'), uploadCertification);

// Admin only routes
router.put('/:id/verify', protect, authorize('admin'), verifyTrainer);

export default router;
