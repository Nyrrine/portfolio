'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Users, Download, DollarSign, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'STATUS',
    subtitle: 'AI Social Simulation Platform',
    description: 'Data Manager & RPA Developer',
    logo: process.env.NODE_ENV === 'production' ? '/portfolio/statuslogov2.png' : '/statuslogov2.png',
    metrics: [
      { icon: Download, value: '2.5M+', label: 'Downloads', prefix: '' },
      { icon: Users, value: '200K+', label: 'Discord Members', prefix: '' }
    ],
    color: 'from-blue-500 to-cyan-500',
    bgPattern: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
    hoverColor: 'hover:shadow-blue-500/30',
    borderGlow: 'hover:border-blue-500',
    tags: ['Data Management', 'RPA Development', 'Automation', 'Community Analytics', 'DevRel'],
    link: '#'
  },
  {
    id: 2,
    title: 'ARBITER',
    subtitle: 'FMCG Supply Chain Management',
    description: 'Full-Stack Development',
    logo: process.env.NODE_ENV === 'production' ? '/portfolio/arbiteraiapplogo.png' : '/arbiteraiapplogo.png',
    metrics: [
      { icon: TrendingUp, value: 'Millions', label: 'of pesos handled in POS daily', prefix: '' },
      { icon: Users, value: '40+', label: 'Concurrent Users', prefix: '' }
    ],
    color: 'from-amber-500 to-yellow-500',
    bgPattern: 'bg-gradient-to-br from-amber-500/10 to-yellow-500/10',
    hoverColor: 'hover:shadow-amber-500/30',
    borderGlow: 'hover:border-amber-500',
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    specialNote: 'Modernizes FMCG pivoting tables and workflows',
    link: '#'
  },
  {
    id: 3,
    title: 'THE OC NETWORK',
    subtitle: 'Social Network Platform',
    description: 'Data Manager & RPA Developer',
    logo: process.env.NODE_ENV === 'production' ? '/portfolio/ocsn.png' : '/ocsn.png',
    metrics: [
      { icon: Users, value: '8,000+', label: 'Discord Community', prefix: '' }
    ],
    color: 'from-purple-500 to-pink-500',
    bgPattern: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    hoverColor: 'hover:shadow-pink-500/30',
    borderGlow: 'hover:border-pink-500',
    tags: ['Data Management', 'RPA Development', 'Community Building', 'Growth'],
    isGrowing: true,
    link: '#'
  },
  {
    id: 4,
    title: 'CUSTOMS AND COFFEE',
    subtitle: 'Indie Game Project',
    description: 'Lead Developer',
    logo: process.env.NODE_ENV === 'production' ? '/portfolio/customsandcoffee.png' : '/customsandcoffee.png',
    metrics: [
      { icon: Download, value: '17,000+', label: 'Downloads', prefix: '' }
    ],
    color: 'from-amber-700 to-amber-800',
    bgPattern: 'bg-gradient-to-br from-amber-700/10 to-amber-800/10',
    hoverColor: 'hover:shadow-amber-700/30',
    borderGlow: 'hover:border-amber-700',
    tags: ['Godot', 'Project Management', 'Game Development', 'Team Leadership'],
    isInDev: true,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
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
              
              <div className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 transition-all duration-300 ${project.borderGlow} ${project.hoverColor} hover:shadow-lg`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4">
                    {project.logo && (
                      <div className="w-12 h-12 relative flex-shrink-0">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          width={48}
                          height={48}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{project.subtitle}</p>
                    </div>
                  </div>
                  {project.isGrowing && (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm rounded-full animate-pulse">
                      GROWING
                    </span>
                  )}
                  {project.isInDev && (
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm rounded-full animate-pulse">
                      INDEV
                    </span>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <metric.icon className="w-5 h-5 text-gray-400" />
                      <div className="flex items-baseline gap-2">
                        <span className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {metric.prefix || ''}{metric.value}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {project.specialNote && (
                  <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 italic">
                    {project.specialNote}
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