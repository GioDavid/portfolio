"use client";
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import AboutSection from './about/page';
import ExperienceTimeline from '../components/experience-timeline';
import ServicesSection from '../components/services-section';
import SkillsSection from '../components/skill-section';
import ContactSection from '../components/contact-section';
import Navigation from '../components/navigation';

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Parallax scroll effects (disabled for reduced motion)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Transform values for different parallax speeds (respect reduced motion)
  const yBg = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['0%', '50%']);
  const yContent = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowAbout(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Floating particles configuration (reduced for motion sensitivity)
  const particles = Array.from({ length: shouldReduceMotion ? 5 : 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 20 + 10,
  }));

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const motionProps = shouldReduceMotion 
    ? { initial: false, animate: false }
    : {};

  return (
    <>
      <Navigation />
      
      {/* Parallax Background */}
      <motion.div
        ref={heroRef}
        style={{ y: yBg }}
        className="fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-gray-900" />
        
        {/* Floating Background Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-indigo-400/10 backdrop-blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={shouldReduceMotion ? {} : {
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />
        ))}

        {/* Large Background Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-3xl"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          aria-hidden="true"
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 blur-3xl"
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Main Content with Parallax */}
      <motion.main 
        id="main-content"
        style={{ y: yContent, opacity }}
        className="relative z-10 min-h-screen text-white flex flex-col justify-center items-center p-4 pt-96"
        role="main"
        aria-label="Portfolio hero section"
      >
        <motion.header
          {...motionProps}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-center relative">
            <span className="relative z-10">Giovanni Proaño</span>
            {/* Text shadow effect */}
            <motion.span
              className="absolute inset-0 text-indigo-400/20 blur-sm"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              Giovanni Proaño
            </motion.span>
          </h1>

          <motion.p
            {...motionProps}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-xl relative z-10"
          >
            Full Stack TypeScript Developer crafting scalable web solutions with React, Next.js, and Node.
          </motion.p>
        </motion.header>

        <motion.nav
          {...motionProps}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex space-x-6 mb-8 text-2xl relative z-10"
          aria-label="Social media links"
          role="navigation"
        >
          <motion.a 
            href="https://github.com/GioDavid" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 5 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            className="hover:text-indigo-400 transition focus:text-indigo-400"
            aria-label="Visit Giovanni's GitHub profile (opens in new tab)"
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/david-pfr-60038570/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: -5 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            className="hover:text-indigo-400 transition focus:text-indigo-400"
            aria-label="Visit Giovanni's LinkedIn profile (opens in new tab)"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="mailto:davisxdpfr@gmail.com"
            whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 5 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            className="hover:text-indigo-400 transition focus:text-indigo-400"
            aria-label="Send email to Giovanni"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a 
            href="https://wa.me/593998405156" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: -5 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            className="hover:text-indigo-400 transition focus:text-indigo-400"
            aria-label="Contact Giovanni on WhatsApp (opens in new tab)"
          >
            <FaWhatsapp />
          </motion.a>
        </motion.nav>

        <motion.div
          {...motionProps}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex space-x-4 mb-20 relative z-10"
        >
          <motion.button
            onClick={scrollToContact}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg transition focus:bg-indigo-500 focus:shadow-xl"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            aria-label="Scroll to contact section"
          >
            Contact Me
          </motion.button>
          <motion.a
            href="/CV DAVID PROANO SOFTWARE DEVELOPER .pdf"
            download="CV_David_Proano_Software_Developer.pdf"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition focus:bg-white focus:text-black"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, backgroundColor: "white", color: "black" }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            aria-label="Download Giovanni's CV as PDF"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.main>

      {/* Content Sections */}
      <div className="relative z-10 bg-transparent">
        <motion.div
          {...motionProps}
          initial={{ opacity: 0, y: 50 }}
          animate={showAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <AboutSection />
        </motion.div>
        <motion.div
          {...motionProps}
          initial={{ opacity: 0, y: 50 }}
          animate={showAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <ExperienceTimeline />
        </motion.div>
        <motion.div
          {...motionProps}
          initial={{ opacity: 0, y: 50 }}
          animate={showAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <ServicesSection />
        </motion.div>
        <motion.div
          {...motionProps}
          initial={{ opacity: 0, y: 50 }}
          animate={showAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <SkillsSection />
        </motion.div>
        <motion.div
          {...motionProps}
          initial={{ opacity: 0, y: 50 }}
          animate={showAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <ContactSection />
        </motion.div>
      </div>
    </>
  );
}
