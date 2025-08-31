'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Globe, Sparkles, Code, Users, Rocket } from 'lucide-react';
import Image from 'next/image';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    logo?: string;
    color: string;
    bgPattern: string;
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
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl">
              <div className={`relative ${project.bgPattern} rounded-2xl p-1`}>
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-t-2xl`} />
                    
                    <div className="relative p-8 border-b border-gray-200 dark:border-gray-800">
                      <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      
                      <div className="flex items-start gap-4">
                        {project.logo && (
                          <div className="w-16 h-16 relative flex-shrink-0">
                            <Image
                              src={project.logo}
                              alt={`${project.title} logo`}
                              width={64}
                              height={64}
                              className="rounded-xl object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                          <p className="text-lg text-gray-600 dark:text-gray-400">{project.subtitle}</p>
                          {project.detailedInfo.status === 'wip' && (
                            <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm rounded-full">
                              <Sparkles className="w-3 h-3" />
                              Work in Progress
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 space-y-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Rocket className="w-5 h-5 text-gray-500" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Overview</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {project.detailedInfo.overview}
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="w-5 h-5 text-gray-500" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Key Features</h3>
                        </div>
                        <ul className="space-y-2">
                          {project.detailedInfo.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2`} />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Code className="w-5 h-5 text-gray-500" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies Used</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.detailedInfo.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Users className="w-5 h-5 text-gray-500" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Role & Contributions</h3>
                        </div>
                        <ul className="space-y-2">
                          {project.detailedInfo.myRole.map((role, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2`} />
                              <span className="text-gray-600 dark:text-gray-400">{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {project.detailedInfo.links && (
                        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                          <div className="flex flex-wrap gap-4">
                            {project.detailedInfo.links.live && (
                              <a
                                href={project.detailedInfo.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white hover:opacity-90 transition-opacity`}
                              >
                                <Globe className="w-4 h-4" />
                                Visit Website
                              </a>
                            )}
                            {project.detailedInfo.links.github && (
                              <a
                                href={project.detailedInfo.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:opacity-90 transition-opacity"
                              >
                                <Github className="w-4 h-4" />
                                View on GitHub
                              </a>
                            )}
                            {project.detailedInfo.links.documentation && (
                              <a
                                href={project.detailedInfo.links.documentation}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Documentation
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}