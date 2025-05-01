'use client'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import {motion} from 'framer-motion'
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ['home', 'service', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    setActiveLink(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      
      // Smooth scroll to the element
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full -motion-translate-y-in-100 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block font-second">
            <ul className="flex space-x-10">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className={`text-white hover:text-blue-300 px-3 py-2 text-lg font-medium transition-colors duration-200 ${
                    activeLink === 'home' ? 'border-b-2 border-blue-400' : ''
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('service')}
                  className={`text-white hover:text-blue-300 px-3 py-2 text-lg font-medium transition-colors duration-200 ${
                    activeLink === 'service' ? 'border-b-2 border-blue-400' : ''
                  }`}
                >
                  Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={`text-white hover:text-blue-300 px-3 py-2 text-lg font-medium transition-colors duration-200 ${
                    activeLink === 'about' ? 'border-b-2 border-blue-400' : ''
                  }`}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`text-white hover:text-blue-300 px-3 py-2 text-lg font-medium transition-colors duration-200 ${
                    activeLink === 'contact' ? 'border-b-2 border-blue-400' : ''
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 focus:outline-none"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <motion.div 
        initial={{y:-100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{ease:'easeInOut', duration:0.5}}
        className="md:hidden bg-gray-800/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-white hover:bg-gray-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeLink === 'home' ? 'bg-gray-700' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('service')}
              className={`text-white hover:bg-gray-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeLink === 'service' ? 'bg-gray-700' : ''
              }`}
            >
              Service
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-white hover:bg-gray-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeLink === 'about' ? 'bg-gray-700' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-white hover:bg-gray-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeLink === 'contact' ? 'bg-gray-700' : ''
              }`}
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar