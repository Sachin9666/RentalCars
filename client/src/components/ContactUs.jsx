import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Mail, Phone, MapPin, Send, Menu, X, Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import '../styles/ContactUs.css';

const ContactUs = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', formState);
        alert('Thank you! We will get back to you shortly.');
    };

    const contactInfo = [
        {
            icon: <Phone size={24} />,
            title: "Call Us",
            detail: "+1 (555) 123-4567",
            subDetail: "Mon-Fri from 8am to 5pm"
        },
        {
            icon: <Mail size={24} />,
            title: "Email Us",
            detail: "hello@rentalcars.com",
            subDetail: "Online support 24/7"
        },
        {
            icon: <MapPin size={24} />,
            title: "Visit Us",
            detail: "123 Premium Way",
            subDetail: "Beverly Hills, CA 90210"
        }
    ];

    return (
        <div className="contact-page">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Car className="text-white" size={24} />
                            </div>
                            <span className="text-xl font-bold text-gray-900">RentalCars</span>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a>
                            <a href="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</a>
                            <a href="/contact" className="text-gray-900 font-medium hover:text-blue-600 transition">Contact</a>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <a href="/login" className="text-gray-700 font-medium hover:text-blue-600 transition">Sign In</a>
                            <a href="/register" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md">
                                Register
                            </a>
                        </div>

                        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-white border-t px-4 py-4 space-y-3"
                    >
                        <a href="/" className="block text-gray-600 py-2">Home</a>
                        <a href="/about" className="block text-gray-600 py-2">About Us</a>
                        <a href="/contact" className="block text-gray-900 font-medium py-2">Contact</a>
                        <hr />
                        <a href="/login" className="block text-gray-700 py-2">Sign In</a>
                        <a href="/register" className="block bg-blue-600 text-white text-center py-2 rounded-lg">Register</a>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-subtitle">
                        Have questions about our premium fleet or need assistance with your booking? We're here to help you 24/7.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="contact-container">

                {/* Sidebar */}
                <div className="contact-info-sidebar">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="info-card"
                        >
                            <div className="info-icon-box">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="info-label">{item.title}</h3>
                                <p className="info-text">{item.detail}</p>
                                <p className="info-subtext">{item.subDetail}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Social Box */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="social-box"
                    >
                        <h3 className="social-title">Follow Us</h3>
                        <p className="social-desc">Stay connected for exclusive offers.</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon-link"><Facebook size={20} /></a>
                            <a href="#" className="social-icon-link"><Twitter size={20} /></a>
                            <a href="#" className="social-icon-link"><Instagram size={20} /></a>
                            <a href="#" className="social-icon-link"><Linkedin size={20} /></a>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-section">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="contact-form-wrapper"
                    >
                        <div className="form-header">
                            <MessageSquare className="text-blue-600" size={28} />
                            <h2 className="form-title">Send us a Message</h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <select
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleInputChange}
                                    className="form-select"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="booking">Booking Inquiry</option>
                                    <option value="support">Customer Support</option>
                                    <option value="fleet">Fleet Information</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className="form-textarea"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600"
                    alt="Map Location"
                    className="map-img"
                />
                <div className="map-overlay">
                    <MapPin className="text-red-500" size={24} fill="currentColor" />
                    <span>Find us here</span>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Car className="text-blue-500" size={32} />
                            <span className="text-2xl font-bold">RentalCars</span>
                        </div>
                        <div className="text-gray-500 text-sm">
                            © 2024 RentalCars Inc. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
