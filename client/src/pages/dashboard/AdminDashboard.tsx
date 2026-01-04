import { useState } from 'react';

function AdminDashboard() {
    const [stats] = useState({
        totalUsers: 0,
        totalTrainers: 0,
        pendingVerifications: 0,
        totalRevenue: 0,
    });

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Total Users</div>
                        <div className="text-3xl font-bold text-primary-600">{stats.totalUsers}</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Total Trainers</div>
                        <div className="text-3xl font-bold text-primary-600">{stats.totalTrainers}</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Pending Verifications</div>
                        <div className="text-3xl font-bold text-orange-600">{stats.pendingVerifications}</div>
                    </div>
                    <div className="card p-6">
                        <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
                        <div className="text-3xl font-bold text-primary-600">€{stats.totalRevenue}</div>
                    </div>
                </div>

                {/* Management Sections */}
                <div className="space-y-6">
                    <div className="card p-6">
                        <h2 className="text-xl font-semibold mb-4">Pending Verifications</h2>
                        <p className="text-gray-600">No pending trainer verifications</p>
                    </div>

                    <div className="card p-6">
                        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
                        <p className="text-gray-600">Platform activity will appear here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
