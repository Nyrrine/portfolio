'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [counted, setCounted] = useState(false);
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState(0);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [jobTitleIndex, setJobTitleIndex] = useState(0);

  const jobTitles = [
    'Product Builder',
    'Data Manager',
    'Community Manager',
    'Project Manager',
    'AI Engineer'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [jobTitles.length]);

  useEffect(() => {
    if (counted) {
      const ageTimer = setInterval(() => {
        setAge(prev => {
          if (prev >= 19) {
            clearInterval(ageTimer);
            return 19;
          }
          return prev + 1;
        });
      }, 100);

      const userTimer = setInterval(() => {
        setUsers(prev => {
          if (prev >= 2500000) {
            clearInterval(userTimer);
            return 2500000;
          }
          return prev + 125000;
        });
      }, 100);

      const expTimer = setInterval(() => {
        setExperience(prev => {
          if (prev >= 3) {
            clearInterval(expTimer);
            return 3;
          }
          return prev + 1;
        });
      }, 300);

      const projTimer = setInterval(() => {
        setProjects(prev => {
          if (prev >= 4) {
            clearInterval(projTimer);
            return 4;
          }
          return prev + 1;
        });
      }, 300);

      return () => {
        clearInterval(ageTimer);
        clearInterval(userTimer);
        clearInterval(expTimer);
        clearInterval(projTimer);
      };
    }
  }, [counted]);

  const formatNumber = (num: number) => {
    if (num >= 2000000) return '2.5M+';
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
    return num.toString();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Joaquin Ross
        </motion.h1>
        
        <motion.div 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 h-16 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center items-center">
            <span>Full-Stack Developer &</span>
            <div className="relative inline-block w-52 h-16 flex items-center justify-center ml-4">
              <motion.span
                key={jobTitleIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[var(--primary)] absolute inset-0 flex items-center justify-center"
                style={{ whiteSpace: 'nowrap' }}
              >
                {jobTitles[jobTitleIndex]}
              </motion.span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Age:</span>
            <span className="font-bold text-2xl gradient-text">{age}</span>
          </div>
          <div className="hidden md:block text-gray-400">•</div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Total Impact:</span>
            <span className="font-bold text-2xl gradient-text">{formatNumber(users)}</span>
          </div>
          <div className="hidden md:block text-gray-400">•</div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Experience:</span>
            <span className="font-bold text-2xl gradient-text">{experience} {experience === 1 ? 'Year' : 'Years'}</span>
          </div>
          <div className="hidden md:block text-gray-400">•</div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Projects:</span>
            <span className="font-bold text-2xl gradient-text">{projects}</span>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}