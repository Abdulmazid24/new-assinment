import { useState } from 'react';

function TrainerDashboard() {
    // @ts-ignore - setStats will be used when API is integrated
    const [stats, setStats] = useState({
        totalEarnings: 0,
        upcomingBookings: 0,
        activeClients: 0,
        rating: 0,
    });

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Trainer Dashboard</h1>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Total Earnings</div>
                        <div className="text-3xl font-bold text-primary-600">€{stats.totalEarnings}</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Upcoming Sessions</div>
                        <div className="text-3xl font-bold text-primary-600">{stats.upcomingBookings}</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Active Clients</div>
                        <div className="text-3xl font-bold text-primary-600">{stats.activeClients}</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Rating</div>
                        <div className="text-3xl font-bold text-primary-600">{stats.rating || 'N/A'}</div>
                    </div>
                </div>

                {/* Management Sections */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="card p-6">
                        <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
                        <p className="text-gray-600">No sessions scheduled for today</p>
                    </div>

                    <div className="card p-6">
                        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
                        <p className="text-gray-600">No recent bookings</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainerDashboard;
