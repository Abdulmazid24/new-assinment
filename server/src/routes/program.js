import express from 'express';
import {
    createProgram,
    getPrograms,
    enrollProgram,
} from '../controllers/programController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.get('/', getPrograms);

// Protected routes
router.post('/', protect, authorize('trainer'), createProgram);
router.post('/:id/enroll', protect, authorize('client'), enrollProgram);

export default router;
