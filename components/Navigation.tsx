'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm py-4" 
        : "py-6"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
          JR
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#projects" className="text-gray-900 dark:text-white font-medium hover:text-[var(--primary)] transition-colors">Projects</a>
          <a href="#skills" className="text-gray-900 dark:text-white font-medium hover:text-[var(--primary)] transition-colors">Skills</a>
          <a href="#about" className="text-gray-900 dark:text-white font-medium hover:text-[var(--primary)] transition-colors">About</a>
          <a href="#contact" className="text-gray-900 dark:text-white font-medium hover:text-[var(--primary)] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}