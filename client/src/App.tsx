import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/public/LandingPage';
import TrainerMarketplace from './pages/public/TrainerMarketplace';
import TrainerDetail from './pages/public/TrainerDetail';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ClientDashboard from './pages/dashboard/ClientDashboard';
import TrainerDashboard from './pages/dashboard/TrainerDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import GDPRSettings from './pages/settings/GDPRSettings';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/trainers" element={<TrainerMarketplace />} />
                    <Route path="/trainers/:id" element={<TrainerDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Auth Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Dashboard Routes (Protected - will add auth check later) */}
                    <Route path="/dashboard/client" element={<ClientDashboard />} />
                    <Route path="/dashboard/trainer" element={<TrainerDashboard />} />
                    <Route path="/dashboard/admin" element={<AdminDashboard />} />

                    {/* Settings Routes */}
                    <Route path="/settings/gdpr" element={<GDPRSettings />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
