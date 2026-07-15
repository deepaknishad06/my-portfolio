import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

function Skills() {
    const skills = [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'MongoDB', level: 75 },
        { name: 'CSS', level: 90 },
        { name: 'HTML', level: 95 },
    ];

    return (
        <section className="skills">
            <div className="skills-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="progress-circle">
                                <CircularProgressbar
                                    value={skill.level}
                                    text={`${skill.level}%`}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        textSize: '1.2rem',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `var(--primary)`,
                                        textColor: 'var(--primary)',
                                        trailColor: 'rgba(59, 130, 246, 0.1)',
                                        backgroundColor: 'rgba(59, 130, 246, 0.05)',
                                    })}
                                />
                            </div>
                            <p className="skill-name">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
