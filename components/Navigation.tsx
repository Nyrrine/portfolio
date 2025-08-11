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
      scrolled ? "glass py-4" : "py-6"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          JR
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#projects" className="hover:text-[var(--primary)] transition-colors">Projects</a>
          <a href="#about" className="hover:text-[var(--primary)] transition-colors">About</a>
          <a href="#contact" className="hover:text-[var(--primary)] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}