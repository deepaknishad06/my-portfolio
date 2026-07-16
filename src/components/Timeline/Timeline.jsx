import { motion } from 'framer-motion';
import './Timeline.css';

function Timeline() {
    const timeline = [
        { year: '2023', title: 'Started BCA', icon: '🎓' },
        { year: '2023', title: 'Learned HTML & CSS', icon: '🎨' },
        { year: '2024', title: 'Mastered JavaScript', icon: '⚡' },
        { year: '2024', title: 'Started React Development', icon: '⚛️' },
        { year: '2024', title: 'Learned Node.js & Express.js', icon: '🖥️' },
        { year: '2024', title: 'Worked with MongoDB', icon: '📊' },
        { year: '2025', title: 'Started MERN Stack Internship', icon: '🏥' },
        { year: '2025', title: 'Open to Full-Stack Developer Opportunities', icon: '🚀' },
    ];

    return (
        <section className="timeline">
            <div className="timeline-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    My Learning Journey
                </motion.h2>

                <div className="timeline-wrapper">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content">
                                <span className="timeline-year">{item.year}</span>
                                <p className="timeline-title">{item.title}</p>
                            </div>
                            <div className="timeline-marker">{item.icon}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Timeline;
