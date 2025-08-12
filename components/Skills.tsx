'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Database, Wrench, Brain, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      'TypeScript',
      'JavaScript', 
      'HTML5',
      'CSS3',
      'React',
      'Vite',
      'Express.js',
      'Tailwind CSS',
      'WebSocket'
    ],
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'hover:border-blue-500',
    bgGlow: 'hover:shadow-blue-500/20'
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      'JavaScript',
      'Node.js',
      'Python',
      'TypeScript',
      'PostgreSQL',
      'Pandas',
      'NumPy',
      'Jupyter',
      'DataGrip'
    ],
    color: 'from-emerald-500 to-teal-500',
    hoverColor: 'hover:border-emerald-500',
    bgGlow: 'hover:shadow-emerald-500/20'
  },
  {
    title: 'AI & Automation',
    icon: Cpu,
    skills: [
      'Claude',
      'N8N',
      'Perplexity',
      'RAG',
      'Vector DB',
      'PyAutoGUI',
      'Python',
      'Fine-tuning',
      'Training',
      'Secrev',
      'MCP Servers',
      'GitHub Actions'
    ],
    color: 'from-purple-500 to-pink-500',
    hoverColor: 'hover:border-purple-500',
    bgGlow: 'hover:shadow-purple-500/20'
  },
  {
    title: 'Tools & Tech',
    icon: Wrench,
    skills: [
      'VS Code',
      'Semgrep',
      'OWASP',
      'Notion',
      'Figma',
      'Canva',
      'Docker',
      'Kubernetes',
      'AWS',
      'Linux'
    ],
    color: 'from-amber-500 to-orange-500',
    hoverColor: 'hover:border-amber-500',
    bgGlow: 'hover:shadow-amber-500/20'
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    skills: [
      'Community Management',
      'Team Leadership',
      'Crisis Resolution',
      'Cross-functional Collaboration',
      'Client Communication',
      'Mentoring & Training',
      'Problem Solving',
      'Adaptability'
    ],
    color: 'from-rose-500 to-pink-500',
    hoverColor: 'hover:border-rose-500',
    bgGlow: 'hover:shadow-rose-500/20'
  }
];

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 px-6">
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
            Hover over categories to explore my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`relative bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-800 transition-all duration-300 cursor-pointer ${category.hoverColor} ${category.bgGlow} hover:shadow-xl hover:-translate-y-2`}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 transition-transform duration-300 ${hoveredCategory === index ? 'scale-110' : ''}`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {category.skills.length} skills
              </p>
              
              {/* Floating skill cards that appear on hover */}
              {hoveredCategory === index && category.skills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-10 bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-4 min-w-[200px] border border-gray-200 dark:border-gray-700"
                >
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}