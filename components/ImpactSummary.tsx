'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const impactMetrics = [
  { label: 'Communities Built', value: 208000, suffix: '+ members' },
  { label: 'Software Downloads', value: 1017000, suffix: '+ users' },
  { label: 'Enterprise Value', value: 'Millions', prefix: '₱', suffix: ' handled' },
  { label: 'Developer Projects', value: 4, suffix: ' production systems' }
];

export default function ImpactSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState(impactMetrics.map(() => 0));

  useEffect(() => {
    if (isInView) {
      impactMetrics.forEach((metric, index) => {
        if (typeof metric.value === 'number') {
          const targetValue = metric.value;
          const duration = 2000;
          const steps = 60;
          const increment = targetValue / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
              current = targetValue;
              clearInterval(timer);
            }
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(current);
              return newCounts;
            });
          }, duration / steps);
        }
      });
    }
  }, [isInView]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">TOTAL IMPACT AT AGE 19</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {metric.prefix}
                {typeof metric.value === 'number' 
                  ? formatNumber(counts[index])
                  : metric.value
                }
                {metric.suffix && (
                  <span className="text-lg md:text-xl font-normal text-gray-600 dark:text-gray-400 block">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}