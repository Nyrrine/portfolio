'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Zap, Target, Award } from 'lucide-react';
import { useState } from 'react';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    stat: '1M+',
    description: 'Users served across platforms',
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'hover:border-blue-500',
    details: 'Successfully scaled platforms from 0 to millions'
  },
  {
    icon: Zap,
    title: 'AI-Powered Efficiency',
    stat: '10x',
    description: 'Faster development with AI tools',
    color: 'from-emerald-500 to-teal-500',
    hoverColor: 'hover:border-emerald-500',
    details: 'Leveraging cutting-edge AI for rapid prototyping and development'
  },
  {
    icon: Clock,
    title: 'Modern Tech Stack',
    stat: '15+',
    description: 'Technologies mastered',
    color: 'from-purple-500 to-pink-500',
    hoverColor: 'hover:border-purple-500',
    details: 'Always using the latest and best tools'
  },
  {
    icon: Users,
    title: 'Community Focus',
    stat: '200K+',
    description: 'Discord members managed',
    color: 'from-amber-500 to-orange-500',
    hoverColor: 'hover:border-amber-500',
    details: 'Expert in building and scaling communities'
  },
  {
    icon: Target,
    title: 'Scalable Solutions',
    stat: '1M+',
    description: 'Users handled seamlessly',
    color: 'from-rose-500 to-pink-500',
    hoverColor: 'hover:border-rose-500',
    details: 'Building systems designed to grow from day one'
  },
  {
    icon: Award,
    title: 'Young & Innovative',
    stat: '19',
    description: 'Years old with enterprise experience',
    color: 'from-indigo-500 to-purple-500',
    hoverColor: 'hover:border-indigo-500',
    details: 'Fresh perspective with proven expertise'
  }
];

export default function WhyContactMe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Work With Me?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Interactive insights into what I bring to the table
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-800 transition-all duration-300 cursor-pointer ${reason.hoverColor} hover:shadow-xl hover:-translate-y-2`}
            >
              {/* Animated background gradient on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 rounded-xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-5' : ''}`}
              />
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${reason.color} mb-4`}>
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {reason.title}
                </h3>
                
                <div className="mb-3">
                  <span className={`text-3xl font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                    {reason.stat}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {reason.description}
                  </p>
                </div>
                
                {/* Details that appear on hover */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-gray-600 dark:text-gray-400 overflow-hidden"
                >
                  {reason.details}
                </motion.p>

                {/* Animated progress bar */}
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${reason.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg italic">
            &ldquo;Combining youthful innovation with enterprise-level expertise&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}