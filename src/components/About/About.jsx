import { motion } from 'framer-motion';
import profileImage from '../../assets/images/me.jpg';
import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img src={profileImage} alt="Deepak Nishad" />
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            Hey! I'm a <span className="highlight">BCA student</span> and passionate MERN Stack developer dedicated to
                            building responsive, user-friendly web applications.
                        </p>
                        <p>
                            I love turning ideas into beautiful, functional digital experiences. With a strong foundation in React,
                            Node.js, and MongoDB, I'm always learning new technologies and best practices.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring open-source projects, contributing to the community, and
                            tackling interesting problems that push my skills forward.
                        </p>
                        <p>
                            I'm looking for internship opportunities where I can apply my knowledge and grow as a developer.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="icon">🎓</span>
                                <p>BCA Student</p>
                            </div>
                            <div className="highlight-item">
                                <span className="icon">💻</span>
                                <p>Full Stack Developer</p>
                            </div>
                            <div className="highlight-item">
                                <span className="icon">🚀</span>
                                <p>Problem Solver</p>
                            </div>
                            <div className="highlight-item">
                                <span className="icon">🌱</span>
                                <p>Open Source</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
