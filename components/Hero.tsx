'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [counted, setCounted] = useState(false);
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
          if (prev >= 1000000) {
            clearInterval(userTimer);
            return 1000000;
          }
          return prev + 50000;
        });
      }, 100);

      return () => {
        clearInterval(ageTimer);
        clearInterval(userTimer);
      };
    }
  }, [counted]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return '1M+';
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
    return num.toString();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Joaquin Ross
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full-Stack Developer & Product Builder
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center text-lg md:text-xl"
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
            <span className="text-gray-600 dark:text-gray-400">Users Impacted:</span>
            <span className="font-bold text-2xl gradient-text">{formatNumber(users)}</span>
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