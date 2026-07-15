import { motion } from 'framer-motion';
import './footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <motion.div
                className="footer-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <p>
                    Made with <span className="heart">❤️</span> by Deepak Nishad
                </p>
                <p>React + Vite + Framer Motion</p>
                <p>&copy; {currentYear} All rights reserved.</p>
            </motion.div>
        </footer>
    );
}

export default Footer;
