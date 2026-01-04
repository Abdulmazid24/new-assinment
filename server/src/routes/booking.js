import express from 'express';
import {
    createBooking,
    getBookings,
    updateBookingStatus,
} from '../controllers/bookingController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

router.post('/', authorize('client'), createBooking);
router.get('/', getBookings);
router.put('/:id', updateBookingStatus);

export default router;
