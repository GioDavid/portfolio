"use client";
// src/components/AboutSection.tsx
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion 
    ? { initial: false, animate: false }
    : {};

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12"
      aria-labelledby="about-heading"
    >
      {/* Image */}
      <motion.div
        {...motionProps}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-64 h-64 relative rounded-full overflow-hidden shadow-2xl flex-shrink-0"
      >
        <Image
          src="/profile.jpg"
          alt="Professional headshot of Giovanni Proaño, a Full Stack TypeScript Developer with dark hair wearing a casual shirt, smiling at the camera"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 256px, 256px"
        />
      </motion.div>

      {/* Bio */}
      <motion.div
        {...motionProps}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 id="about-heading" className="text-4xl font-bold mb-4 text-indigo-400">About Me</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a passionate Full Stack TypeScript Developer with a strong background in React, React Native, Next.js, Nest.js, and Node.js.
            I love building modern, scalable apps that solve real problems.
          </p>
          
          <div>
            <h3 className="sr-only">Key highlights about Giovanni</h3>
            <ul className="space-y-2 text-sm text-indigo-200" role="list">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold" aria-hidden="true">🚀</span>
                <span><strong>6+ years</strong> of experience in software development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold" aria-hidden="true">💡</span>
                <span>Focused on <strong>clean code, performance & usability</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold" aria-hidden="true">🧠</span>
                <span><strong>Always learning</strong> and improving my craft</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold" aria-hidden="true">🌍</span>
                <span>Based in <strong>Quito, Ecuador</strong>, open to remote work, hybrid, and on-site</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
