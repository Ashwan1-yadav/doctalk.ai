"use client";


import { motion } from "motion/react";

export default function HeroSectionOne() {
  return (
    <div>
      <div className="relative  flex  flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-12 md:py-20 relative z-10">
        <h1 className="relative z-10 mt-15 mx-auto max-w-4xl text-center text-3xl font-bold text-[#2E2C63] md:text-4xl lg:text-8xl dark:text-slate-300">
          {"Bridging  to  Smarter  Healthcare"
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
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Talk to a Doctor in Seconds — No Waiting Rooms, No Appointments. Get
          Real Conversations, Real Care, With DocTalk.ai, you can talk to your
          doctor in seconds, not days. Try our best in class, state of the art,
          cutting edge AI tools to get your conversations up.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-[#2E2C63] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-[#2E2C63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center mt-10">
    <div className="px-4 py-10 md:py-20 relative z-10">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-xl font-bold text-[#2E2C63] md:text-2xl lg:text-6xl dark:text-slate-300">
            {"Revolutionizing  Healthcare Access  with  AI"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
        </div>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Your Health, Your Terms — Instant, Intelligent Medical Guidance at Your Fingertips. Experience confidential, AI-powered consultations anytime, anywhere, and take control of your well-being with DocTalk.ai.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-4"
        >
          
        </motion.div>
      </div>
    </div>
    <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transform transition-transform hover:-translate-y-2">
        <div className="bg-[#2E2C63] text-white rounded-full p-3 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Instant Doctor Access</h3>
        <p className="text-gray-600 dark:text-gray-300">Connect with an AI-powered doctor in seconds—no waiting rooms, no appointments required.</p>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transform transition-transform hover:-translate-y-2">
        <div className="bg-[#2E2C63] text-white rounded-full p-3 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 4v16m0 0H3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
        <p className="text-gray-600 dark:text-gray-300">Get medical advice anytime, anywhere—DocTalk.ai is always ready to help, day or night.</p>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transform transition-transform hover:-translate-y-2">
        <div className="bg-[#2E2C63] text-white rounded-full p-3 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Accurate Symptom Analysis</h3>
        <p className="text-gray-600 dark:text-gray-300">Advanced AI analyzes your symptoms to suggest possible causes and next steps.</p>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transform transition-transform hover:-translate-y-2">
        <div className="bg-[#2E2C63] text-white rounded-full p-3 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Confidential & Secure</h3>
        <p className="text-gray-600 dark:text-gray-300">Your conversations and data are private, encrypted, and never shared without your consent.</p>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transform transition-transform hover:-translate-y-2">
        <div className="bg-[#2E2C63] text-white rounded-full p-3 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
        <p className="text-gray-600 dark:text-gray-300">Simple, intuitive design makes it easy for anyone to get the help they need quickly.</p>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transform transition-transform hover:-translate-y-2">
        <div className="bg-[#2E2C63] text-white rounded-full p-3 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
        <p className="text-gray-600 dark:text-gray-300">DocTalk.ai speaks your language—get medical advice in multiple languages for global accessibility.</p>
      </div>
    </div>
    <div className="max-w-5xl mx-auto mt-30 mb-20 px-4 text-center">
    <h1 className="text-xl font-bold text-[#2E2C63] md:text-2xl lg:text-6xl dark:text-slate-300">
            {"How it works"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
                
              ))}
          </h1>
          <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
        DocTalk.ai makes getting medical advice simple and fast. Just sign up or log in, describe your symptoms in your own words, and our advanced AI will analyze your input to provide instant, confidential guidance. 
        </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-[#2E2C63]/30 dark:hover:shadow-blue-400/30">
          <div className="bg-blue-100 text-[#2E2C63] rounded-full w-16 h-16 flex items-center justify-center mb-4 text-3xl font-bold border-2 border-[#2E2C63]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 00-8 0v2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Sign Up or Log In</h3>
          <p className="text-gray-600 dark:text-gray-300">Create your free account or log in securely to start your consultation.</p>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-[#2E2C63]/30 dark:hover:shadow-blue-400/30">
          <div className="bg-blue-100 text-[#2E2C63] rounded-full w-16 h-16 flex items-center justify-center mb-4 text-3xl font-bold border-2 border-[#2E2C63]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Describe Your Symptoms</h3>
          <p className="text-gray-600 dark:text-gray-300">Tell DocTalk.ai about your symptoms, concerns, or health questions in your own words.</p>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-[#2E2C63]/30 dark:hover:shadow-blue-400/30">
          <div className="bg-blue-100 text-[#2E2C63] rounded-full w-16 h-16 flex items-center justify-center mb-4 text-3xl font-bold border-2 border-[#2E2C63]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Get Instant AI Advice</h3>
          <p className="text-gray-600 dark:text-gray-300">Receive personalized, confidential medical guidance powered by advanced AI.</p>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center transition-all duration-300 border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-[#2E2C63]/30 dark:hover:shadow-blue-400/30">
          <div className="bg-blue-100 text-[#2E2C63] rounded-full w-16 h-16 flex items-center justify-center mb-4 text-3xl font-bold border-2 border-[#2E2C63]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Follow Next Steps</h3>
          <p className="text-gray-600 dark:text-gray-300">Get suggestions for home care, further evaluation, or connecting with a real doctor if needed.</p>
        </div>
      </div>
    </div>
    <div className="mt-20 px-4 py-10 md:py-16 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner">
    <h1 className="text-xl text-center font-bold text-[#2E2C63] md:text-2xl lg:text-6xl dark:text-slate-300">
            {"Meet AI Doctors"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
                
              ))}
          </h1>
          <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
        Explore our AI Doctors and see how they can help you.<br />
        <span className="block text-base text-[#2E2C63] dark:text-blue-200 font-medium mt-2">
          Your trusted, always-available virtual healthcare team.
        </span>
        
        </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Dr. Ava Patel"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Ava Patel</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">General Physician</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Dr. Ethan Kim"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Ethan Kim</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Surgeon</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Dr. Sophia Lee"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Sophia Lee</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">ENT Specialist</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="Dr. Liam Smith"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Liam Smith</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Pediatrician</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/men/55.jpg"
            alt="Dr. Carlos Rivera"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Carlos Rivera</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Cardiologist</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Dr. Emily Zhang"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Emily Zhang</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Dermatologist</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/men/77.jpg"
            alt="Dr. Ahmed Hassan"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Ahmed Hassan</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Neurologist</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt="Dr. Maria Rossi"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Maria Rossi</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Gynecologist</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/men/23.jpg"
            alt="Dr. John Miller"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. John Miller</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Orthopedic Surgeon</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="Dr. Chloe Dubois"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Chloe Dubois</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Psychiatrist</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/men/81.jpg"
            alt="Dr. Hiroshi Tanaka"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Hiroshi Tanaka</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Oncologist</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="https://randomuser.me/api/portraits/women/36.jpg"
            alt="Dr. Isabella Silva"
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
          />
          <h3 className="text-xl font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">Dr. Isabella Silva</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Endocrinologist</p>
          <div className="flex gap-2">
            <button className="bg-[#2E2C63] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Consult
            </button>
            <button className="border border-[#2E2C63] text-[#2E2C63] px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-gray-700">
              View
            </button>
          </div>
        </div>
      </div>
    <div className="flex justify-center mt-10">
      <button className="bg-[#2E2C63] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300 hover:bg-black hover:scale-105 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer">
        View All Doctors
      </button>
    </div>
    </div>
    <div className="mt-15 mb-20 flex flex-col items-center justify-center">
      <div className="bg-[#2E2C63] dark:bg-blue-900 rounded-2xl shadow-xl px-8 py-12 max-w-6xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Experience DocTalk.ai?
        </h2>
        <p className="text-lg md:text-xl px-9 text-center text-blue-100 mb-8">
          Take control of your health journey today. Get instant, confidential medical advice from our advanced AI doctors—anytime, anywhere.
          Empower yourself with 24/7 access, multilingual support, and a user-friendly experience.
          Your well-being, our priority—experience the future of healthcare with DocTalk.ai.
        </p>
        <button className="bg-white text-[#2E2C63] font-semibold px-8 py-3 rounded-full text-lg shadow-md transition-all duration-300 hover:bg-gray-200 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
    <footer className="bg-gradient-to-br from-[#e0e7ff] via-[#f8fafc] to-[#c7d2fe] dark:from-[#1e293b] dark:via-[#2e2c63] dark:to-[#1e293b] border-t border-gray-200 dark:border-gray-700 mt-20 pt-12 pb-8 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-10">
        <div className="flex flex-col px-24 items-center md:items-start gap-4 w-full md:w-1/3">
          <div className="flex items-center gap-2 mb-2 ">
            <img src="/favicon.ico" alt="DocTalk.ai Logo" className="h-10 w-10 drop-shadow" />
            <span className="text-2xl font-bold text-[#2E2C63] dark:text-blue-200">DocTalk.ai</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-center md:text-left text-sm mb-2 max-w-xs">
            Revolutionizing Healthcare Access with AI. Instant, confidential, and intelligent medical guidance at your fingertips.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="mailto:support@doctalk.ai" aria-label="Email" className="hover:scale-110 transition-transform bg-white dark:bg-[#2E2C63] rounded-full p-2 shadow">
              <svg className="w-5 h-5 text-[#2E2C63] dark:text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" stroke="none"/>
                <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </a>
            <a href="tel:+1234567890" aria-label="Phone" className="hover:scale-110 transition-transform bg-white dark:bg-[#2E2C63] rounded-full p-2 shadow">
              <svg className="w-5 h-5 text-[#2E2C63] dark:text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92V21a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.99.35 2.01.59 3.06.72a2 2 0 011.72 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://twitter.com/doctalkai" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform bg-white dark:bg-[#2E2C63] rounded-full p-2 shadow">
              <svg className="w-5 h-5 text-[#2E2C63] dark:text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.89a4.28 4.28 0 001.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 003.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 004 2.98A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0024 4.59a8.48 8.48 0 01-2.54.7z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/doctalkai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform bg-white dark:bg-[#2E2C63] rounded-full p-2 shadow">
              <svg className="w-5 h-5 text-[#2E2C63] dark:text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
              </svg>
            </a>
            <a href="https://facebook.com/doctalkai" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform bg-white dark:bg-[#2E2C63] rounded-full p-2 shadow">
              <svg className="w-5 h-5 text-[#2E2C63] dark:text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center w-full md:w-1/3">
          <div className="relative w-64 h-48 flex items-center justify-center bg-white/70 dark:bg-[#23244a]/70 rounded-xl shadow-inner">
            <svg viewBox="0 0 256 192" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="8" y="16" width="240" height="160" rx="24" fill="#E0E7FF" />
              <path d="M32 96c24-32 56-32 80 0s56 32 80 0" stroke="#2E2C63" strokeWidth="3" fill="none"/>
              <circle cx="56" cy="96" r="10" fill="#2E2C63" />
              <circle cx="128" cy="128" r="10" fill="#2E2C63" />
              <circle cx="200" cy="96" r="10" fill="#2E2C63" />
              <rect x="120" y="60" width="16" height="40" rx="4" fill="#fff" />
              <rect x="108" y="84" width="40" height="16" rx="4" fill="#fff" />
              <rect x="120" y="60" width="16" height="40" rx="4" fill="#2E2C63" opacity="0.2"/>
              <rect x="108" y="84" width="40" height="16" rx="4" fill="#2E2C63" opacity="0.2"/>
              <g>
                <ellipse cx="200" cy="96" rx="12" ry="6" fill="#fff" opacity="0.7"/>
                <path d="M200 90a6 6 0 016 6c0 3.31-6 12-6 12s-6-8.69-6-12a6 6 0 016-6z" fill="#2E2C63"/>
                <circle cx="200" cy="96" r="2" fill="#fff"/>
              </g>
            </svg>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-[#2E2C63] font-semibold bg-white/80 px-2 py-0.5 rounded shadow">Global AI Medical Network</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 px-34 w-full md:w-1/3">
          <h4 className="text-lg font-semibold text-[#2E2C63] dark:text-blue-200 mb-2">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-gray-700 dark:text-gray-300 text-sm">
            <li>
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Home</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">How it works</a>
            </li>
            <li>
              <a href="#doctors" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Doctors</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Contact</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          &copy; {new Date().getFullYear()} DocTalk.ai. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#2E2C63] dark:text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xs text-gray-500 dark:text-gray-400">Empowering Health, Everywhere.</span>
        </div>
      </div>
    </footer>
    </div>
  )
}
