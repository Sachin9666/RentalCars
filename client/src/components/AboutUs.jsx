import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Star, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 p-6 rounded-2xl shadow-xl w-64">
              <div className="text-3xl font-bold">500+</div>
              <div className="font-semibold">Vehicles in Fleet</div>
              <div className="text-sm text-gray-700 mt-1">Serving 50+ cities nationwide</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in <span className="text-blue-600">Premium</span> Car Rentals
            </h2>
            <p className="text-gray-600 mb-6">
              Since 2010, RentalCars has been redefining the car rental experience. We combine cutting-edge 
              technology with personalized service to deliver seamless mobility solutions for both leisure 
              and business travelers.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">100% Verified Vehicles</h4>
                  <p className="text-gray-600 text-sm">Every car undergoes 150-point inspection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Roadside Assistance</h4>
                  <p className="text-gray-600 text-sm">Always here when you need us</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Star className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">4.9/5 Customer Rating</h4>
                  <p className="text-gray-600 text-sm">Trusted by 50,000+ customers</p>
                </div>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              Learn More <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;