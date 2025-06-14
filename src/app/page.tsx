"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import AboutSection from './about/page';
import ExperienceTimeline from '../components/experience-timeline';
import SkillsSection from '../components/skill-section';
import ContactSection from '../components/contact-section';

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-gray-900 text-white flex flex-col justify-center items-center p-4 pt-96">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-4 text-center"
      >
        Giovanni Proaño
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-xl"
      >
        Full Stack TypeScript Developer crafting scalable web solutions with React, Next.js, and Node.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="flex space-x-6 mb-8 text-2xl"
      >
        <a href="https://github.com/GioDavid" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-indigo-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/david-pfr-60038570/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-indigo-400 transition" />
        </a>
        <a href="mailto:davisxdpfr@gmail.com">
          <FaEnvelope className="hover:text-indigo-400 transition" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex space-x-4 mb-20"
      >
        <button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          Contact Me
        </button>
        <a
          href="/CV DAVID PROANO SOFTWARE DEVELOPER .pdf"
          download="CV_David_Proano_Software_Developer.pdf"
          className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
        >
          Download CV
        </a>
      </motion.div>
      
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

    </main>
  );
}
