import User from '../models/User.js';
import Booking from '../models/Booking.js';

// @desc    Request data export (GDPR)
// @route   POST /api/gdpr/export
// @access  Private
export const requestDataExport = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password -refreshToken');
        const bookings = await Booking.find({
            $or: [{ clientId: req.user.userId }, { trainerId: req.user.userId }]
        });

        const userData = {
            personalData: user,
            bookings: bookings,
            exportedAt: new Date(),
            exportRequest: 'GDPR Article 15 - Right to Access',
        };

        res.json({
            success: true,
            message: 'Data export prepared',
            data: userData,
        });

    } catch (error) {
        console.error('Data export error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to export data',
        });
    }
};

// @desc    Request account deletion (Right to be forgotten)
// @route   DELETE /api/gdpr/delete-account
// @access  Private
export const deleteAccount = async (req, res) => {
    try {
        const userId = req.user.userId;

        // Check for pending bookings
        const pendingBookings = await Booking.countDocuments({
            $or: [{ clientId: userId }, { trainerId: userId }],
            status: { $in: ['pending', 'confirmed'] },
        });

        if (pendingBookings > 0) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete account with pending bookings. Please cancel or complete them first.',
            });
        }

        // Anonymize user data (GDPR compliant deletion)
        await User.findByIdAndUpdate(userId, {
            name: 'Deleted User',
            email: `deleted_${userId}@anonymized.local`,
            password: 'DELETED',
            verified: false,
            gdprConsent: {
                marketing: false,
                analytics: false,
                deletedAt: new Date(),
            },
        });

        res.json({
            success: true,
            message: 'Account deletion initiated. Your data has been anonymized.',
        });

    } catch (error) {
        console.error('Account deletion error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete account',
        });
    }
};

// @desc    Update GDPR consent
// @route   PUT /api/gdpr/consent
// @access  Private
export const updateConsent = async (req, res) => {
    try {
        const { marketing, analytics } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.userId,
            {
                'gdprConsent.marketing': marketing,
                'gdprConsent.analytics': analytics,
                'gdprConsent.consentedAt': new Date(),
            },
            { new: true }
        );

        res.json({
            success: true,
            message: 'Consent preferences updated',
            data: {
                consent: user.gdprConsent,
            },
        });

    } catch (error) {
        console.error('Update consent error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update consent',
        });
    }
};
