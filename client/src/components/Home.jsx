import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Search, Car, Star, Shield, Clock, Users, ChevronDown, Phone, Mail, Facebook, Twitter, Instagram, Menu, X, Check, ArrowRight } from 'lucide-react';
import { vehicles } from '../data/vehicles';

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Types');
    const [filteredVehicles, setFilteredVehicles] = useState([]);

    useEffect(() => {
        // Initial load - show featured (e.g., first 6)
        setFilteredVehicles(vehicles.slice(0, 6));
    }, []);

    const handleSearch = () => {
        let results = vehicles;

        if (selectedCategory !== 'All Types') {
            results = results.filter(v => v.category === selectedCategory);
        }

        // Logic for location/dates would go here - for now acts as a refresher or filter trigger
        // simulating a search delay for animation
        setFilteredVehicles([]);
        setTimeout(() => {
            setFilteredVehicles(results.slice(0, 20)); // Show up to 20 results on search
            // Scroll to vehicles section
            document.getElementById('vehicles').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        // smooth scroll to vehicles section
        document.getElementById('vehicles').scrollIntoView({ behavior: 'smooth' });

        // Filter immediatley
        if (categoryName === 'All Types') {
            setFilteredVehicles(vehicles.slice(0, 6));
        } else {
            const results = vehicles.filter(v => v.category === categoryName);
            setFilteredVehicles(results);
        }
    };

    const categories = [
        { name: 'Economy', icon: '🚗', count: vehicles.filter(v => v.category === 'Economy').length },
        { name: 'SUV', icon: '🚙', count: vehicles.filter(v => v.category === 'SUV').length },
        { name: 'Luxury', icon: '🏎️', count: vehicles.filter(v => v.category === 'Luxury').length },
        { name: 'Electric', icon: '⚡', count: vehicles.filter(v => v.category === 'Electric').length },
        { name: 'Sports', icon: '🏁', count: vehicles.filter(v => v.category === 'Sports').length },
        { name: 'Vans', icon: '🚐', count: vehicles.filter(v => v.category === 'Vans').length },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
                            >
                                <Car className="text-white" size={24} />
                            </motion.div>
                            <span className="text-xl font-bold text-gray-900">RentalCars</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="/" className="text-gray-900 font-medium hover:text-blue-600 transition">Home</a>
                            <a href="#vehicles" className="text-gray-600 hover:text-blue-600 transition">Vehicles</a>
                            <a href="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</a>
                            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact Us</a>
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
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t px-4 py-4 space-y-3 overflow-hidden"
                        >
                            <a href="/" className="block text-gray-900 font-medium py-2">Home</a>
                            <a href="#vehicles" className="block text-gray-600 py-2">Vehicles</a>
                            <a href="/about" className="block text-gray-600 py-2">About Us</a>
                            <a href="/contact" className="block text-gray-600 py-2">Contact</a>
                            <hr />
                            <a href="/login" className="block text-gray-700 py-2">Sign In</a>
                            <a href="/register" className="block bg-blue-600 text-white text-center py-2 rounded-lg">Register</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                        transition={{ duration: 25, repeat: Infinity }}
                        className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
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
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#vehicles"
                                    className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition shadow-lg flex items-center gap-2"
                                >
                                    Browse Vehicles <ArrowRight size={20} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                                    whileTap={{ scale: 0.95 }}
                                    href="/about"
                                    className="bg-white/10 backdrop-blur border border-white/20 px-8 py-3 rounded-lg font-medium transition"
                                >
                                    About Us
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, rotateY: 90 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="hidden lg:block perspective-1000"
                        >
                            <motion.img
                                whileHover={{ scale: 1.02, rotateY: 5 }}
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
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="lg:col-span-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Pick-up Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    value={pickupLocation}
                                    onChange={(e) => setPickupLocation(e.target.value)}
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
                                    value={pickupDate}
                                    onChange={(e) => setPickupDate(e.target.value)}
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
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Car Type</label>
                            <div className="relative">
                                <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none bg-white"
                                >
                                    <option value="All Types">All Types</option>
                                    <option value="Economy">Economy</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Luxury">Luxury</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Vans">Vans</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </div>
                        <div className="flex items-end">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleSearch}
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Search size={20} />
                                Search
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Categories */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: '#3b82f6', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                            onClick={() => handleCategoryClick(cat.name)}
                            className={`bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition cursor-pointer border-2 ${selectedCategory === cat.name ? 'border-blue-600 ring-1 ring-blue-600' : 'border-gray-100'}`}
                        >
                            <div className="text-4xl mb-3">{cat.icon}</div>
                            <h3 className="font-semibold text-gray-900">{cat.name}</h3>
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
                            <h2 className="text-2xl font-bold text-gray-900">
                                {selectedCategory === 'All Types' ? 'Featured Vehicles' : `${selectedCategory} Vehicles`}
                            </h2>
                            <p className="text-gray-600">Handpicked cars for the best experience</p>
                        </div>
                        <a href="/vehicles" className="hidden md:flex items-center gap-2 text-blue-600 font-medium hover:underline">
                            View All <ArrowRight size={18} />
                        </a>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={selectedCategory + filteredVehicles.length} // Force re-render animation on change
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence>
                            {filteredVehicles.map((vehicle) => (
                                <motion.div
                                    key={vehicle.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            src={vehicle.img}
                                            alt={vehicle.name}
                                            className="w-full h-full object-cover"
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
                                            <a href={`/car/${vehicle.id}`}>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                                                >
                                                    Book Now
                                                </motion.button>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* About Us Preview */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-blue-600 font-semibold mb-2 block">About Us</span>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Car Rental Service Since 2024</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We pride ourselves on providing a top-tier driving experience. Whether you need a luxury cruiser for a weekend getaway or a sporty convertible for a special occasion, we have the perfect vehicle waiting for you.
                            </p>
                            <a href="/about" className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
                                Read Our Story <ArrowRight size={20} />
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800"
                                alt="About Us"
                                className="rounded-2xl shadow-xl hover:shadow-2xl transition duration-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Preview */}
            <section className="bg-blue-600 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready for Your Next Journey?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Contact us today to book your dream car or get more information about our fleet.
                    </p>
                    <div className="flex justify-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
                        >
                            Contact Us
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/vehicles"
                            className="bg-blue-700 border border-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
                        >
                            View Fleet
                        </motion.a>
                    </div>
                </motion.div>
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
                            <a href="#" className="text-white transition">Privacy Policy</a>
                            <a href="#" className="text-white transition">Terms of Service</a>
                            <a href="#" className="text-white transition">Cookie Policy</a>
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

export default Home;
