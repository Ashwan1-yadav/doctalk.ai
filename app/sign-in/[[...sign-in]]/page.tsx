"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';


export default function DocTalkSignIn() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Medical AI Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#2E2C63] via-[#3B4B87] to-[#2E2C63] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating medical particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-20"
              initial={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%' 
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white">
          {/* Logo and brand */}
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2E2C63]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-3xl font-bold">DocTalk.ai</span>
          </motion.div>

          {/* Main illustration */}
          <motion.div 
            className="relative w-96 h-96 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* AI Brain illustration */}
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Brain outline */}
              <motion.path
                d="M200 50 C280 50, 350 100, 350 180 C350 220, 330 250, 300 270 C320 290, 330 320, 310 340 C290 360, 260 350, 240 340 C220 360, 180 360, 160 340 C140 350, 110 360, 90 340 C70 320, 80 290, 100 270 C70 250, 50 220, 50 180 C50 100, 120 50, 200 50 Z"
                fill="none"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              
              {/* Neural network nodes */}
              {[
                { x: 150, y: 120, delay: 0.8 },
                { x: 250, y: 120, delay: 1.0 },
                { x: 120, y: 180, delay: 1.2 },
                { x: 200, y: 180, delay: 1.4 },
                { x: 280, y: 180, delay: 1.6 },
                { x: 160, y: 240, delay: 1.8 },
                { x: 240, y: 240, delay: 2.0 },
                { x: 200, y: 300, delay: 2.2 }
              ].map((node, i) => (
                <motion.circle
                  key={i}
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="rgba(255,255,255,0.9)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: node.delay }}
                />
              ))}
              
              {/* Connecting lines */}
              {[
                { x1: 150, y1: 120, x2: 250, y2: 120 },
                { x1: 150, y1: 120, x2: 120, y2: 180 },
                { x1: 150, y1: 120, x2: 200, y2: 180 },
                { x1: 250, y1: 120, x2: 200, y2: 180 },
                { x1: 250, y1: 120, x2: 280, y2: 180 },
                { x1: 120, y1: 180, x2: 160, y2: 240 },
                { x1: 200, y1: 180, x2: 160, y2: 240 },
                { x1: 200, y1: 180, x2: 240, y2: 240 },
                { x1: 280, y1: 180, x2: 240, y2: 240 },
                { x1: 160, y1: 240, x2: 200, y2: 300 },
                { x1: 240, y1: 240, x2: 200, y2: 300 }
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                />
              ))}
              
              {/* Medical cross */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.5 }}
              >
                <rect x="190" y="140" width="20" height="60" fill="rgba(255,255,255,0.9)" rx="4"/>
                <rect x="170" y="160" width="60" height="20" fill="rgba(255,255,255,0.9)" rx="4"/>
              </motion.g>
              
              {/* Pulse rings */}
              <motion.circle
                cx="200"
                cy="180"
                r="40"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: 3 }}
              />
              <motion.circle
                cx="200"
                cy="180"
                r="40"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
              />
            </svg>
          </motion.div>

          {/* Text content */}
          <motion.div 
            className="text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">
              AI-Powered Healthcare
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Experience the future of medical consultations with our intelligent AI doctors, available 24/7 for instant, confidential healthcare guidance.
            </p>
            <div className="flex items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">AI-Powered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Sign in form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#2E2C63] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#2E2C63] dark:text-blue-200">DocTalk.ai</span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SignIn/>
          </motion.div>

          {/* Features list */}
          <motion.div 
            className="mt-8 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <div className="w-5 h-5 bg-[#2E2C63] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm">Instant medical consultations</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <div className="w-5 h-5 bg-[#2E2C63] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm">24/7 AI doctor availability</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <div className="w-5 h-5 bg-[#2E2C63] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm">Secure & confidential</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}