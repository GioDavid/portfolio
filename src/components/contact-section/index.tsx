'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);
    setError(false);
    setSent(false);

    emailjs
      .sendForm(
        'service_5v0xwrw',
        'template_7m4gi11',
        formRef.current,
        '3TkKUvDXIdwrOdtsf'
      )
      .then(
        () => {
          setIsLoading(false);
          setSent(true);
          formRef.current?.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
            console.log(error);
          setIsLoading(false);
          setError(true);
          setTimeout(() => setError(false), 4000);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-indigo-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-300">Let’s work together</h3>
          <p className="text-gray-300">
            I’m currently open to new opportunities and collaborations. Reach out via email or connect on social media!
          </p>

          <ul className="flex space-x-6 text-2xl text-indigo-300">
            <li>
              <a href="https://www.linkedin.com/in/david-pfr-60038570/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/GioDavid" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="mailto:davisxdpfr@gmail.com">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded text-white"
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded text-white font-medium transition flex items-center justify-center gap-2 ${
              isLoading 
                ? 'bg-indigo-400 cursor-not-allowed' 
                : 'bg-indigo-500 hover:bg-indigo-600'
            }`}
          >
            {isLoading && (
              <svg 
                className="animate-spin h-4 w-4" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

          {sent && <p className="text-green-400">Message sent successfully!</p>}
          {error && <p className="text-red-400">Something went wrong. Try again.</p>}
        </motion.form>
      </div>
    </section>
  );
}
