import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, UserPlus, ArrowLeft, Phone, Facebook, Chrome } from 'lucide-react';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration attempt:', formData);
    };

    return (
        <div className="auth-page-wrapper">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="glass-card p-10 w-full max-w-2xl flex flex-col items-center"
            >

                <motion.div variants={itemVariants} className="auth-logo-circle">
                    <img src="/logo-premium.png" alt="RentalCars Logo" />
                </motion.div>

                <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <motion.div variants={itemVariants} className="input-group md:col-span-2">
                        <div className="input-wrapper">
                            <input
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Full Name"
                                required
                            />
                            <User className="input-icon" size={18} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="input-group">
                        <div className="input-wrapper">
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Email Address"
                                required
                            />
                            <Mail className="input-icon" size={18} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="input-group">
                        <div className="input-wrapper">
                            <input
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Phone Number"
                                required
                            />
                            <Phone className="input-icon" size={18} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="input-group">
                        <div className="input-wrapper">
                            <input
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Password"
                                required
                            />
                            <Lock className="input-icon" size={18} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="input-group">
                        <div className="input-wrapper">
                            <input
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Confirm Password"
                                required
                            />
                            <Lock className="input-icon" size={18} />
                        </div>
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="btn-primary md:col-span-2 mt-4"
                    >
                        Create Account
                    </motion.button>

                    <motion.div variants={itemVariants} className="md:col-span-2 flex justify-center mt-4">
                        <a href="/login" className="link-muted flex items-center gap-2">
                            <ArrowLeft size={16} /> Back to Sign In
                        </a>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default Register;
