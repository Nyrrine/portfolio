'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, BookOpen } from 'lucide-react';
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
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-all duration-300">
                  <Mail className="w-5 h-5 group-hover:text-red-500 transition-colors duration-300" />
                </div>
                <span className="font-medium">Email</span>
              </a>
              
              <a 
                href="https://github.com/Nyrrine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-900 dark:group-hover:bg-gray-700 transition-all duration-300">
                  <Github className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/joaquin-ross-70a528346/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-[#0077B5] transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-[#0077B5] transition-all duration-300">
                  <Linkedin className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-[#5865F2] transition-all duration-300 group cursor-pointer">
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-[#5865F2] transition-all duration-300">
                  <FaDiscord className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-medium">nyrrine</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Blogs & Newsletters</h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">
                Stay updated with my latest thoughts and insights
              </p>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Community Guidelines Project</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        I&apos;ve recently launched a GitHub project focused on community guidelines to help create safer and more inclusive online spaces. Check it out on my GitHub!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">College Acceptance!</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Exciting news! I&apos;ve been accepted into college and I&apos;m looking forward to combining my academic journey with my passion for technology and development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Currently available for freelance projects and full-time opportunities
            </p>
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-600 dark:text-green-400 font-medium">Available for work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}