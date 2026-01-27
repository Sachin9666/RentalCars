import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, Facebook, Chrome } from 'lucide-react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="auth-page-wrapper">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="glass-card p-10 w-full max-w-md flex flex-col items-center"
            >
                <div className="auth-logo-circle">
                    <img src="/logo-premium.png" alt="RentalCars Logo" />
                </div>

                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div className="input-group">
                        <div className="input-wrapper">
                            <input
                                type="email"
                                value={email}
                                placeholder="Username"
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-field"
                                required
                            />
                            <Mail className="input-icon" size={18} />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-wrapper">
                            <input
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                                required
                            />
                            <Lock className="input-icon" size={18} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary"
                    >
                        Login
                    </button>

                    <div className="flex justify-between px-2 mt-4">
                        <a href="#" className="link-muted">Forgot Password?</a>
                        <a href="/register" className="link-muted">Sign Up</a>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
