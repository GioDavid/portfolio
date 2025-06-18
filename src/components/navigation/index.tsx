"use client";
import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { label: 'Home', href: '#', ariaLabel: 'Go to home section' },
  { label: 'About', href: '#about', ariaLabel: 'Go to about section' },
  { label: 'Experience', href: '#experience', ariaLabel: 'Go to experience section' },
  { label: 'Services', href: '#services', ariaLabel: 'Go to services section' },
  { label: 'Skills', href: '#skills', ariaLabel: 'Go to skills section' },
  { label: 'Contact', href: '#contact', ariaLabel: 'Go to contact section' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        hamburgerButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target as Node) &&
          !hamburgerButtonRef.current?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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

  const handleKeyboardNavigation = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToSection(href);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const motionProps = shouldReduceMotion 
    ? { initial: false, animate: false }
    : {};

  return (
    <motion.nav
      {...motionProps}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700 py-3' 
          : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('#')}
          onKeyDown={(e) => handleKeyboardNavigation(e, '#')}
          className="text-xl font-bold text-white hover:text-indigo-400 transition focus:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          aria-label="Giovanni Proaño - Go to top of page"
        >
          GP
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8" role="menubar">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              onKeyDown={(e) => handleKeyboardNavigation(e, item.href)}
              className={`text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1 ${
                (item.href === '#' && activeSection === '') ||
                (item.href === `#${activeSection}` && activeSection !== '')
                  ? 'text-indigo-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              role="menuitem"
              aria-label={item.ariaLabel}
              aria-current={
                (item.href === '#' && activeSection === '') ||
                (item.href === `#${activeSection}` && activeSection !== '')
                  ? 'page' : undefined
              }
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={hamburgerButtonRef}
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded p-2"
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-menu"
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            className="flex flex-col w-6 h-6 justify-center items-center"
            aria-hidden="true"
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
        ref={mobileMenuRef}
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
        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-700 overflow-hidden"
        id="mobile-navigation-menu"
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              onKeyDown={(e) => handleKeyboardNavigation(e, item.href)}
              className={`block w-full text-left text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1 ${
                (item.href === '#' && activeSection === '') ||
                (item.href === `#${activeSection}` && activeSection !== '')
                  ? 'text-indigo-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              role="menuitem"
              aria-label={item.ariaLabel}
              aria-current={
                (item.href === '#' && activeSection === '') ||
                (item.href === `#${activeSection}` && activeSection !== '')
                  ? 'page' : undefined
              }
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
} 