import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Car, Star, Users, ArrowRight } from 'lucide-react';
import { vehicles } from '../data/vehicles';

const AllCars = () => {
    const [filter, setFilter] = useState('All');     

    const categories = ['All', 'Economy', 'SUV', 'Luxury', 'Sports', 'Electric', 'Vans'];

    const filteredVehicles = filter === 'All'
        ? vehicles
        : vehicles.filter(v => v.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm sticky top-0 z-50 px-4 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition font-medium">
                        <ArrowLeft size={20} /> Back Home
                    </a>
                    <span className="text-xl font-bold text-gray-900">Our Complete Fleet</span>
                    <div className="w-24"></div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full font-medium transition ${filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={filter}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence>
                        {filteredVehicles.map((vehicle) => (
                            <motion.div
                                key={vehicle.id}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                layout
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group flex flex-col"
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
                                <div className="p-4 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-gray-900 leading-tight">{vehicle.name}</h3>
                                            <div className="flex items-center gap-1 text-yellow-500 shrink-0">
                                                <Star size={14} fill="currentColor" />
                                                <span className="text-xs font-bold text-gray-700">{vehicle.rating}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 text-xs text-gray-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Users size={12} /> {vehicle.seats}
                                            </span>
                                            <span>{vehicle.transmission}</span>
                                            <span>| {vehicle.features[0]}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-2">
                                        <div>
                                            <span className="text-xl font-bold text-blue-600">₹{vehicle.price.toLocaleString('en-IN')}</span>
                                            <span className="text-gray-500 text-xs">/day</span>
                                        </div>
                                        <a href={`/car/${vehicle.id}`}>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-blue-600/10 text-blue-600 px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition"
                                            >
                                                Details
                                            </motion.button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default AllCars;
