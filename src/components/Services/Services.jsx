import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaLock, FaTasks, FaRocket } from 'react-icons/fa';
import './Services.css';

function Services() {
    const services = [
        {
            icon: FaCode,
            title: 'Responsive Websites',
            description: 'Building beautiful, mobile-friendly websites that work perfectly on all devices.',
        },
        {
            icon: FaServer,
            title: 'REST APIs',
            description: 'Creating scalable backend APIs with Node.js and Express for seamless data management.',
        },
        {
            icon: FaDatabase,
            title: 'CRUD Applications',
            description: 'Developing full-featured applications with complete Create, Read, Update, Delete functionality.',
        },
        {
            icon: FaLock,
            title: 'Authentication',
            description: 'Implementing secure user authentication systems using JWT and best security practices.',
        },
        {
            icon: FaTasks,
            title: 'Admin Dashboard',
            description: 'Creating intuitive admin dashboards for managing application data and users efficiently.',
        },
        {
            icon: FaRocket,
            title: 'Deployment',
            description: 'Deploying applications on modern cloud platforms for optimal performance and availability.',
        },
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
        <section className="services">
            <div className="services-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Services
                </motion.h2>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div key={index} className="service-card" variants={itemVariants}>
                                <IconComponent className="service-icon" />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Services;
