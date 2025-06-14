"use client";
import { motion } from 'framer-motion';
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
    icon: <FaCode className="text-4xl text-indigo-400" />,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using React, Next.js, Node.js, and TypeScript.',
    features: ['Custom Web Applications', 'API Development', 'Database Design', 'Performance Optimization']
  },
  {
    icon: <FaMobile className="text-4xl text-indigo-400" />,
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
    icon: <FaDatabase className="text-4xl text-indigo-400" />,
    title: 'Database Solutions',
    description: 'Database design, optimization, and management for PostgreSQL and MySQL systems.',
    features: ['Database Design', 'Query Optimization', 'Data Migration', 'Performance Tuning']
  },
  {
    icon: <FaCogs className="text-4xl text-indigo-400" />,
    title: 'Technical Consulting',
    description: 'Architecture review, code audits, and technology stack recommendations.',
    features: ['Architecture Review', 'Code Quality Audits', 'Technology Stack Planning', 'Best Practices Implementation']
  },
  {
    icon: <FaUsers className="text-4xl text-indigo-400" />,
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
  return (
    <section id="services" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-indigo-400 mb-4">Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive software consulting services to help your business grow with modern, scalable technology solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <FaCheckCircle className="text-indigo-400 mr-2 text-xs" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-indigo-400 mb-4">My Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A proven methodology to deliver high-quality software solutions on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 group-hover:bg-indigo-500 transition-colors duration-300">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <FaRocket className="text-4xl text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your ideas to life with modern, scalable technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </button>
              <a
                href="/CV DAVID PROANO SOFTWARE DEVELOPER .pdf"
                download="CV_David_Proano_Software_Developer.pdf"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 