"use client";
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  // FaCloud, 
  FaDatabase, 
  FaCogs, 
  FaUsers,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const iconMap: { [key: string]: React.ReactNode } = {
  'code': <FaCode className="text-4xl text-indigo-400" aria-hidden="true" />,
  'mobile': <FaMobile className="text-4xl text-indigo-400" aria-hidden="true" />,
  'database': <FaDatabase className="text-4xl text-indigo-400" aria-hidden="true" />,
  'cogs': <FaCogs className="text-4xl text-indigo-400" aria-hidden="true" />,
  'users': <FaUsers className="text-4xl text-indigo-400" aria-hidden="true" />,
};

interface Service {
  iconKey: string;
  title: string;
  description: string;
  features: string[];
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export default function ServicesSection() {
  const { t } = useTranslation('common');
  const services = t('services.items', { returnObjects: true }) as Service[];
  const processSteps = t('services.process.steps', { returnObjects: true }) as ProcessStep[];
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion 
    ? { initial: false, animate: false, whileInView: false }
    : {};

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleKeyboardNavigation = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section 
      id="services" 
      className="bg-gray-900 text-white py-20 px-6"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          {...motionProps}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-4xl font-bold text-indigo-400 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </motion.header>

        {/* Services Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          role="list"
          aria-label="Services offered"
        >
          {Array.isArray(services) && services.map((service, index) => (
            <motion.article
              key={service.title}
              {...motionProps}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900"
              role="listitem"
              aria-labelledby={`service-${index}-title`}
            >
              <div 
                className="mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {iconMap[service.iconKey]}
              </div>
              <h3 
                id={`service-${index}-title`}
                className="text-xl font-semibold text-white mb-3"
              >
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2" role="list" aria-label={`${service.title} features`}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400" role="listitem">
                    <FaCheckCircle className="text-indigo-400 mr-2 text-xs flex-shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Process Section */}
        <motion.section
          {...motionProps}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
          aria-labelledby="process-heading"
        >
          <header className="text-center mb-12">
            <h3 id="process-heading" className="text-3xl font-bold text-indigo-400 mb-4">{t('services.process.title')}</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t('services.process.description')}
            </p>
          </header>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
            aria-label="Development process steps"
          >
            {Array.isArray(processSteps) && processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                {...motionProps}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center group"
                role="listitem"
                aria-labelledby={`step-${index}-title`}
              >
                <div 
                  className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 group-hover:bg-indigo-500 transition-colors duration-300"
                  aria-label={`Step ${step.step}`}
                >
                  {step.step}
                </div>
                <h4 
                  id={`step-${index}-title`}
                  className="text-lg font-semibold text-white mb-2"
                >
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          {...motionProps}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
          aria-labelledby="cta-heading"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <FaRocket className="text-4xl text-white mx-auto mb-4" aria-hidden="true" />
            <h3 id="cta-heading" className="text-2xl font-bold mb-4">{t('services.cta.title')}</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                onKeyDown={(e) => handleKeyboardNavigation(e, scrollToContact)}
                className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                aria-label="Navigate to contact section"
              >
                {t('services.cta.button1')}
              </button>
              <a
                href="/CV DAVID PROANO SOFTWARE DEVELOPER .pdf"
                download="CV_David_Proano_Software_Developer.pdf"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                aria-label="Download Giovanni's CV as PDF"
              >
                {t('downloadCv')}
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
} 