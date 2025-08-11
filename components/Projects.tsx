'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Users, Download, DollarSign } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'STATUS',
    subtitle: 'AI Social Simulation Platform',
    description: 'Community & Data Analytics Lead',
    metrics: [
      { icon: Download, value: '1M+', label: 'Downloads' },
      { icon: Users, value: '200K+', label: 'Discord Members' }
    ],
    color: 'from-blue-500 to-cyan-500',
    bgPattern: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
    tags: ['Community Management', 'Data Analytics', 'Automation', 'KPI Tracking'],
    link: '#'
  },
  {
    id: 2,
    title: 'ENTERPRISE DASHBOARD',
    subtitle: 'Supply Chain Management',
    description: 'Full-Stack Development',
    metrics: [
      { icon: DollarSign, value: '₱Millions', label: 'Daily Transactions' },
      { icon: Users, value: '40+', label: 'Concurrent Users' }
    ],
    color: 'from-emerald-500 to-teal-500',
    bgPattern: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10',
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    companies: ['SM', 'Robinsons', 'PureGold'],
    link: '#'
  },
  {
    id: 3,
    title: 'THE OC',
    subtitle: 'Social Network Platform',
    description: 'Development Team Member',
    metrics: [
      { icon: Users, value: '8,000+', label: 'Discord Community' }
    ],
    color: 'from-purple-500 to-pink-500',
    bgPattern: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    tags: ['Social Network', 'Community Building', 'Growth'],
    isGrowing: true,
    link: '#'
  },
  {
    id: 4,
    title: 'CUSTOMS AND COFFEE',
    subtitle: 'Indie Game Project',
    description: 'Co-Developer with Friends',
    metrics: [
      { icon: Download, value: '17,000+', label: 'Downloads' }
    ],
    color: 'from-amber-600 to-orange-500',
    bgPattern: 'bg-gradient-to-br from-amber-600/10 to-orange-500/10',
    tags: ['Game Development', 'Collaboration', 'Creative'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Building at scale, from viral platforms to enterprise systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 ${project.bgPattern} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{project.subtitle}</p>
                  </div>
                  {project.isGrowing && (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm rounded-full animate-pulse">
                      GROWING
                    </span>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <metric.icon className="w-5 h-5 text-gray-400" />
                      <div className="flex items-baseline gap-2">
                        <span className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {metric.value}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {project.companies && (
                  <div className="mb-4 flex gap-2 text-sm text-gray-500 dark:text-gray-400">
                    {project.companies.map((company, i) => (
                      <span key={i}>
                        {company}
                        {i < project.companies.length - 1 && ' •'}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>

                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}