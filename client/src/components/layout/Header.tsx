import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl">🏋️</span>
                        <span className="text-xl font-bold text-primary-600">FitTrain-EU</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/trainers" className="text-gray-700 hover:text-primary-600 transition-colors">
                            Find Trainers
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                            About
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-gray-700 hover:text-primary-600 transition-colors">
                            Login
                        </Link>
                        <Link to="/register" className="btn-primary">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            <Link to="/trainers" className="text-gray-700 hover:text-primary-600">
                                Find Trainers
                            </Link>
                            <Link to="/about" className="text-gray-700 hover:text-primary-600">
                                About
                            </Link>
                            <Link to="/contact" className="text-gray-700 hover:text-primary-600">
                                Contact
                            </Link>
                            <Link to="/login" className="text-gray-700 hover:text-primary-600">
                                Login
                            </Link>
                            <Link to="/register" className="btn-primary inline-block text-center">
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
