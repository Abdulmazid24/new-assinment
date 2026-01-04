function About() {
    return (
        <div className="bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About FitTrain-EU</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 mb-6">
                        FitTrain-EU is Europe's premier platform connecting fitness trainers with clients
                        across the continent.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-6">
                        We believe everyone deserves access to professional fitness guidance. Our platform
                        makes it easy to find, book, and train with certified professionals - whether you're
                        looking for online sessions or in-person training.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose Us?</h2>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                            <span className="text-primary-600 mr-2">✓</span>
                            All trainers are verified with certified qualifications
                        </li>
                        <li className="flex items-start">
                            <span className="text-primary-600 mr-2">✓</span>
                            Secure, GDPR-compliant platform
                        </li>
                        <li className="flex items-start">
                            <span className="text-primary-600 mr-2">✓</span>
                            Support for EUR and GBP payments
                        </li>
                        <li className="flex items-start">
                            <span className="text-primary-600 mr-2">✓</span>
                            Easy booking and calendar management
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
