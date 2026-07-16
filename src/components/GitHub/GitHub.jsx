import { motion } from 'framer-motion';
import { FaFolderOpen, FaCode, FaLaptopCode } from "react-icons/fa";
import './GitHub.css';

function GitHub() {
    return (
        <section className="github">
            <div className="github-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    GitHub Profile
                </motion.h2>

                <div className="github-content">
                    <motion.div
                        className="github-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <FaGithub className="github-icon" />
                        <h3>DeepakNishad</h3>
                        <p>MERN Stack Developer | React Enthusiast</p>

                        <div className="github-stats">
                            <div className="stat">
                                <FaFolderOpen />
                                <div>
                                    <span>3+</span>
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="stat">
                                <FaCode />
                                <div>
                                    <span>10+</span>
                                    <p>Technologies</p>
                                </div>
                            </div>
                            <div className="stat">
                                <FaLaptopCode />
                                <div>
                                    <span>2023</span>
                                    <p>2023</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://github.com/deepaknishad06" target="_blank" rel="noopener noreferrer" className="github-btn">
                            Visit GitHub
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default GitHub;
