"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from '@/app/_components/Navbar';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  image: string;
  status: "online" | "busy" | "offline";
  rating: number;
  experience: string;
};

type ChatMessage = {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
};

type Consultation = {
  id: number;
  doctor: string;
  date: string;
  time: string;
  issue: string;
  status: string;
  diagnosis: string;
};

export default function DoctorConsultationUI() {
  const [activeTab, setActiveTab] = useState<"consult" | "history" | "doctors">("consult");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Ava Patel",
      specialty: "General Physician",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      status: "online",
      rating: 4.9,
      experience: "8 years"
    },
    {
      id: 2,
      name: "Dr. Ethan Kim",
      specialty: "Surgeon",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "online",
      rating: 4.8,
      experience: "12 years"
    },
    {
      id: 3,
      name: "Dr. Sophia Lee",
      specialty: "ENT Specialist",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      status: "busy",
      rating: 4.9,
      experience: "10 years"
    },
    {
      id: 4,
      name: "Dr. Liam Smith",
      specialty: "Pediatrician",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      status: "online",
      rating: 4.7,
      experience: "6 years"
    },
    {
      id: 5,
      name: "Dr. Carlos Rivera",
      specialty: "Cardiologist",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      status: "offline",
      rating: 4.9,
      experience: "15 years"
    },
    {
      id: 6,
      name: "Dr. Emily Zhang",
      specialty: "Dermatologist",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      status: "online",
      rating: 4.8,
      experience: "9 years"
    }
  ];

  const consultationHistory: Consultation[] = [
    {
      id: 1,
      doctor: "Dr. Ava Patel",
      date: "2025-06-28",
      time: "2:30 PM",
      issue: "Persistent headache and fatigue",
      status: "completed",
      diagnosis: "Tension headache, recommended rest and hydration"
    },
    {
      id: 2,
      doctor: "Dr. Sophia Lee",
      date: "2025-06-25",
      time: "10:15 AM",
      issue: "Ear pain and hearing difficulty",
      status: "completed",
      diagnosis: "Ear infection, prescribed antibiotics"
    },
    {
      id: 3,
      doctor: "Dr. Liam Smith",
      date: "2025-06-20",
      time: "4:45 PM",
      issue: "Child fever and cough",
      status: "completed",
      diagnosis: "Viral infection, rest and fluids recommended"
    },
    {
      id: 4,
      doctor: "Dr. Emily Zhang",
      date: "2025-06-18",
      time: "11:30 AM",
      issue: "Skin rash on arms",
      status: "completed",
      diagnosis: "Allergic reaction, prescribed antihistamine"
    }
  ];

  const handleSendMessage = async () => {
    if (!message.trim() || !selectedDoctor) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: message,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: Date.now() + 1,
        text: `Thank you for sharing your symptoms. Based on what you've described, I'd like to ask a few follow-up questions to better understand your condition. Can you tell me when these symptoms first started?`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setChatMessages([
      {
        id: 1,
        text: `Hello! I'm ${doctor.name}, your ${doctor.specialty}. I'm here to help you with your health concerns. Please describe your symptoms or what brings you here today.`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="min-h-screen mt-17 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <Navbar/>
      
      <div className="max-w-7xl mx-auto px-4 py-6 overflow-hidden">
      
        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md mb-6 p-2 overflow-hidden">
          <div className="flex gap-2">
            {[
              { id: "consult", label: "New Consultation", icon: "M12 8v4l3 3" },
              { id: "history", label: "Consultation History", icon: "M12 8v4l3 3" },
              { id: "doctors", label: "Available Doctors", icon: "M16 21v-2a4 4 0 00-8 0v2" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "consult" | "history" | "doctors")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#2E2C63] text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                }`}
                type="button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d={tab.icon} strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} fill="none"/>
                </svg>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {activeTab === "consult" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Doctor Selection */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-[#2E2C63] dark:text-blue-200 mb-4">Select a Doctor</h3>
              <div className="space-y-3">
                {doctors.filter(d => d.status === "online").slice(0, 4).map((doctor) => (
                  <motion.div
                    key={doctor.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedDoctor?.id === doctor.id
                        ? "border-[#2E2C63] bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-[#2E2C63]/50"
                    }`}
                    onClick={() => handleDoctorSelect(doctor)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{doctor.name}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{doctor.specialty}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs text-yellow-500">★</span>
                          <span className="text-xs text-gray-600 dark:text-gray-400">{doctor.rating}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
              {selectedDoctor ? (
                <>
                  {/* Chat Header */}
                  <div className="bg-[#2E2C63] text-white p-4 flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{selectedDoctor.name}</h4>
                      <p className="text-sm text-blue-200">{selectedDoctor.specialty}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Online</span>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="h-96 overflow-y-auto p-4 space-y-4">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === "user"
                              ? "bg-[#2E2C63] text-white"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <p className="text-xs mt-1 opacity-70">{msg.timestamp}</p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your symptoms or concerns..."
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E2C63] dark:bg-gray-800 dark:text-white"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                        className="px-6 py-2 bg-[#2E2C63] text-white rounded-lg hover:bg-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        type="button"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                      <path d="M16 21v-2a4 4 0 00-8 0v2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx={12} cy={7} r={4} stroke="currentColor" strokeWidth={1} fill="none"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">Select a Doctor to Start</h3>
                    <p className="text-gray-500 dark:text-gray-500">Choose an available doctor from the list to begin your consultation</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-[#2E2C63] dark:text-blue-200 mb-6">Consultation History</h3>
            <div className="space-y-4">
              {consultationHistory.map((consultation) => (
                <motion.div
                  key={consultation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-[#2E2C63] dark:text-blue-200">{consultation.doctor}</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {consultation.status}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{consultation.issue}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{consultation.diagnosis}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <span>{consultation.date}</span>
                        <span>{consultation.time}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-[#2E2C63] border border-[#2E2C63] rounded-lg hover:bg-[#2E2C63] hover:text-white transition-colors duration-300" type="button">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "doctors" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-[#2E2C63] dark:text-blue-200 mb-6">Available Doctors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-[#2E2C63]"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                      doctor.status === "online" ? "bg-green-500" : 
                      doctor.status === "busy" ? "bg-yellow-500" : "bg-gray-400"
                    }`}></div>
                  </div>
                  <h4 className="text-lg font-semibold text-[#2E2C63] dark:text-blue-200 mb-1">{doctor.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{doctor.specialty}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{doctor.rating} ({doctor.experience})</span>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => {
                        setActiveTab("consult");
                        handleDoctorSelect(doctor);
                      }}
                      disabled={doctor.status !== "online"}
                      className="px-4 py-2 bg-[#2E2C63] text-white rounded-lg hover:bg-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      type="button"
                    >
                      {doctor.status === "online" ? "Consult Now" : "Unavailable"}
                    </button>
                    <button className="px-4 py-2 border border-[#2E2C63] text-[#2E2C63] rounded-lg hover:bg-[#2E2C63] hover:text-white transition-colors duration-300 text-sm" type="button">
                      View Profile
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}