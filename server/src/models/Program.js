import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
    trainerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
    },
    category: {
        type: String,
        enum: ['Weight Loss', 'Muscle Gain', 'Endurance', 'Flexibility', 'Sports Training', 'Rehabilitation'],
        required: true,
    },
    duration: {
        weeks: {
            type: Number,
            required: true,
            min: 1,
            max: 52,
        },
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true,
    },
    price: {
        amount: {
            type: Number,
            required: true,
            min: 0,
        },
        currency: {
            type: String,
            enum: ['EUR', 'GBP'],
            default: 'EUR',
        },
    },
    weeks: [{
        weekNumber: Number,
        title: String,
        workouts: [{
            day: String,
            exercises: [{
                name: String,
                sets: Number,
                reps: String,
                rest: String,
                notes: String,
            }],
        }],
        nutritionNotes: String,
    }],
    enrolledClients: [{
        clientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        enrolledAt: Date,
        progress: [{
            weekNumber: Number,
            completed: Boolean,
            completedAt: Date,
        }],
    }],
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

// Indexes
programSchema.index({ trainerId: 1, active: 1 });
programSchema.index({ category: 1, difficulty: 1 });

const Program = mongoose.model('Program', programSchema);

export default Program;
