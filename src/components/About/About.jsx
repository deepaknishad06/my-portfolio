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
                            I’m a MERN Stack Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world projects using React, Node.js, Express.js, and MongoDB while continuously improving my skills and exploring new technologies.</p>
                        <p>
                            When I'm not coding, you'll find me exploring open-source projects, contributing to the community, and
                            tackling interesting problems that push my skills forward.
                        </p>
                        <p>
I'm actively seeking internship opportunities where I can apply my skills, contribute to real-world projects, and continue growing as a MERN Stack Developer. </p>

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
                                <p>Quick Learner</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
