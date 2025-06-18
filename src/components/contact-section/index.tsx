'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const shouldReduceMotion = useReducedMotion();

  const validateForm = (formData: FormData) => {
    const errors: {[key: string]: string} = {};
    
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      errors.user_name = 'Name must be at least 2 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.user_email = 'Please enter a valid email address';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      // Focus on first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = formRef.current.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      errorElement?.focus();
      return;
    }

    setFormErrors({});
    setIsLoading(true);
    setError(false);
    setSent(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
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

  const motionProps = shouldReduceMotion 
    ? { initial: false, animate: false, whileInView: false }
    : {};

  return (
    <section 
      id="contact" 
      className="bg-gray-950 text-white py-20 px-6"
      aria-labelledby="contact-heading"
    >
      <motion.h2
        id="contact-heading"
        className="text-4xl font-bold text-center text-indigo-400 mb-12"
        {...motionProps}
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
          {...motionProps}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-300">Let&apos;s work together</h3>
          <p className="text-gray-300">
            I&apos;m currently open to new opportunities and collaborations. Reach out via email or connect on social media!
          </p>

          <nav aria-label="Social media links">
            <ul className="flex space-x-6 text-2xl text-indigo-300" role="list">
              <li>
                <a 
                  href="https://www.linkedin.com/in/david-pfr-60038570/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition focus:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
                  aria-label="Visit Giovanni's LinkedIn profile (opens in new tab)"
                >
                  <FaLinkedin aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/GioDavid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition focus:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
                  aria-label="Visit Giovanni's GitHub profile (opens in new tab)"
                >
                  <FaGithub aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:davisxdpfr@gmail.com"
                  className="hover:text-indigo-400 transition focus:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
                  aria-label="Send email to Giovanni"
                >
                  <FaEnvelope aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/593998405156" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition focus:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
                  aria-label="Contact Giovanni on WhatsApp (opens in new tab)"
                >
                  <FaWhatsapp aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
          {...motionProps}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4"
            noValidate
            aria-labelledby="contact-form-heading"
          >
            <h3 id="contact-form-heading" className="sr-only">Contact form</h3>
            
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-1">
                Your Name <span className="text-red-400" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className={`w-full px-4 py-2 bg-gray-900 border rounded text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  formErrors.user_name ? 'border-red-500' : 'border-gray-600'
                }`}
                aria-invalid={formErrors.user_name ? 'true' : 'false'}
                aria-describedby={formErrors.user_name ? 'name-error' : undefined}
              />
              {formErrors.user_name && (
                <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                  {formErrors.user_name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-1">
                Your Email <span className="text-red-400" aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className={`w-full px-4 py-2 bg-gray-900 border rounded text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  formErrors.user_email ? 'border-red-500' : 'border-gray-600'
                }`}
                aria-invalid={formErrors.user_email ? 'true' : 'false'}
                aria-describedby={formErrors.user_email ? 'email-error' : undefined}
              />
              {formErrors.user_email && (
                <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                  {formErrors.user_email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Your Message <span className="text-red-400" aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`w-full px-4 py-2 bg-gray-900 border rounded text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-vertical ${
                  formErrors.message ? 'border-red-500' : 'border-gray-600'
                }`}
                aria-invalid={formErrors.message ? 'true' : 'false'}
                aria-describedby={formErrors.message ? 'message-error' : undefined}
              />
              {formErrors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                  {formErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full px-6 py-2 rounded text-white font-medium transition flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                isLoading 
                  ? 'bg-indigo-400 cursor-not-allowed' 
                  : 'bg-indigo-500 hover:bg-indigo-600'
              }`}
              aria-describedby="submit-status"
            >
              {isLoading && (
                <svg 
                  className="animate-spin h-4 w-4" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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

            <div id="submit-status" aria-live="polite" aria-atomic="true">
              {sent && (
                <p className="text-green-400 text-center" role="status">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {error && (
                <p className="text-red-400 text-center" role="alert">
                  Something went wrong. Please try again or contact me directly.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
