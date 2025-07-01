"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Sign Up or Log In",
      description: "Create your free account or log in securely to start your consultation.",
      details: "Getting started with DocTalk.ai is simple and secure. Create your account with just an email address and password, or use social login options. All your data is encrypted and protected with industry-standard security measures.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 00-8 0v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      features: ["Secure authentication", "Social login options", "Privacy protected", "Quick setup"]
    },
    {
      id: 2,
      title: "Describe Your Symptoms",
      description: "Tell DocTalk.ai about your symptoms, concerns, or health questions in your own words.",
      details: "Our intelligent chat interface allows you to describe your symptoms naturally. You can type, voice record, or even upload images if relevant. Our AI understands medical terminology and common language alike.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ["Natural language input", "Voice recording", "Image upload", "Multilingual support"]
    },
    {
      id: 3,
      title: "AI Analysis & Processing",
      description: "Our advanced AI analyzes your input using medical databases and algorithms.",
      details: "Behind the scenes, our state-of-the-art AI processes your symptoms using vast medical databases, clinical guidelines, and machine learning algorithms trained on millions of medical cases.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ["Medical database analysis", "Pattern recognition", "Risk assessment", "Evidence-based reasoning"]
    },
    {
      id: 4,
      title: "Get Instant AI Advice",
      description: "Receive personalized, confidential medical guidance powered by advanced AI.",
      details: "Get comprehensive health insights including possible conditions, severity assessment, and personalized recommendations. All advice is based on current medical guidelines and best practices.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      features: ["Instant results", "Personalized advice", "Severity assessment", "Treatment suggestions"]
    },
    {
      id: 5,
      title: "Follow Next Steps",
      description: "Get suggestions for home care, further evaluation, or connecting with a real doctor if needed.",
      details: "Based on your consultation, receive actionable next steps including home care recommendations, when to seek emergency care, or referrals to specialists. We can also help you find local healthcare providers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ["Home care guidance", "Emergency indicators", "Specialist referrals", "Provider recommendations"]
    }
  ];

  const faqs = [
    {
      question: "How accurate is DocTalk.ai's medical advice?",
      answer: "DocTalk.ai uses advanced AI trained on vast medical databases and clinical guidelines. While highly accurate for general guidance, it's designed to complement, not replace, professional medical care. Always consult healthcare providers for serious conditions."
    },
    {
      question: "Is my health information secure and private?",
      answer: "Absolutely. We use bank-level encryption, comply with HIPAA regulations, and never share your personal health information without your explicit consent. Your privacy and security are our top priorities."
    },
    {
      question: "What types of health concerns can DocTalk.ai help with?",
      answer: "DocTalk.ai can assist with a wide range of health concerns including common symptoms, minor injuries, medication questions, health maintenance, and general wellness advice. For emergencies, always contact emergency services."
    },
    {
      question: "How long does it take to get a response?",
      answer: "Our AI provides instant responses within seconds of submitting your symptoms. For complex cases requiring human review, responses typically come within 5-10 minutes during business hours."
    },
    {
      question: "Can DocTalk.ai prescribe medications?",
      answer: "No, DocTalk.ai cannot prescribe medications. However, it can provide information about over-the-counter options and advise when prescription medication consultation with a licensed physician is recommended."
    },
    {
      question: "Is DocTalk.ai available in multiple languages?",
      answer: "Yes! DocTalk.ai supports multiple languages including English, Spanish, French, German, Chinese, and many others. Our AI can understand and respond in your preferred language."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative flex mt-18 flex-col items-center justify-center">
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
            {"How  DocTalk.ai  Works"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            Discover the simple 5-step process that connects you with AI-powered medical guidance in seconds. From sign-up to personalized health advice, see how easy it is to take control of your healthcare journey.
          </motion.p>
        </div>
      </div>

      {/* Interactive Step-by-Step Guide */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2C63] dark:text-slate-300 mb-4">
            Your Journey to Better Health
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Follow these simple steps to experience the future of healthcare consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeStep === index
                    ? 'border-[#2E2C63] bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                    : 'border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 hover:border-[#2E2C63] dark:hover:border-blue-400'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-full p-3 flex-shrink-0 ${
                    activeStep === index
                      ? 'bg-[#2E2C63] text-white'
                      : 'bg-gray-100 text-[#2E2C63] dark:bg-gray-700 dark:text-blue-200'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-semibold px-2 py-1 rounded ${
                        activeStep === index
                          ? 'bg-[#2E2C63] text-white'
                          : 'bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                      }`}>
                        Step {step.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2E2C63] dark:text-blue-200 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-8">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2E2C63] text-white rounded-full p-4">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <span className="text-sm font-semibold bg-blue-100 text-[#2E2C63] px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">
                    Step {steps[activeStep].id}
                  </span>
                  <h3 className="text-2xl font-bold text-[#2E2C63] dark:text-blue-200 mt-2">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {steps[activeStep].details}
              </p>
              
              <div>
                <h4 className="font-semibold text-[#2E2C63] dark:text-blue-200 mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {steps[activeStep].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Flow Visualization */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2C63] dark:text-slate-300 mb-4">
              The Complete Process
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              See how everything connects in our streamlined healthcare workflow
            </p>
          </div>
          
          <div className="relative">
            {/* Process Flow */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#2E2C63] to-blue-400 z-0" 
                         style={{ width: 'calc(100% + 2rem)' }}></div>
                  )}
                  
                  {/* Step Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#2E2C63] text-white rounded-full w-24 h-24 flex items-center justify-center mb-4 relative z-10 shadow-lg"
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Step Info */}
                  <h3 className="font-semibold text-[#2E2C63] dark:text-blue-200 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-32">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2C63] dark:text-slate-300 mb-4">
              Why Choose DocTalk.ai?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Advanced technology meets compassionate care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Get medical advice in seconds, not hours or days"
              },
              {
                icon: "🔒",
                title: "100% Secure",
                description: "Your health data is encrypted and completely private"
              },
              {
                icon: "🌍",
                title: "Available 24/7",
                description: "Access healthcare guidance anytime, anywhere"
              },
              {
                icon: "🎯",
                title: "Highly Accurate",
                description: "AI trained on millions of medical cases and guidelines"
              },
              {
                icon: "💬",
                title: "Natural Conversation",
                description: "Describe symptoms in your own words, no medical jargon needed"
              },
              {
                icon: "🌐",
                title: "Multilingual",
                description: "Available in multiple languages for global accessibility"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#2E2C63] dark:text-blue-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2C63] dark:text-slate-300 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Get answers to common questions about DocTalk.ai
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  //@ts-ignore
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-[#2E2C63] dark:text-blue-200 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-[#2E2C63] dark:text-blue-200 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#2E2C63] dark:bg-blue-900 rounded-2xl shadow-xl px-8 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience DocTalk.ai?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already discovered the convenience of instant, AI-powered medical guidance. Your health journey starts with a single click.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2E2C63] font-semibold px-8 py-3 rounded-full text-lg shadow-md transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                Get Started Now
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-[#2E2C63]">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}