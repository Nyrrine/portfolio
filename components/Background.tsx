'use client';

import { useEffect, useState } from 'react';

interface Circle {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  duration: number;
  delay: number;
}

export default function Background() {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(59, 130, 246, 0.4)', // Blue
      'rgba(168, 85, 247, 0.4)', // Purple
      'rgba(236, 72, 153, 0.4)', // Pink
      'rgba(34, 197, 94, 0.4)',  // Green
      'rgba(251, 146, 60, 0.4)', // Orange
      'rgba(147, 197, 253, 0.35)', // Light Blue
      'rgba(196, 181, 253, 0.35)', // Light Purple
      'rgba(251, 207, 232, 0.35)', // Light Pink
      'rgba(134, 239, 172, 0.35)', // Light Green
    ];

    const generateCircles = () => {
      const newCircles = [];
      const circleCount = 15;
      
      for (let i = 0; i < circleCount; i++) {
        newCircles.push({
          id: i,
          size: Math.random() * 100 + 30,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
        });
      }
      return newCircles;
    };

    setCircles(generateCircles());
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />
        
        {/* Dynamic floating circles */}
        {circles.map((circle) => (
          <div
            key={circle.id}
            className="absolute rounded-full"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              background: circle.color,
              filter: 'blur(40px)',
              animation: `float ${circle.duration}s ease-in-out infinite`,
              animationDelay: `${circle.delay}s`,
            }}
          />
        ))}
        
        {/* Static gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-black/10" />
      </div>
    </>
  );
}