import { Link } from 'react-router-dom';
import { useState } from 'react';

function ClientDashboard() {
    // @ts-ignore - setStats will be used when API is integrated
    const [stats, setStats] = useState({
        upcomingBookings: 0,
        activePrograms: 0,
        completedSessions: 0,
    });

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Upcoming Bookings</div>
                        <div className="text-3xl font-bold text-primary-600">{stats.upcomingBookings}</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Active Programs</div>
                        <div className="text-3xl font-bold text-primary-600">{stats.activePrograms}</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Completed Sessions</div>
                        <div className="text-3xl font-bold text-primary-600">{stats.completedSessions}</div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="card p-6">
                        <h2 className="text-xl font-semibold mb-4">Next Session</h2>
                        <p className="text-gray-600 mb-4">No upcoming sessions</p>
                        <Link to="/trainers" className="btn-primary">
                            Book a Trainer
                        </Link>
                    </div>

                    <div className="card p-6">
                        <h2 className="text-xl font-semibold mb-4">My Programs</h2>
                        <p className="text-gray-600 mb-4">You're not enrolled in any programs yet</p>
                        <Link to="/programs" className="btn-primary">
                            Browse Programs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientDashboard;
