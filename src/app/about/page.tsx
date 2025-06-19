"use client";
// src/components/AboutSection.tsx
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation('common');
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
          alt={t('about.imageAlt')}
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
        <h2 id="about-heading" className="text-4xl font-bold mb-4 text-indigo-400">{t('about.title')}</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('about.bio')}
          </p>
          
          <div>
            <h3 className="sr-only">{t('about.highlightsTitle')}</h3>
            <ul className="space-y-2 text-sm text-indigo-200" role="list">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold" aria-hidden="true">🚀</span>
                <span><strong>{t('about.highlight1_bold')}</strong> {t('about.highlight1_text')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold" aria-hidden="true">💡</span>
                <span>{t('about.highlight2_text')} <strong>{t('about.highlight2_bold')}</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold" aria-hidden="true">🧠</span>
                <span><strong>{t('about.highlight3_bold')}</strong> {t('about.highlight3_text')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold" aria-hidden="true">🌍</span>
                <span>{t('about.highlight4_text')} <strong>{t('about.highlight4_bold')}</strong>{t('about.highlight4_text2')}</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
