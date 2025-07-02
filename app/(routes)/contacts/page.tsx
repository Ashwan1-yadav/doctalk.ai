"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Navbar from '@/app/_components/Navbar';
import Link from 'next/link';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen mt-17 px-16 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f1f5f9] dark:from-[#1e293b] dark:via-[#2e2c63] dark:to-[#1e293b]">
      <Navbar/>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center pt-20 pb-16">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
        
        <div className="px-4 relative z-10 text-center">
          <motion.h1 
            className="text-3xl font-bold text-[#2E2C63] md:text-4xl lg:text-6xl dark:text-slate-300 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {"Get in Touch"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            We're here to help you with any questions about DocTalk.ai. Reach out to us anytime for support, feedback, or partnership opportunities.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2E2C63] text-white rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2E2C63] dark:text-blue-200">Phone</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">+91 562 123 4567</p>
                <p className="text-gray-600 dark:text-gray-300">+91 562 987 6543</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2E2C63] text-white rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2E2C63] dark:text-blue-200">Email</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">support@doctalk.ai</p>
                <p className="text-gray-600 dark:text-gray-300">info@doctalk.ai</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2E2C63] text-white rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2E2C63] dark:text-blue-200">Address</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  123 Healthcare Plaza<br />
                  Taj Nagari, Agra<br />
                  Uttar Pradesh 282001, India
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2E2C63] text-white rounded-full p-3 mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2E2C63] dark:text-blue-200">Hours</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM<br />
                  <span className="text-[#2E2C63] dark:text-blue-200 font-medium">AI Support: 24/7</span>
                </p>
              </div>
            </div>

            {/* Map Illustration */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#2E2C63] dark:text-blue-200 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Our Location in Agra, Uttar Pradesh
              </h3>
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Simple custom illustration for Agra, Uttar Pradesh */}
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  {/* Background */}
                  <rect width="400" height="256" fill="#e0e7ff" className="dark:fill-gray-800"/>
                  
                  {/* Yamuna River */}
                  <ellipse cx="320" cy="200" rx="60" ry="18" fill="#60a5fa" opacity="0.25"/>
                  
                  {/* Main Road */}
                  <rect x="60" y="110" width="280" height="18" fill="#6b7280" opacity="0.2"/>
                  <text x="200" y="105" textAnchor="middle" fontSize="11" fill="#2E2C63" fontWeight="bold">MG Road</text>
                  
                  {/* Taj Mahal Block */}
                  <g>
                    <rect x="170" y="60" width="60" height="40" fill="#fff" stroke="#2E2C63" strokeWidth="2" rx="8"/>
                    {/* Taj domes */}
                    <ellipse cx="200" cy="60" rx="10" ry="8" fill="#fff" stroke="#2E2C63" strokeWidth="2"/>
                    <ellipse cx="230" cy="60" rx="10" ry="8" fill="#fff" stroke="#2E2C63" strokeWidth="2"/>
                    {/* Taj minarets */}
                    <rect x="165" y="65" width="6" height="30" fill="#fff" stroke="#2E2C63" strokeWidth="1"/>
                    <rect x="229" y="65" width="6" height="30" fill="#fff" stroke="#2E2C63" strokeWidth="1"/>
                    {/* Taj Mahal label */}
                    <text x="200" y="90" textAnchor="middle" fontSize="12" fill="#2E2C63" fontWeight="bold">Taj Mahal</text>
                  </g>
                  
                  {/* Location Pin */}
                  <g>
                    <circle cx="200" cy="80" r="9" fill="#ff4444" stroke="#2E2C63" strokeWidth="2"/>
                    <polygon points="200,89 195,105 205,105" fill="#ff4444"/>
                  </g>
                  
                  {/* Agra City Label */}
                  <text x="350" y="240" textAnchor="end" fontSize="13" fill="#2E2C63" fontWeight="bold">Agra</text>
                  {/* Uttar Pradesh Label */}
                  <text x="50" y="240" textAnchor="start" fontSize="11" fill="#2E2C63" fontWeight="bold">Uttar Pradesh</text>
                </svg>
                <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded text-xs text-[#2E2C63] dark:text-blue-200">
                  Near Taj Mahal, MG Road, Agra, Uttar Pradesh, India
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-[#2E2C63] dark:text-blue-200 mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2E2C63] dark:text-blue-200 mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2E2C63] focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2E2C63] focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2E2C63] focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2E2C63] focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2E2C63] focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2E2C63] text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-[#2E2C63] dark:bg-blue-900 rounded-2xl shadow-xl px-8 py-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            For urgent medical questions, remember that DocTalk.ai is available 24/7. Our AI doctors are always ready to assist you with immediate medical guidance and support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dashboard" passHref>
              <button className="bg-white text-[#2E2C63] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                Chat with AI Doctor
              </button>
            </Link>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}