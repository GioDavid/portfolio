"use client";
// src/components/AboutSection.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-64 h-64 relative rounded-full overflow-hidden shadow-2xl"
      >
        <Image
          src="/profile.jpg" // put your image in public/profile.jpg
          alt="Profile picture"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4 text-indigo-400">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I&apos;m a passionate Full Stack TypeScript Developer with a strong background in React, React Native, Next.js, Nest js, and Node.js.
          I love building modern, scalable apps that solve real problems.
        </p>
        <ul className="space-y-2 text-sm text-indigo-200">
          <li>🚀 6+ years of experience in software development</li>
          <li>💡 Focused on clean code, performance & usability</li>
          <li>🧠 Always learning and improving my craft</li>
          <li>🌍 Based in Quito, Ecuador, open to remote work, hybrid, and on-site</li>
        </ul>
      </motion.div>
    </section>
  );
}
