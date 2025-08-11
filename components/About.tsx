'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target, Rocket, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            The story behind the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Hi, I&apos;m Joaquin!</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  At 19 years old, I&apos;ve already made my mark in the tech world by building and scaling platforms 
                  that serve millions of users. From managing explosive growth at Status to developing enterprise 
                  solutions that handle millions in daily transactions, I bring a unique blend of technical expertise 
                  and business acumen to every project.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">My Journey</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I started coding at a young age, driven by curiosity and a passion for creating things that matter. 
                  What began as simple projects quickly evolved into building production systems for major corporations 
                  and viral platforms. I&apos;ve learned that age is just a number when you have the skills, dedication, 
                  and vision to deliver results.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">What Drives Me</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I&apos;m passionate about leveraging technology to solve real-world problems. Whether it&apos;s automating 
                  workflows, building engaging user experiences, or scaling platforms to millions of users, I thrive on 
                  challenges that push the boundaries of what&apos;s possible.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-blue-500" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Current Focus</h4>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Scaling The OC Network to new heights</li>
                <li>• Leading development on Customs and Coffee</li>
                <li>• Exploring AI and automation opportunities</li>
                <li>• Building tools that empower communities</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-green-500" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Achievements</h4>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Helped scale Status to 1M+ users</li>
                <li>• Built enterprise system handling ₱Millions daily</li>
                <li>• Grew Discord communities by 200K+ members</li>
                <li>• Deployed 4 production systems with zero downtime</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-amber-500" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Interests</h4>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Game development and interactive experiences</li>
                <li>• Community building and social platforms</li>
                <li>• Process automation and efficiency</li>
                <li>• Learning new technologies and frameworks</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
            <Rocket className="w-5 h-5" />
            <span className="font-medium">Always learning, always building</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}