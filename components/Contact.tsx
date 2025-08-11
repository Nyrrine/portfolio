'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Let&apos;s Build Together</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Ready to create something incredible? Get in touch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:nyrrine@gmail.com" 
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-[var(--primary)] transition-colors group"
              >
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">Email</span>
              </a>
              
              <a 
                href="https://github.com/Nyrrine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-[var(--primary)] transition-colors group"
              >
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/joaquin-ross-70a528346/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-[var(--primary)] transition-colors group"
              >
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group">
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <FaDiscord className="w-5 h-5" />
                </div>
                <span className="font-medium">nyrrine</span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4" />
                <span>nyrrine@gmail.com</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2 justify-center">
                <FaDiscord className="w-4 h-4" />
                <span>Discord: nyrrine</span>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Currently available for freelance projects and full-time opportunities
              </p>
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 dark:text-green-400 font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}