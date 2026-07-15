import { motion } from 'framer-motion';
import './Loader.css';

function Loader() {
    return (
        <div className="loader">
            <motion.div
                className="loader-dot"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
                <div className="dot dot-1" />
                <div className="dot dot-2" />
                <div className="dot dot-3" />
            </motion.div>
        </div>
    );
}

export default Loader;
