'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Users, Download, TrendingUp, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  metrics: Array<{
    icon: LucideIcon;
    value: string;
    label: string;
    prefix: string;
  }>;
  color: string;
  bgPattern: string;
  hoverColor: string;
  borderGlow: string;
  tags: string[];
  link: string;
  specialNote?: string;
  isGrowing?: boolean;
  isInDev?: boolean;
  detailedInfo: {
    overview: string;
    keyFeatures: string[];
    technologies: string[];
    myRole: string[];
    links?: {
      live?: string;
      github?: string;
      documentation?: string;
    };
    status: 'completed' | 'in-development' | 'wip';
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: 'STATUS',
    subtitle: 'AI Social Simulation Platform',
    description: 'Data Manager, RPA Developer & Community Management',
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
    link: '#',
    detailedInfo: {
      overview: 'STATUS is a revolutionary AI social simulation platform that has grown to serve over 2.5 million users. I played a crucial role in building and maintaining the gift rewards automation system that handles thousands of daily transactions and user interactions.',
      keyFeatures: [
        'Developed and maintained gift rewards automation system handling thousands of daily transactions',
        'Implemented data management solutions for 2.5M+ user base',
        'Built RPA solutions for community moderation and support',
        'Created analytics dashboards for tracking user engagement and platform metrics',
        'Spearheaded staffing for technical support and moderation departments',
        'Managed explosive growth from startup to 200K+ Discord members'
      ],
      technologies: ['Python', 'JavaScript', 'Discord.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Git'],
      myRole: [
        'Built and maintained the gift rewards automation system from scratch',
        'Managed data pipelines processing millions of user interactions',
        'Led community management initiatives for 200K+ Discord members',
        'Developed custom bots and automation tools for platform operations',
        'Coordinated with cross-functional teams to implement new features',
        'Provided technical support and resolved critical platform issues'
      ],
      links: {
        live: 'https://www.statusai.com/',
        documentation: 'https://www.statusai.com/'
      },
      status: 'completed' as const
    }
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
    link: '#',
    detailedInfo: {
      overview: 'ARBITER is an enterprise-grade FMCG (Fast-Moving Consumer Goods) supply chain management system that I built from the ground up. The platform handles millions of pesos in daily transactions and serves 40+ concurrent users, modernizing traditional FMCG workflows.',
      keyFeatures: [
        'Real-time inventory tracking and management (WIP)',
        'Advanced pivoting tables for data analysis (WIP)',
        'Automated order processing and fulfillment (WIP)',
        'Multi-location warehouse management (WIP)',
        'Comprehensive reporting and analytics dashboard (WIP)',
        'Role-based access control and user management (WIP)'
      ],
      technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      myRole: [
        'Architected and developed the entire system from scratch',
        'Designed database schema for complex supply chain operations',
        'Implemented real-time data synchronization across multiple locations',
        'Created intuitive UI/UX for non-technical users',
        'Optimized performance to handle high-volume transactions',
        'Provided ongoing maintenance and feature updates'
      ],
      links: {},
      status: 'wip' as const
    }
  },
  {
    id: 3,
    title: 'THE OC NETWORK',
    subtitle: 'Social Network Platform',
    description: 'Data Manager, RPA Developer & Community Management',
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
    link: '#',
    detailedInfo: {
      overview: 'The OC Network is a thriving social network platform where I serve as a key member of the development team. I built the community guidelines website and help manage a growing Discord community of 8,000+ members, focusing on creating safe and inclusive online spaces.',
      keyFeatures: [
        'Developed comprehensive community guidelines website',
        'Implemented automated moderation systems',
        'Created data analytics dashboards for community insights',
        'Built engagement tracking and reporting tools',
        'Managed community growth from inception to 8,000+ members',
        'Established community safety protocols and procedures'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Discord.js', 'Node.js', 'MongoDB', 'Python'],
      myRole: [
        'Built the official community guidelines website from scratch',
        'Developed RPA solutions for community moderation',
        'Managed data analytics for user engagement tracking',
        'Led community growth initiatives and engagement strategies',
        'Created automated systems for member onboarding',
        'Collaborated with team to implement new platform features'
      ],
      links: {
        github: 'https://nyrrine.github.io/ocsn-community-guidelines/',
        documentation: 'https://nyrrine.github.io/ocsn-community-guidelines/'
      },
      status: 'completed' as const
    }
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
    link: '#',
    detailedInfo: {
      overview: 'Customs and Coffee is an indie game project where I serve as the Lead Developer. With over 17,000 downloads, this project combines engaging gameplay with a unique coffee shop management simulation. Currently in active development with exciting new features on the horizon.',
      keyFeatures: [
        'Coffee shop management simulation mechanics (WIP)',
        'Dynamic customer interaction system (WIP)',
        'Procedural event generation for varied gameplay (WIP)',
        'Resource management and upgrade systems (WIP)',
        'Engaging storyline with multiple endings (WIP)',
        'Custom art style and atmospheric soundtrack (WIP)'
      ],
      technologies: ['Godot Engine', 'GDScript', 'Python', 'Git', 'Aseprite', 'Audacity'],
      myRole: [
        'Leading development team and coordinating project roadmap',
        'Programming core gameplay mechanics and systems',
        'Implementing UI/UX design for optimal player experience',
        'Managing version control and deployment pipeline',
        'Coordinating with artists and sound designers',
        'Handling community feedback and feature requests'
      ],
      links: {},
      status: 'in-development' as const
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

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

                <button 
                  onClick={() => handleViewDetails(project)}
                  className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}