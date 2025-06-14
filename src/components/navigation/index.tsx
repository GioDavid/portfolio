"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Track active section
      const sections = ['about', 'experience', 'services', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      // If we're at the top, set active to home
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('#')}
          className="text-xl font-bold text-white hover:text-indigo-400 transition"
          whileHover={{ scale: 1.05 }}
        >
          GP
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-colors duration-200 ${
                (item.href === '#' && activeSection === '') ||
                (item.href === `#${activeSection}` && activeSection !== '')
                  ? 'text-indigo-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            className="flex flex-col w-6 h-6 justify-center items-center"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 }
              }}
              className="w-6 h-0.5 bg-white block transition-all duration-300"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="w-6 h-0.5 bg-white block transition-all duration-300 my-1"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 }
              }}
              className="w-6 h-0.5 bg-white block transition-all duration-300"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            height: "auto",
            y: 0
          },
          closed: {
            opacity: 0,
            height: 0,
            y: -20
          }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-700 overflow-hidden"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left text-sm font-medium transition-colors duration-200 ${
                (item.href === '#' && activeSection === '') ||
                (item.href === `#${activeSection}` && activeSection !== '')
                  ? 'text-indigo-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
} 