import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Provider from './provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DocTalk.ai - AI powered doctor consultation system',
  description: 'DocTalk.ai is an AI-powered doctor consultation web app that provides instant, intelligent healthcare advice anytime, anywhere. Designed to simulate a real doctor interaction, it uses natural language processing and medical data to understand symptoms, suggest possible causes, and recommend next steps—whether it\'s home care or seeking professional attention. With 24/7 availability, multilingual support, and a user-friendly interface, DocTalk.ai empowers users with personalized, confidential, and accessible medical guidance in just a few clicks.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        cssLayerName: 'clerk',
      }}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <header className="flex justify-between items-center px-14 gap-4 h-16 shadow-md">
            <div className='flex gap-1 items-center'>
            <img src="/favicon.ico" alt="logo" className="h-10 w-10" />
            <h1 className='text-3xl font-bold font-sans text-[#2E2C63]'>DocTalk.ai</h1>
            </div>
            <div className='flex gap-4 items-center'>
              <p></p>
            </div>
            <div className='flex gap-4'>
              <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-blue-600 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn></div>
          </header>
          <Provider>
              {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}