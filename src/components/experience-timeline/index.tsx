"use client";
// src/components/ExperienceTimeline.tsx
import { motion, useReducedMotion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Consultant',
    company: 'Exit 83',
    date: '2022 – Present',
    description: 'Building and maintaining web applications using React, React Native, Next.js, Nest.js, and Node.js.',
    stack: ['React', 'Next.js', 'GraphQL', 'Node.js', 'React Native', 'Nest.js', "TypeScript", "PostgreSQL", "MySQL", "Docker", "Git", "Azure Portal"],
  },
  {
    title: 'Frontend Developer',
    company: 'Banco Pichincha',
    date: '2019 – 2022',
    description: 'Frontend Developer of deUna app and Tech Lead of the Digital Banking Design System',
    stack: ['React', 'Tailwind', "React Native", "TypeScript", "Jest", "Figma", "Storybook"],
  },
  {
    title: 'Software Consultant',
    company: 'Stack Builders',
    date: '2018 – 2019',
    description: 'Software consultant for the development of a web application for north american clients',
    stack: ['Express', 'MongoDB', 'React', "TypeScript", "Git", "React Native", "asp.net"],
  },
  {
    title: 'Frontend Developer',
    company: 'Sumitrag',
    date: '2014 – 2017',
    description: 'Frontend Developer of the driving management system and tracking platforms',
    stack: ['Polymer', "Web components", "Mocha", "Chai"] ,
  }
];

export default function ExperienceTimeline() {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion 
    ? { initial: false, animate: false, whileInView: false }
    : {};

  return (
    <section 
      className="bg-gray-950 text-white py-16 px-6" 
      id="experience"
      aria-labelledby="experience-heading"
    >
      <motion.h2
        id="experience-heading"
        {...motionProps}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-indigo-400 mb-12"
      >
        Experience
      </motion.h2>

      <div 
        className="max-w-4xl mx-auto space-y-12 border-l border-gray-700 pl-6"
        role="list"
        aria-label="Work experience timeline"
      >
        {experiences.map((exp, index) => (
          <motion.article
            key={`${exp.company}-${index}`}
            {...motionProps}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
            role="listitem"
            aria-labelledby={`experience-${index}-title`}
          >
            <div 
              className="absolute w-4 h-4 bg-indigo-400 rounded-full -left-2 top-1.5" 
              aria-hidden="true"
            />
            <header>
              <h3 
                id={`experience-${index}-title`}
                className="text-xl font-semibold text-indigo-300 pl-6"
              >
                {exp.title}
              </h3>
              <p 
                className="text-sm text-gray-400 italic mb-1 pl-6"
                aria-label={`Position at ${exp.company} from ${exp.date}`}
              >
                <span className="font-medium">{exp.company}</span> • <time>{exp.date}</time>
              </p>
            </header>
            <div className="pl-6">
              <p className="text-gray-300 mb-2">{exp.description}</p>
              <div 
                role="group" 
                aria-label={`Technologies used at ${exp.company}`}
              >
                <p className="sr-only">Technologies and tools used:</p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {exp.stack.map((tech) => (
                    <li key={tech} role="listitem">
                      <span className="text-xs bg-indigo-600/30 border border-indigo-500 px-2 py-1 rounded-full text-indigo-200">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
