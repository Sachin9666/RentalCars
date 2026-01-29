import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Users, Award, Shield, Target, Clock, Menu, X, ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const stats = [
        { label: 'Years of Experience', value: '15+', icon: <Clock size={24} /> },
        { label: 'Happy Customers', value: '50k+', icon: <Users size={24} /> },
        { label: 'Premium Vehicles', value: '500+', icon: <Car size={24} /> },
        { label: 'Awards Won', value: '25+', icon: <Award size={24} /> },
    ];

    const values = [
        {
            title: 'Customer First',
            desc: 'Your satisfaction is our top priority. We go above and beyond to ensure your journey is perfect.',
            icon: <Users size={32} />
        },
        {
            title: 'Premium Quality',
            desc: 'We maintain our fleet to the highest standards, ensuring safety and comfort in every mile.',
            icon: <Shield size={32} />
        },
        {
            title: 'Transparency',
            desc: 'No hidden fees or surprises. What you see is exactly what you pay, guaranteed.',
            icon: <Target size={32} />
        }
    ];

    const team = [
        { name: 'James Wilson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
        { name: 'Sarah Chen', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
        { name: 'Michael Ross', role: 'Fleet Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
        { name: 'Emily Parker', role: 'Customer Success', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
    ];

    return (
        <div className="about-page">
            {/* Same Navigation */}
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
                            <a href="/about" className="text-gray-900 font-medium hover:text-blue-600 transition">About Us</a>
                            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
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
                        <a href="/about" className="block text-gray-900 font-medium py-2">About Us</a>
                        <a href="/contact" className="block text-gray-600 py-2">Contact</a>
                        <hr />
                        <a href="/login" className="block text-gray-700 py-2">Sign In</a>
                        <a href="/register" className="block bg-blue-600 text-white text-center py-2 rounded-lg">Register</a>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-bg-circle bg-circle-1"></div>
                <div className="about-hero-bg-circle bg-circle-2"></div>

                <div className="about-hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="about-title"
                    >
                        Driving the Future of <span className="highlight-text">Mobility</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="about-subtitle"
                    >
                        We're on a mission to revolutionize the car rental industry with premium vehicles, seamless technology, and unmatched customer service.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="stat-card"
                        >
                            <div className="stat-icon-wrapper">
                                {stat.icon}
                            </div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Story */}
            <section className="story-section">
                <div className="story-container">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="story-badge">Our Story</span>
                        <h2 className="section-title">Redefining How You Rent Cars Since 2008</h2>
                        <div className="story-text">
                            <p>
                                Started as a small local business with just 5 cars, RentalCars has grown into a premier mobility provider. We realized that the traditional rental process was broken—full of paperwork, hidden fees, and lackluster vehicles.
                            </p>
                            <p>
                                We set out to change that. By combining cutting-edge technology with a fleet of premium vehicles, we've created a rental experience that is as enjoyable as the drive itself.
                            </p>
                        </div>
                        <button className="btn-primary">
                            Join Our Journey <ArrowRight size={20} />
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="story-img-wrapper"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
                            alt="Our Fleet"
                            className="story-img"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section">
                <div className="values-header">
                    <h2 className="section-title">Why Choose RentalCars?</h2>
                    <p className="story-text">We don't just rent cars; we provide a seamless travel experience built on trust and quality.</p>
                </div>

                <div className="values-grid">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="value-card"
                        >
                            <div className="value-icon">
                                {value.icon}
                            </div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="story-text" style={{ fontSize: '1rem' }}>{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet Our Leadership</h2>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="team-card"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="team-img"
                            />
                            <div className="team-overlay">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Car className="text-blue-500" size={32} />
                            <span className="text-2xl font-bold">RentalCars</span>
                        </div>
                        <div className="flex gap-8 text-gray-400">
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition">Terms of Service</a>
                            <a href="#" className="hover:text-white transition">Cookie Policy</a>
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

export default About;
