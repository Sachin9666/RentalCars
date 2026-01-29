import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Users, Briefcase, Fuel, Settings, Check, Zap, Shield, ChevronRight } from 'lucide-react';
import { vehicles } from '../data/vehicles';

const CarDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const foundCar = vehicles.find(v => v.id === parseInt(id));
        if (foundCar) {
            setCar(foundCar);
            window.scrollTo(0, 0);
        } else {
            navigate('/');
        }
    }, [id, navigate]);

    if (!car) return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading...</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-white"
        >
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300 pointer-events-none">
                <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
                    <motion.button
                        whileHover={{ x: -5 }}
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 bg-white shadow-md border border-blue-100 px-6 py-3 rounded-full text-blue-600 font-bold hover:bg-blue-50 transition mt-4"
                    >
                        <ArrowLeft size={20} /> Back
                    </motion.button>
                </div>
            </nav>

            <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Visuals */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="sticky top-32"
                    >
                        {/* Main Image Container */}
                        <div className="bg-gray-50 rounded-[3rem] p-8 mb-8 relative group overflow-hidden border border-gray-100 shadow-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <motion.img
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                                src={car.img}
                                alt={car.name}
                                className="w-full h-auto object-contain relative z-10"
                                style={{ maxHeight: '800px' }}
                            />

                            {/* Floating Rating Badge */}
                            <div className="absolute top-6 right-6 bg-white shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2 border border-gray-100 z-20">
                                <Star className="text-yellow-400 fill-current" size={18} />
                                <span className="font-bold text-gray-900">{car.rating}</span>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(`/book/${car.id}`)}
                            className="bg-blue-600 text-white text-lg font-bold px-8 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl hover:bg-blue-700 transition mb-8"
                        >
                            Book Now <ChevronRight size={20} className="stroke-[3]" />
                        </motion.button>

                        {/* Quick Benefits */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50/50 p-4 rounded-2xl flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Shield size={20} /></div>
                                <span className="text-sm font-semibold text-blue-900">Premium Insurance</span>
                            </div>
                            <div className="bg-green-50/50 p-4 rounded-2xl flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full text-green-600"><Zap size={20} /></div>
                                <span className="text-sm font-semibold text-green-900">Instant Booking</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="mb-2">
                            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase bg-blue-50 px-3 py-1 rounded-full">{car.category} Class</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                            {car.name}
                        </h1>

                        <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-gray-100">
                            <span className="text-4xl font-bold text-gray-900">₹{car.price.toLocaleString('en-IN')}</span>
                            <span className="text-gray-500 text-lg">/ day</span>
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed mb-10 font-light">
                            {car.desc} experience the perfect blend of performance and luxury.
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-10">
                            {[
                                { icon: <Users />, label: "Capacity", value: `${car.seats} Passengers` },
                                { icon: <Settings />, label: "Transmission", value: car.transmission },
                                { icon: <Briefcase />, label: "Luggage", value: "3 Bags" },
                                { icon: <Fuel />, label: "Fuel Type", value: "Petrol" },
                            ].map((spec, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="bg-gray-50 p-3 rounded-xl text-gray-600 shrink-0">
                                        {spec.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{spec.label}</p>
                                        <p className="text-gray-900 font-semibold">{spec.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Features List */}
                        <div className="mb-12">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg">Key Features</h3>
                            <ul className="space-y-3">
                                {car.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                                        <Check size={18} className="text-green-500" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>



                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default CarDetails;
