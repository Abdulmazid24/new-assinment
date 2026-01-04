import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Trainer {
    id: string;
    name: string;
    bio: string;
    profileImage?: string;
    specialties: string[];
    rating: number;
    reviewCount: number;
    pricing: {
        hourlyRate: number;
        currency: string;
    };
    location: {
        city: string;
        country: string;
    };
    verified: boolean;
}

function TrainerMarketplace() {
    const [trainers, setTrainers] = useState<Trainer[]>([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        specialty: '',
        country: '',
        minRating: '',
    });

    // Placeholder data for UI demonstration
    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [filters]);

    const specialties = [
        'Weight Training', 'Cardio', 'Yoga', 'Pilates',
        'CrossFit', 'Boxing', 'Nutrition', 'Personal Training'
    ];

    const countries = ['United Kingdom', 'Germany', 'France', 'Spain'];

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Your Trainer</h1>
                    <p className="text-lg text-gray-600">Browse verified fitness trainers across Europe</p>
                </div>

                {/* Filters */}
                <div className="card p-6 mb-8">
                    <div className="grid md:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Specialty
                            </label>
                            <select
                                value={filters.specialty}
                                onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                                <option value="">All Specialties</option>
                                {specialties.map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Country
                            </label>
                            <select
                                value={filters.country}
                                onChange={(e) => setFilters({ ...filters, country: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                                <option value="">All Countries</option>
                                {countries.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Minimum Rating
                            </label>
                            <select
                                value={filters.minRating}
                                onChange={(e) => setFilters({ ...filters, minRating: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                                <option value="">Any Rating</option>
                                <option value="4">4+ Stars</option>
                                <option value="4.5">4.5+ Stars</option>
                            </select>
                        </div>

                        <div className="flex items-end">
                            <button
                                onClick={() => setFilters({ specialty: '', country: '', minRating: '' })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results */}
                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                        <p className="mt-4 text-gray-600">Loading trainers...</p>
                    </div>
                ) : trainers.length === 0 ? (
                    <div className="card p-12 text-center">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">No trainers found</h3>
                        <p className="text-gray-600 mb-6">
                            We're building our trainer network. Check back soon!
                        </p>
                        <Link to="/" className="btn-primary inline-block">
                            Back to Home
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Trainer cards will go here */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TrainerMarketplace;
