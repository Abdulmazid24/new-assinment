import mongoose from 'mongoose';

const trainerProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        required: [true, 'Bio is required'],
        maxlength: [1000, 'Bio cannot exceed 1000 characters'],
    },
    profileImage: {
        url: String,
        publicId: String, // Cloudinary public ID for deletion
    },
    specialties: [{
        type: String,
        enum: [
            'Weight Training',
            'Cardio',
            'Yoga',
            'Pilates',
            'CrossFit',
            'Boxing',
            'Nutrition',
            'Personal Training',
            'Group Classes',
            'Sports Specific',
            'Rehabilitation',
            'Martial Arts',
        ],
    }],
    certifications: [{
        name: {
            type: String,
            required: true,
        },
        issuer: {
            type: String,
            required: true,
        },
        issueDate: Date,
        expiryDate: Date,
        imageUrl: String,
        publicId: String,
        verifiedByAdmin: {
            type: Boolean,
            default: false,
        },
        verifiedAt: Date,
        verifiedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    }],
    experience: {
        years: {
            type: Number,
            min: 0,
            max: 50,
        },
        description: String,
    },
    pricing: {
        hourlyRate: {
            type: Number,
            required: true,
            min: 0,
        },
        currency: {
            type: String,
            enum: ['EUR', 'GBP'],
            default: 'EUR',
        },
        sessionPackages: [{
            sessions: Number,
            price: Number,
            discount: Number, // Percentage
        }],
    },
    availability: [{
        day: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        slots: [{
            start: String, // "09:00"
            end: String,   // "10:00"
        }],
    }],
    location: {
        city: String,
        country: {
            type: String,
            required: true,
        },
        onlineOnly: {
            type: Boolean,
            default: false,
        },
        inPerson: {
            type: Boolean,
            default: true,
        },
    },
    languages: [{
        type: String,
        enum: ['English', 'German', 'French', 'Spanish', 'Italian', 'Portuguese'],
    }],
    verified: {
        type: Boolean,
        default: false,
    },
    verifiedAt: Date,
    verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    reviewCount: {
        type: Number,
        default: 0,
    },
    totalSessions: {
        type: Number,
        default: 0,
    },
    active: {
        type: Boolean,
        default: true,
    },
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

// Indexes for efficient queries
trainerProfileSchema.index({ userId: 1 });
trainerProfileSchema.index({ verified: 1 });
trainerProfileSchema.index({ specialties: 1 });
trainerProfileSchema.index({ 'location.country': 1 });
trainerProfileSchema.index({ rating: -1 });

// Update timestamps
trainerProfileSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Method to get public profile
trainerProfileSchema.methods.getPublicProfile = function () {
    return {
        id: this._id,
        userId: this.userId,
        bio: this.bio,
        profileImage: this.profileImage?.url,
        specialties: this.specialties,
        certifications: this.certifications.filter(cert => cert.verifiedByAdmin).map(cert => ({
            name: cert.name,
            issuer: cert.issuer,
        })),
        experience: this.experience,
        pricing: this.pricing,
        availability: this.availability,
        location: this.location,
        languages: this.languages,
        verified: this.verified,
        rating: this.rating,
        reviewCount: this.reviewCount,
        totalSessions: this.totalSessions,
    };
};

const TrainerProfile = mongoose.model('TrainerProfile', trainerProfileSchema);

export default TrainerProfile;
