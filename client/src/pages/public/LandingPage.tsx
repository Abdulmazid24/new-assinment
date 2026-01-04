import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Find Your Perfect
                            <span className="text-primary-600"> Fitness Trainer</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Connect with certified trainers across Europe. Online or in-person sessions tailored to your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/trainers" className="btn-primary text-lg px-8 py-4">
                                Find Trainers
                            </Link>
                            <Link to="/register" className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-all">
                                Become a Trainer
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FitTrain-EU?</h2>
                        <p className="text-xl text-gray-600">Premium features for your fitness journey</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="card p-8 text-center">
                            <div className="text-4xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold mb-3">Verified Trainers</h3>
                            <p className="text-gray-600">
                                All trainers are verified with certified qualifications and background checks.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="card p-8 text-center">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold mb-3">Europe-Wide</h3>
                            <p className="text-gray-600">
                                Find trainers across UK, Germany, France, Spain, and more Nordic countries.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="card p-8 text-center">
                            <div className="text-4xl mb-4">💳</div>
                            <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                            <p className="text-gray-600">
                                GDPR-compliant payments with Stripe. Support for EUR and GBP.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="card p-8 text-center">
                            <div className="text-4xl mb-4">📅</div>
                            <h3 className="text-xl font-semibold mb-3">Easy Booking</h3>
                            <p className="text-gray-600">
                                Calendar integration and timezone-aware scheduling made simple.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="card p-8 text-center">
                            <div className="text-4xl mb-4">💪</div>
                            <h3 className="text-xl font-semibold mb-3">Specialized Training</h3>
                            <p className="text-gray-600">
                                Weight training, yoga, CrossFit, boxing, and more specialized programs.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="card p-8 text-center">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-semibold mb-3">GDPR Compliant</h3>
                            <p className="text-gray-600">
                                Your data is protected with EU data protection standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
                    <p className="text-xl mb-8 text-primary-100">
                        Join thousands of satisfied clients across Europe
                    </p>
                    <Link to="/trainers" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
                        Browse Trainers Now
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
