import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, CreditCard, Shield, Star, Check } from 'lucide-react';
import { vehicles } from '../data/vehicles';

const BookingPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        phone: '',
        pickupDate: '',
        returnDate: '',
        message: ''
    });

    useEffect(() => {
        const foundCar = vehicles.find(v => v.id === parseInt(id));
        if (foundCar) {
            setCar(foundCar);
            window.scrollTo(0, 0);
        } else {
            navigate('/');
        }
    }, [id, navigate]);

    if (!car) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    const handleChange = (e) => {
        setBookingData({ ...bookingData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Booking request received! We will contact you shortly.');
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Nav */}
            <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 px-4 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition"
                    >
                        <ArrowLeft size={20} /> Back to Details
                    </button>
                    <span className="text-xl font-bold text-gray-900">Checkout</span>
                    <div className="w-20"></div>
                </div>
            </nav>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Booking Form - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 relative">
                        {/* Top Gradient Bar */}
                        <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

                        <div className="p-8 md:p-12">
                            <div className="mb-10 text-center">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Secure Reservation</h2>
                                <p className="text-gray-500">Complete the form below to book <span className="font-bold text-gray-800">{car.name}</span></p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-5">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Your Details</h3>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                            <input
                                                type="text" name="name" required value={bookingData.name} onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                            <input
                                                type="email" name="email" required value={bookingData.email} onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                                            <input
                                                type="tel" name="phone" required value={bookingData.phone} onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Trip Dates</h3>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Pick-up Date</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="date" name="pickupDate" required value={bookingData.pickupDate} onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Return Date</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="date" name="returnDate" required value={bookingData.returnDate} onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Requests</label>
                                            <textarea
                                                name="message" rows="1" value={bookingData.message} onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition resize-none"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-xl">
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Total Price</p>
                                            <p className="text-xs text-gray-400">
                                                (₹{car.price.toLocaleString('en-IN')} x {
                                                    bookingData.pickupDate && bookingData.returnDate
                                                        ? (() => {
                                                            const start = new Date(bookingData.pickupDate);
                                                            const end = new Date(bookingData.returnDate);
                                                            const diffTime = Math.abs(end - start);
                                                            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                                            return diffDays > 0 ? diffDays : 1;
                                                        })()
                                                        : 1
                                                } days)
                                            </p>
                                        </div>
                                        <p className="text-3xl font-bold text-blue-600">
                                            ₹{(() => {
                                                if (!bookingData.pickupDate || !bookingData.returnDate) return car.price.toLocaleString('en-IN');
                                                const start = new Date(bookingData.pickupDate);
                                                const end = new Date(bookingData.returnDate);
                                                const diffTime = Math.abs(end - start);
                                                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                                const days = diffDays > 0 ? diffDays : 1;
                                                return (car.price * days).toLocaleString('en-IN');
                                            })()}
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    >
                                        <CreditCard size={20} /> Confirm Booking
                                    </button>
                                    <p className="text-center text-gray-400 text-sm mt-4 flex items-center justify-center gap-1">
                                        <Shield size={14} /> Secure SSL Encrypted Transaction
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BookingPage;
