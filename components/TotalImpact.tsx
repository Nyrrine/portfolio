'use client';

import { motion } from 'framer-motion';
import { Users, Download, FolderOpen, Trophy } from 'lucide-react';
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

  const stats = [
    {
      icon: Users,
      value: communities,
      formattedValue: `${formatNumber(communities)}+`,
      label: 'members',
      subtitle: 'Communities Built',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Download,
      value: downloads,
      formattedValue: `${formatNumber(downloads)}+`,
      label: 'users',
      subtitle: 'Software Downloads',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FolderOpen,
      value: projects,
      formattedValue: projects.toString(),
      label: 'major projects',
      subtitle: 'Project Count',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/20">
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${stat.color.split(' ')[1]} 0%, ${stat.color.split(' ')[3]} 100%)`
                }}
              />
              
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-2">
                  <motion.div 
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.formattedValue}
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
                
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {stat.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
            <Trophy className="w-5 h-5" />
            <span className="font-medium">Building the future, one project at a time</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}