import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl">🏋️</span>
                            <span className="text-xl font-bold text-white">FitTrain-EU</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Connecting European fitness trainers with clients across the continent.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/trainers" className="hover:text-white transition-colors">Find Trainers</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* For Trainers */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">For Trainers</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/register" className="hover:text-white transition-colors">Become a Trainer</Link></li>
                            <li><Link to="/login" className="hover:text-white transition-colors">Trainer Login</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">GDPR Compliance</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} FitTrain-EU. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
