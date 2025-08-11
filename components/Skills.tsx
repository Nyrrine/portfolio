'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'PostgreSQL', 'REST APIs', 'WebSockets', 'JWT Auth', 'Express.js'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Tools & Tech',
    icon: Wrench,
    skills: ['Git', 'Docker', 'Godot', 'RPA Tools', 'Retool', 'GitHub Actions'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    skills: ['Project Management', 'Data Analysis', 'Community Building', 'Team Leadership', 'Problem Solving', 'Communication'],
    color: 'from-amber-500 to-orange-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies and expertise I bring to every project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}