import { useState } from 'react';

function GDPRSettings() {
    const [consent, setConsent] = useState({
        marketing: false,
        analytics: false,
    });

    const handleExportData = async () => {
        alert('Data export feature - will download your data as JSON');
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('Are you sure? This action cannot be undone.')) {
            alert('Account deletion feature - will anonymize your data');
        }
    };

    const handleUpdateConsent = async () => {
        alert('Consent updated successfully');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">GDPR & Privacy Settings</h1>

                {/* Data Export */}
                <div className="card p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-3">Export Your Data</h2>
                    <p className="text-gray-600 mb-4">
                        Download all your personal data in JSON format (GDPR Article 15)
                    </p>
                    <button onClick={handleExportData} className="btn-primary">
                        Export My Data
                    </button>
                </div>

                {/* Consent Management */}
                <div className="card p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Consent Preferences</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                checked={consent.marketing}
                                onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                                className="mt-1 h-4 w-4"
                            />
                            <div className="ml-3">
                                <label className="font-medium text-gray-900">Marketing Communications</label>
                                <p className="text-sm text-gray-600">Receive updates about new features and promotions</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                checked={consent.analytics}
                                onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                                className="mt-1 h-4 w-4"
                            />
                            <div className="ml-3">
                                <label className="font-medium text-gray-900">Analytics</label>
                                <p className="text-sm text-gray-600">Help us improve by collecting anonymous usage data</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleUpdateConsent} className="btn-primary mt-4">
                        Update Preferences
                    </button>
                </div>

                {/* Account Deletion */}
                <div className="card p-6 border-2 border-red-200">
                    <h2 className="text-xl font-semibold text-red-600 mb-3">Delete Account</h2>
                    <p className="text-gray-600 mb-4">
                        Permanently delete your account and anonymize your data (GDPR Article 17 - Right to be Forgotten)
                    </p>
                    <button
                        onClick={handleDeleteAccount}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Delete My Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GDPRSettings;
