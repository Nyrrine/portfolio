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
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    iconBg: 'bg-blue-500/20',
    tagColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
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
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/20',
    tagColor: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
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
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    iconBg: 'bg-purple-500/20',
    tagColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
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
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    iconBg: 'bg-amber-500/20',
    tagColor: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
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
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    iconBg: 'bg-rose-500/20',
    tagColor: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300'
  }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(index)}
              className={`
                px-6 py-3 rounded-xl font-medium transition-all duration-300
                ${selectedCategory === index 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105` 
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800'
                }
              `}
            >
              <div className="flex items-center gap-2">
                <category.icon className="w-5 h-5" />
                <span>{category.title}</span>
                <span className={`
                  px-2 py-0.5 rounded-full text-xs font-bold
                  ${selectedCategory === index 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }
                `}>
                  {category.skills.length}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`
            relative rounded-2xl p-8 
            ${skillCategories[selectedCategory].bgColor}
            border-2 ${skillCategories[selectedCategory].borderColor}
          `}
        >
          {/* Decorative gradient orb */}
          <div 
            className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30 bg-gradient-to-r ${skillCategories[selectedCategory].color}`}
          />
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-xl ${skillCategories[selectedCategory].iconBg}`}>
                {(() => {
                  const Category = skillCategories[selectedCategory];
                  return <Category.icon className="w-8 h-8 text-gray-900 dark:text-white" />;
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {skillCategories[selectedCategory].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skillCategories[selectedCategory].skills.length} technologies mastered
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skillCategories[selectedCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`
                    px-4 py-2.5 rounded-lg text-center font-medium
                    ${skillCategories[selectedCategory].tagColor}
                    hover:scale-105 transition-transform duration-200 cursor-default
                  `}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Skill Level Indicator */}
            <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency Level</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Expert</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full bg-gradient-to-r ${skillCategories[selectedCategory].color}`}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}