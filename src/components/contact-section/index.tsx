'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation('common');
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
      errors.user_name = t('contact.form.errors.name');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.user_email = t('contact.form.errors.email');
    }

    if (!message || message.trim().length < 10) {
      errors.message = t('contact.form.errors.message');
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
        {t('contact.title')}
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
          <h3 className="text-2xl font-semibold text-indigo-300">{t('contact.subtitle')}</h3>
          <p className="text-gray-300">
            {t('contact.description')}
          </p>

          <nav aria-label="Social media links">
            <ul className="flex space-x-6 text-2xl text-indigo-300" role="list">
              <li>
                <a 
                  href="https://www.linkedin.com/in/david-pfr-60038570/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition focus:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
                  aria-label={t('contact.social.linkedin')}
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
                  aria-label={t('contact.social.github')}
                >
                  <FaGithub aria-hidden="true" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:davisxdpfr@gmail.com"
                  className="hover:text-indigo-400 transition focus:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
                  aria-label={t('contact.social.email')}
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
                  aria-label={t('contact.social.whatsapp')}
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
            <h3 id="contact-form-heading" className="sr-only">{t('contact.form.title')}</h3>
            
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-1">
                {t('contact.form.nameLabel')} <span className="text-red-400" aria-label="required">*</span>
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
                {t('contact.form.emailLabel')} <span className="text-red-400" aria-label="required">*</span>
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
                {t('contact.form.messageLabel')} <span className="text-red-400" aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className={`w-full px-4 py-2 bg-gray-900 border rounded text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
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
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:bg-indigo-400 disabled:cursor-not-allowed"
            >
              {isLoading ? t('contact.form.sending') : t('contact.form.sendButton')}
            </button>
            {sent && (
              <p className="mt-2 text-sm text-center text-green-400" role="status">
                {t('contact.form.success')}
              </p>
            )}
            {error && (
              <p className="mt-2 text-sm text-center text-red-400" role="alert">
                {t('contact.form.failure')}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
