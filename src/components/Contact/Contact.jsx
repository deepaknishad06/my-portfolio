import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(errText || res.statusText || 'Request failed');
            }

            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        } catch (err) {
            setError(err.message || 'Something went wrong');
            setTimeout(() => setError(null), 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 86993 58629</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>dcreation2706@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Ludhiana,Punjab</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/deepaknishad06" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="www.linkedin.com/in/deepak-nishad-2423b8354" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {submitted && <div className="success-message">Message sent successfully! 🎉</div>}
                        {error && <div className="error-message">{error}</div>}

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
