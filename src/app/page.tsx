"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
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
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Transform values for different parallax speeds
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
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

  // Floating particles configuration
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <>
      <Navigation />
      
      {/* Parallax Background */}
      <motion.div
        ref={heroRef}
        style={{ y: yBg }}
        className="fixed inset-0 z-0"
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
            animate={{
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
          />
        ))}

        {/* Large Background Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Main Content with Parallax */}
      <motion.main 
        style={{ y: yContent, opacity }}
        className="relative z-10 min-h-screen text-white flex flex-col justify-center items-center p-4 pt-96"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 text-center relative"
        >
          <span className="relative z-10">Giovanni Proaño</span>
          {/* Text shadow effect */}
          <motion.span
            className="absolute inset-0 text-indigo-400/20 blur-sm"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Giovanni Proaño
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-xl relative z-10"
        >
          Full Stack TypeScript Developer crafting scalable web solutions with React, Next.js, and Node.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex space-x-6 mb-8 text-2xl relative z-10"
        >
          <motion.a 
            href="https://github.com/GioDavid" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="hover:text-indigo-400 transition" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/david-pfr-60038570/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="hover:text-indigo-400 transition" />
          </motion.a>
          <motion.a 
            href="mailto:davisxdpfr@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope className="hover:text-indigo-400 transition" />
          </motion.a>
          <motion.a 
            href="https://wa.me/593998405156" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp className="hover:text-indigo-400 transition" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex space-x-4 mb-20 relative z-10"
        >
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg transition"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
          <motion.a
            href="/CV DAVID PROANO SOFTWARE DEVELOPER .pdf"
            download="CV_David_Proano_Software_Developer.pdf"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.main>

      {/* Content Sections */}
      <div className="relative z-10 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={showAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <AboutSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={showAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <ExperienceTimeline />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={showAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <ServicesSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={showAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <SkillsSection />
        </motion.div>
        <motion.div
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
