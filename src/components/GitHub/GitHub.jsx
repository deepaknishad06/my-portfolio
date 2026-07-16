import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaStar, FaUsers } from 'react-icons/fa';
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
                        <p>MERN Stack Developer | Open Source Contributor</p>

                        <div className="github-stats">
                            <div className="stat">
                                <FaCode />
                                <div>
                                    <span>20+</span>
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="stat">
                                <FaStar />
                                <div>
                                    <span>35+</span>
                                    <p>Repositories</p>
                                </div>
                            </div>
                            <div className="stat">
                                <FaUsers />
                                <div>
                                    <span>50+</span>
                                    <p>Followers</p>
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
