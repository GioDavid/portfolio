// src/components/ProjectGallery.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Portfolio Website',
    image: '/projects/project1.jpg',
    description: 'My personal portfolio built with Next.js and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    url: 'https://yourportfolio.com',
  },
  {
    title: 'AI Chat App',
    image: '/projects/project2.jpg',
    description: 'Real-time chat app using OpenAI API and WebSockets.',
    tech: ['React', 'Socket.IO', 'OpenAI'],
    url: 'https://aichatapp.com',
  },
  {
    title: 'E-commerce Dashboard',
    image: '/projects/project3.jpg',
    description: 'Admin panel with analytics and user management.',
    tech: ['React', 'Chart.js', 'Node.js'],
    url: '',
  },
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-indigo-400 mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            href={project.url || '#'}
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-indigo-300 mb-1">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-indigo-600/30 border border-indigo-500 px-2 py-1 rounded-full text-indigo-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
