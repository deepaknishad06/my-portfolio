import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiVite } from 'react-icons/si';
import './TechStack.css';

function TechStack() {
    const technologies = [
        { icon: FaHtml5, name: 'HTML', color: '#E34C26' },
        { icon: FaCss3, name: 'CSS', color: '#1572B6' },
        { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
        { icon: FaReact, name: 'React', color: '#61DAFB' },
        { icon: FaNode, name: 'Node.js', color: '#68A063' },
        { icon: SiExpress, name: 'Express', color: '#90C53F' },
        { icon: SiMongodb, name: 'MongoDB', color: '#13AA52' },
        { icon: FaGitAlt, name: 'Git', color: '#F1502F' },
        { icon: FaGithub, name: 'GitHub', color: '#FFFFFF' },
        { icon: SiVite, name: 'Vite', color: '#646CFF' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="tech-stack">
            <div className="tech-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Tech Stack
                </motion.h2>

                <motion.div
                    className="tech-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {technologies.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <motion.div key={index} className="tech-card" variants={itemVariants}>
                                <IconComponent className="tech-icon" style={{ color: tech.color }} />
                                <p className="tech-name">{tech.name}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default TechStack;
