import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Search, Car, Star, Shield, Clock, Users, ChevronDown, Phone, Mail, Facebook, Twitter, Instagram, Menu, X, Check, ArrowRight } from 'lucide-react';

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const vehicles = [
        { id: 1, name: 'BMW M4 Competition', category: 'Sports', price: 15000, rating: 4.9, seats: 4, transmission: 'Auto', img: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=600' },
        { id: 2, name: 'Porsche 911 Carrera', category: 'Luxury', price: 25000, rating: 5.0, seats: 2, transmission: 'Auto', img: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=600' },
        { id: 3, name: 'Nissan GT-R R35', category: 'Sports', price: 20000, rating: 4.9, seats: 4, transmission: 'Auto', img: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&w=600' },
        { id: 4, name: 'Toyota Supra MK5', category: 'Sports', price: 12000, rating: 4.8, seats: 2, transmission: 'Manual', img: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&w=600' },
        { id: 5, name: 'Mahindra Thar', category: 'SUV', price: 8000, rating: 4.7, seats: 4, transmission: 'Manual', img: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&w=600' },
        { id: 6, name: 'Audi RS5 Sportback', category: 'Luxury', price: 18000, rating: 4.9, seats: 5, transmission: 'Auto', img: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&w=600' },
    ];

    const categories = [
        { name: 'Economy', icon: '🚗', count: 24 },
        { name: 'SUV', icon: '🚙', count: 18 },
        { name: 'Luxury', icon: '🏎️', count: 12 },
        { name: 'Electric', icon: '⚡', count: 8 },
        { name: 'Vans', icon: '🚐', count: 6 },
    ];

    const features = [
        { icon: <Shield size={32} />, title: 'Best Price Guaranteed', desc: 'Find a lower price? We\'ll match it plus give you 10% off.' },
        { icon: <Clock size={32} />, title: '24/7 Customer Support', desc: 'Our dedicated team is available round the clock to assist you.' },
        { icon: <Car size={32} />, title: 'Wide Selection', desc: 'Choose from 500+ vehicles across all categories and budgets.' },
        { icon: <Check size={32} />, title: 'Free Cancellation', desc: 'Plans change. Cancel up to 24 hours before for free.' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Car className="text-white" size={24} />
                            </div>
                            <span className="text-xl font-bold text-gray-900">RentalCars</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#" className="text-gray-900 font-medium hover:text-blue-600 transition">Home</a>
                            <a href="#vehicles" className="text-gray-600 hover:text-blue-600 transition">Vehicles</a>
                            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition">How It Works</a>
                            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
                        </div>

                        {/* Auth Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href="/login" className="text-gray-700 font-medium hover:text-blue-600 transition">Sign In</a>
                            <a href="/register" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md">
                                Register
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-white border-t px-4 py-4 space-y-3"
                    >
                        <a href="#" className="block text-gray-900 font-medium py-2">Home</a>
                        <a href="#vehicles" className="block text-gray-600 py-2">Vehicles</a>
                        <a href="#how-it-works" className="block text-gray-600 py-2">How It Works</a>
                        <a href="#contact" className="block text-gray-600 py-2">Contact</a>
                        <hr />
                        <a href="/login" className="block text-gray-700 py-2">Sign In</a>
                        <a href="/register" className="block bg-blue-600 text-white text-center py-2 rounded-lg">Register</a>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                                #1 Car Rental Service
                            </span>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                                Find Your Perfect <span className="text-yellow-400">Ride</span> Today
                            </h1>
                            <p className="text-lg text-blue-100 mb-8 max-w-lg">
                                Choose from our wide selection of premium vehicles at unbeatable prices. Easy booking, flexible pickup, and 24/7 support.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#vehicles" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition shadow-lg flex items-center gap-2">
                                    Browse Vehicles <ArrowRight size={20} />
                                </a>
                                <a href="#how-it-works" className="bg-white/10 backdrop-blur border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition">
                                    How It Works
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800"
                                alt="Premium Car"
                                className="rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Search Widget */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="lg:col-span-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Pick-up Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="City or Airport"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Pick-up Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Return Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Car Type</label>
                            <div className="relative">
                                <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none bg-white">
                                    <option>All Types</option>
                                    <option>Economy</option>
                                    <option>SUV</option>
                                    <option>Luxury</option>
                                    <option>Electric</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </div>
                        <div className="flex items-end">
                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg">
                                <Search size={20} />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition cursor-pointer border border-gray-100 hover:border-blue-200 group"
                        >
                            <div className="text-4xl mb-3">{cat.icon}</div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">{cat.name}</h3>
                            <p className="text-sm text-gray-500">{cat.count} vehicles</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Vehicles */}
            <section id="vehicles" className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Featured Vehicles</h2>
                            <p className="text-gray-600">Handpicked cars for the best experience</p>
                        </div>
                        <a href="#" className="hidden md:flex items-center gap-2 text-blue-600 font-medium hover:underline">
                            View All <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vehicles.map((vehicle, index) => (
                            <motion.div
                                key={vehicle.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={vehicle.img}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {vehicle.category}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-bold text-gray-900">{vehicle.name}</h3>
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            <Star size={16} fill="currentColor" />
                                            <span className="text-sm font-semibold text-gray-700">{vehicle.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Users size={14} /> {vehicle.seats} Seats
                                        </span>
                                        <span>{vehicle.transmission}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                        <div>
                                            <span className="text-2xl font-bold text-blue-600">₹{vehicle.price.toLocaleString('en-IN')}</span>
                                            <span className="text-gray-500 text-sm">/day</span>
                                        </div>
                                        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
