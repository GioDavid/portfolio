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

const services = [
  {
    icon: <FaCode className="text-4xl text-indigo-400" aria-hidden="true" />,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using React, Next.js, Node.js, and TypeScript.',
    features: ['Custom Web Applications', 'API Development', 'Database Design', 'Performance Optimization']
  },
  {
    icon: <FaMobile className="text-4xl text-indigo-400" aria-hidden="true" />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native for iOS and Android.',
    features: ['React Native Apps', 'Cross-Platform Solutions', 'Native Performance', 'App Store Deployment']
  },
  // {
  //   icon: <FaCloud className="text-4xl text-indigo-400" />,
  //   title: 'Cloud Solutions',
  //   description: 'Scalable cloud infrastructure and deployment using Azure, Docker, and modern DevOps practices.',
  //   features: ['Azure Cloud Services', 'Docker Containerization', 'CI/CD Pipelines', 'Scalable Architecture']
  // },
  {
    icon: <FaDatabase className="text-4xl text-indigo-400" aria-hidden="true" />,
    title: 'Database Solutions',
    description: 'Database design, optimization, and management for PostgreSQL and MySQL systems.',
    features: ['Database Design', 'Query Optimization', 'Data Migration', 'Performance Tuning']
  },
  {
    icon: <FaCogs className="text-4xl text-indigo-400" aria-hidden="true" />,
    title: 'Technical Consulting',
    description: 'Architecture review, code audits, and technology stack recommendations.',
    features: ['Architecture Review', 'Code Quality Audits', 'Technology Stack Planning', 'Best Practices Implementation']
  },
  {
    icon: <FaUsers className="text-4xl text-indigo-400" aria-hidden="true" />,
    title: 'Team Leadership',
    description: 'Technical leadership, mentoring, and agile project management for development teams.',
    features: ['Team Leadership', 'Technical Mentoring', 'Agile Methodologies', 'Project Management']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Understanding your business needs and defining project requirements'
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Creating scalable solutions and technical architecture'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Building robust applications with comprehensive testing'
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'Seamless deployment and ongoing maintenance support'
  }
];

export default function ServicesSection() {
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
          <h2 id="services-heading" className="text-4xl font-bold text-indigo-400 mb-4">Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive software consulting services to help your business grow with modern, scalable technology solutions.
          </p>
        </motion.header>

        {/* Services Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          role="list"
          aria-label="Services offered"
        >
          {services.map((service, index) => (
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
                {service.icon}
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
            <h3 id="process-heading" className="text-3xl font-bold text-indigo-400 mb-4">My Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A proven methodology to deliver high-quality software solutions on time and within budget.
            </p>
          </header>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
            aria-label="Development process steps"
          >
            {processSteps.map((step, index) => (
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
            <h3 id="cta-heading" className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your ideas to life with modern, scalable technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                onKeyDown={(e) => handleKeyboardNavigation(e, scrollToContact)}
                className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                aria-label="Navigate to contact section"
              >
                Get In Touch
              </button>
              <a
                href="/CV DAVID PROANO SOFTWARE DEVELOPER .pdf"
                download="CV_David_Proano_Software_Developer.pdf"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                aria-label="Download Giovanni's CV as PDF"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
} 