import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/" className="logo">
                        <span className="logo-icon">DN</span>
                        <div>
                            <p className="logo-name">Deepak Nishad</p>
                            <p className="logo-subtitle">MERN Developer</p>
                        </div>
                    </Link>
                </div>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={link.path} className="nav-link" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="navbar-actions">
                    <a href="/src/assets/resume/Deepak_Nishad_Resume.pdf" download className="btn-resume">
                        <FaDownload /> Resume
                    </a>
                    <button className="hamburger" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
