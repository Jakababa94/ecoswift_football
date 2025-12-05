
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SkillsHub from './pages/SkillsHub';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Schedule from './components/Schedule'; // TODO: Move to pages later if needed
import RegistrationForm from './components/RegistrationForm'; // Reuse as Register Page

// Wrapper pages for components that act as pages
const SchedulePage = () => <div className="pt-20"><Schedule /></div>;
const RegisterPage = () => <div className="pt-20"><RegistrationForm /></div>;

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-dark-bg text-white flex flex-col">
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<SkillsHub />} />
                        <Route path="/sponsors" element={<Sponsors />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/schedule" element={<SchedulePage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
