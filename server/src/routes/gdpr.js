import express from 'express';
import {
    requestDataExport,
    deleteAccount,
    updateConsent,
} from '../controllers/gdprController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

router.post('/export', requestDataExport);
router.delete('/delete-account', deleteAccount);
router.put('/consent', updateConsent);

export default router;
