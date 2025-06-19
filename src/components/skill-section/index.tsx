"use client";
import { motion, useReducedMotion } from 'framer-motion';
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
import { useTranslation } from 'react-i18next';

const iconMap: { [key: string]: JSX.Element } = {
  'React': <SiReact className="text-cyan-400" aria-hidden="true" />,
  'Next.js': <SiNextdotjs className="text-white" aria-hidden="true" />,
  'React Native': <SiReact className="text-cyan-400" aria-hidden="true" />,
  'Tailwind CSS': <SiTailwindcss className="text-sky-400" aria-hidden="true" />,
  'MUI': <SiMui className="text-blue-500" aria-hidden="true" />,
  'Styled Components': <SiStyledcomponents className="text-pink-300" aria-hidden="true" />,
  'Node.js': <SiNodedotjs className="text-green-500" aria-hidden="true" />,
  'Express.js': <SiExpress className="text-gray-200" aria-hidden="true" />,
  'Prisma': <SiDatev className="text-gray-300" aria-hidden="true" />,
  'Strapi': <SiDatev className="text-purple-500" aria-hidden="true" />,
  'PostgreSQL': <SiPostgresql className="text-blue-400" aria-hidden="true" />,
  'MySQL': <SiMysql className="text-blue-300" aria-hidden="true" />,
  'Jest': <SiJest className="text-rose-400" aria-hidden="true" />,
  'Playwright': <SiDatev className="text-green-400" aria-hidden="true" />,
  'Puppeteer': <SiDatev className="text-blue-600" aria-hidden="true" />,
  'Mocha': <SiDatev className="text-yellow-600" aria-hidden="true" />,
  'Chai': <SiDatev className="text-red-400" aria-hidden="true" />,
  'Docker': <SiDocker className="text-blue-400" aria-hidden="true" />,
  'Git': <SiGit className="text-orange-500" aria-hidden="true" />,
  'Azure Portal': <SiDatev className="text-blue-500" aria-hidden="true" />,
  'Storybook': <SiStorybook className="text-pink-400" aria-hidden="true" />,
  'Microsoft AZ-204 – Azure Developer Associate (2023)': <SiDatev className="text-blue-500" aria-hidden="true" />,
};

interface SkillGroup {
  category: string;
  skills: string[];
  description: string;
}

export default function SkillsSection() {
  const { t } = useTranslation('common');
  const skillGroups = t('skills.groups', { returnObjects: true }) as SkillGroup[];
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion 
    ? { initial: false, animate: false, whileInView: false }
    : {};

  return (
    <section 
      id="skills" 
      className="bg-gray-950 text-white py-20 px-6"
      aria-labelledby="skills-heading"
    >
      <motion.h2
        id="skills-heading"
        className="text-4xl font-bold text-center text-indigo-400 mb-16"
        {...motionProps}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('skills.title')}
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {Array.isArray(skillGroups) && skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            {...motionProps}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg"
            role="region"
            aria-labelledby={`skills-${group.category.toLowerCase().replace(/\s+/g, '-')}-heading`}
          >
            <h3 
              id={`skills-${group.category.toLowerCase().replace(/\s+/g, '-')}-heading`}
              className="text-xl font-semibold text-indigo-300 mb-4"
            >
              {group.category}
            </h3>
            <p className="sr-only">{group.description}</p>
            <ul 
              className="flex flex-wrap gap-3 text-sm text-gray-200"
              role="list"
              aria-label={`${group.category} skills`}
            >
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 bg-indigo-600/20 border border-indigo-400 px-3 py-1 rounded-full"
                  role="listitem"
                >
                  {iconMap[skill] && (
                    <span role="img" aria-label={`${skill} icon`}>
                      {iconMap[skill]}
                    </span>
                  )}
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
