"use client";
import { motion } from 'framer-motion';
import { JSX } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiJest,
  SiDocker,
  SiGit,
  SiStorybook,
  SiDatev
} from 'react-icons/si';

const iconMap: { [key: string]: JSX.Element } = {
  React: <SiReact className="text-cyan-400" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'Tailwind CSS': <SiTailwindcss className="text-sky-400" />,
  MUI: <SiMui className="text-blue-500" />,
  'Styled Components': <SiStyledcomponents className="text-pink-300" />,
  'Node.js': <SiNodedotjs className="text-green-500" />,
  'Express.js': <SiExpress className="text-gray-200" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  MySQL: <SiMysql className="text-blue-300" />,
  Jest: <SiJest className="text-rose-400" />,
  Docker: <SiDocker className="text-blue-400" />,
  Git: <SiGit className="text-orange-500" />,
  'Azure Portal': <SiDatev className="text-blue-500" />,
  Storybook: <SiStorybook className="text-pink-400" />,
};

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'MUI', 'Styled Components'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Prisma', 'Strapi', 'JWT', 'WebSockets'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Playwright', 'Puppeteer', 'Mocha', 'Chai', 'TDD', 'BDD'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Docker', 'Git', 'Azure Portal', 'CI/CD', 'Storybook'],
  },
  {
    category: 'Languages',
    skills: [
      'Spanish (native)',
      'English (advanced)',
      'German (intermediate)',
      'French & Italian (basic)',
    ],
  },
  {
    category: 'Certification',
    skills: ['Microsoft AZ-204 – Azure Developer Associate (2023)'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-950 text-white py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-indigo-400 mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-indigo-300 mb-4">{group.category}</h3>
            <ul className="flex flex-wrap gap-3 text-sm text-gray-200">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 bg-indigo-600/20 border border-indigo-400 px-3 py-1 rounded-full"
                >
                  {iconMap[skill] && <span>{iconMap[skill]}</span>}
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
