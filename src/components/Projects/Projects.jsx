import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import hospitalProject from "../../assets/images/hospital-project.png";
import portfolioProject from "../../assets/images/portfolio-project.png";

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Hospital Appointment System',
            description: 'A full-stack appointment booking system with user authentication, real-time updates, and email notifications.',
            tech: ['React', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
            image: hospitalProject,
            github: 'https://github.com/deepaknishad06/hospital-appointment-system',
            live: 'https://hospital-appointment-system-phi.vercel.app/',
        },
        {
            id: 2,
            title: 'Personal Portfolio',
            description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
            tech: ['React', 'Framer Motion', 'CSS', 'Vite'],
            image: portfolioProject,
            github: 'https://github.com',
            live: 'https://my-portfolio-phi.vercel.app/',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} className="project-card" variants={itemVariants}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-btn">
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
