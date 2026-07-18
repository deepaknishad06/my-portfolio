import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBars, FaDownload, FaTimes } from 'react-icons/fa';
import './header.css';

function Header({ activeSection, darkMode, onToggleTheme, onNavigate, navItems }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setIsHidden(currentY > 120 && currentY > lastScrollY);
            setLastScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <motion.header
                className={`site-header ${isHidden ? 'is-hidden' : ''}`}
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
            >
                <div className="header-shell">
                    <motion.a
                        href="#home"
                        className="brand"
                        onClick={(event) => {
                            event.preventDefault();
                            onNavigate('home');
                        }}
                        whileHover={{ scale: 1.03, y: -1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <div className="brand-mark">DN</div>
                        <div className="brand-text">
                            <span className="brand-title">Deepak Nishad</span>
                            <span className="brand-subtitle">MERN Stack Developer</span>
                        </div>
                    </motion.a>

                    <nav className="nav-links" aria-label="Primary navigation">
                        {navItems.map((item) => {
                            const isActive = item.id === activeSection;
                            const isExternal = Boolean(item.href);
                            return (
                                <motion.a
                                    key={item.id}
                                    href={item.href || `#${item.id}`}
                                    className={`nav-link ${isActive ? 'active' : ''}`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        if (isExternal) {
                                            onNavigate(item.id, item.href);
                                        } else {
                                            onNavigate(item.id);
                                        }
                                    }}
                                    whileHover={{ y: -2, scale: 1.04 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                >
                                    {item.label}
                                </motion.a>
                            );
                        })}
                    </nav>

                    <div className="header-actions">
                        <motion.a
                            href="#contact"
                            className="action-btn desktop-only"
                            onClick={(event) => {
                                event.preventDefault();
                                onNavigate('contact');
                            }}
                            whileHover={{ y: -2, scale: 1.03, boxShadow: '0 16px 28px rgba(59, 130, 246, 0.32)' }}
                            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        >
                            <FaDownload style={{ marginRight: '0.45rem' }} />
                            Resume
                        </motion.a>




                        <motion.button
                            className="icon-btn mobile-toggle"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label="Toggle navigation menu"
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu} />

            <motion.aside
                className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
                initial={{ x: '100%' }}
                animate={{ x: isMenuOpen ? 0 : '100%' }}
                transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            >
                <div>
                    <div className="brand" style={{ marginBottom: '1.2rem' }}>
                        <div className="brand-mark">DN</div>
                        <div className="brand-text">
                            <span className="brand-title">Deepak Nishad</span>
                            <span className="brand-subtitle">MERN Stack Developer</span>
                        </div>
                    </div>

                    <div className="mobile-nav-list">
                        {navItems.map((item) => {
                            const isActive = item.id === activeSection;
                            const isExternal = Boolean(item.href);
                            return (
                                <a
                                    key={item.id}
                                    href={item.href || `#${item.id}`}
                                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        closeMenu();
                                        if (isExternal) {
                                            onNavigate(item.id, item.href);
                                        } else {
                                            onNavigate(item.id);
                                        }
                                    }}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="header-actions" style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    <a href="#contact" className="action-btn" onClick={(event) => { event.preventDefault(); closeMenu(); onNavigate('contact'); }}>
                        Resume
                    </a>
                </div>
            </motion.aside>
        </>
    );
}

export default Header;
