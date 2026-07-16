import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import profileImage from '../../assets/images/me.jpg';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="hero-greeting">Hey there! 👋</p>
                    <h1 className="hero-title">
                        I'm <span className="gradient-text">Deepak Nishad</span>
                    </h1>
                    <p className="hero-subtitle">MERN Stack Developer</p>

                    <TypeAnimation
                        sequence={[
                            'Building Modern Web Apps',
                            2000,
                            'Creating Beautiful Interfaces',
                            2000,
                            'Solving Complex Problems',
                            2000,
                        ]}
                        wrapper="p"
                        className="hero-typing"
                        repeat={Infinity}
                    />

                    <div className="hero-buttons">
                        <a href="/src/assets/resume/Deepak_Nishad_Resume.pdf" download className="btn btn-primary">
                            Download Resume
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            View Projects
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/deepaknishad06" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="www.linkedin.com/in/deepak-nishad-2423b8354" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaTwitter />
                        </a> */}
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="profile-frame">
                        <img src={profileImage} alt="Deepak Nishad" className="profile-img" />
                        <div className="profile-glow"></div>
                    </div>
                    <div className="floating-icons desktop-icons">
                        <div className="icon-box">
                            <FaReact />
                        </div>
                        <div className="icon-box">
                            <FaNodeJs />
                        </div>
                        <div className="icon-box">
                            <SiMongodb />
                        </div>
                    </div>
                    <div className="floating-icons mobile-text">
                        <div className="icon-box">React</div>
                        <div className="icon-box">Node</div>
                        <div className="icon-box">MongoDB</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
