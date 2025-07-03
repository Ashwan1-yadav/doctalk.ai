import type { Metadata } from 'next'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Provider from './provider'
import ClientOnly from './_components/ClientOnly'


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
          <ClientOnly>
            <Provider>
                {children}
            </Provider>
          </ClientOnly>
        </body>
      </html>
    </ClerkProvider>
  )
}