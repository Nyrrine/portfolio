'use client';

import { motion } from 'framer-motion';
import { Users, Download, Sparkles, Code } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TotalImpact() {
  const [animated, setAnimated] = useState(false);
  const [communities, setCommunities] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animated) {
      // Animate communities to 208,000
      const commTimer = setInterval(() => {
        setCommunities(prev => {
          if (prev >= 208000) {
            clearInterval(commTimer);
            return 208000;
          }
          return prev + 10400;
        });
      }, 100);

      // Animate downloads to 2,517,000 (2.5M Status + 17K Customs)
      const dlTimer = setInterval(() => {
        setDownloads(prev => {
          if (prev >= 2517000) {
            clearInterval(dlTimer);
            return 2517000;
          }
          return prev + 125850;
        });
      }, 100);

      // Animate projects
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
        clearInterval(commTimer);
        clearInterval(dlTimer);
        clearInterval(projTimer);
      };
    }
  }, [animated]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(3).replace(/\.?0+$/, '')}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            TOTAL IMPACT AT AGE 19
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Numbers that tell the story of growth and achievement
          </p>
        </motion.div>

        {/* Main stats in a unique layout */}
        <div className="relative">
          {/* Central circle with animated border */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="mx-auto w-64 h-64 md:w-80 md:h-80 relative"
          >
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border-4 border-dashed border-purple-500/30 animate-spin-slow-reverse" />
            
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: animated ? 1 : 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {formatNumber(downloads)}+
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Total Users Reached</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Orbiting stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:left-10"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Communities Built</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {formatNumber(communities)}+
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">members</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:right-10"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Major Projects</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {projects}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">completed</p>
            </div>
          </motion.div>

          {/* Bottom stat */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-sm"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 shadow-xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Download className="w-5 h-5" />
                    <span className="text-sm opacity-90">Software Downloads</span>
                  </div>
                  <div className="text-3xl font-bold">{formatNumber(downloads - 208000)}+</div>
                </div>
                <div className="text-right">
                  <Sparkles className="w-8 h-8 mb-2 ml-auto opacity-50" />
                  <p className="text-sm opacity-75">users</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Add spacing for bottom card */}
        <div className="h-32"></div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  );
}