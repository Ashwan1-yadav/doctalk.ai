"use client"
import React from 'react'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'How it works', href: '/how-it-works' },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Contact', href: '/contacts' },
];

const Navbar = () => {
  const pathname = usePathname();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <header className="flex justify-between items-center px-14 gap-4 h-16 shadow-md fixed top-0 left-0 right-0 z-50
            bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl border-b border-white/30 dark:border-gray-700/30">
            <div className='flex gap-1 items-center'>
              <img src="/favicon.ico" alt="logo" className="h-10 w-10" />
              <div className='flex gap-16 items-center'>
                <Link href="/" passHref>
                  <h1 className="text-3xl font-bold font-sans text-[#2E2C63] relative group cursor-pointer inline-block">
                    <span className="relative z-10">DocTalk.ai</span>
                    <span
                      className="absolute left-0 -bottom-1 w-0 h-1 bg-[#2E2C63] rounded transition-all duration-300 ease-in group-hover:w-full"
                      aria-hidden="true"
                    ></span>
                  </h1>
                </Link>
                <div className='flex gap-7 items-center justify-center flex-1'>
                  <nav className="flex gap-7 items-center justify-center mx-auto ">
                    {navLinks.map(link => {
                      const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={`text-md font-medium text-[#2E2C63] cursor-pointer relative transition-colors duration-200 group hover:text-blue-600 ${isActive ? 'text-blue-600 font-bold' : ''}`}
                          style={{ display: 'inline-block' }}
                        >
                          <span className={`inline-block transition-transform duration-300 ease-in group-hover:-translate-y-1 relative`}>
                            {link.name}
                            <span
                              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ease-in ${isActive ? 'w-full' : 'w-0'} group-hover:w-full`}
                              style={{
                                transitionProperty: 'width',
                              }}
                              aria-hidden="true"
                            ></span>
                          </span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </div>
            <div className='flex gap-4'>
              <SignedOut>
                <SignInButton>
                  <button
                    className="rounded-md bg-transparent px-4 py-3 text-sm font-semibold text-[#2E2C63] border border-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer hover:bg-[#2E2C63] hover:text-white"
                  >
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="rounded-md bg-[#2E2C63] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
  )
}

export default Navbar