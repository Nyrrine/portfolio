'use client';

import { useEffect, useState } from 'react';

interface Circle {
  id: number;
  size: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  duration: number;
  opacity: number;
  fadeDirection: 'in' | 'out';
  lifespan: number;
  maxLifespan: number;
}

export default function Background() {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(59, 130, 246, 0.5)', // Blue
      'rgba(168, 85, 247, 0.5)', // Purple
      'rgba(236, 72, 153, 0.5)', // Pink
      'rgba(34, 197, 94, 0.5)',  // Green
      'rgba(251, 146, 60, 0.5)', // Orange
      'rgba(147, 197, 253, 0.4)', // Light Blue
      'rgba(196, 181, 253, 0.4)', // Light Purple
      'rgba(251, 207, 232, 0.4)', // Light Pink
      'rgba(134, 239, 172, 0.4)', // Light Green
      'rgba(251, 191, 36, 0.5)',  // Amber
      'rgba(239, 68, 68, 0.4)',   // Red
      'rgba(99, 102, 241, 0.5)',  // Indigo
    ];

    const generateCircles = () => {
      const circleCount = 20;
      const circles = [];
      
      for (let i = 0; i < circleCount; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        circles.push({
          id: i,
          size: Math.random() * 100 + 50,
          x: x,
          y: y,
          targetX: x + (Math.random() * 40 - 20),
          targetY: y + (Math.random() * 40 - 20),
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 30 + 20,
          opacity: 0,
          fadeDirection: 'in' as const,
          lifespan: 0,
          maxLifespan: Math.random() * 200 + 300, // Each blob has different lifespan
        });
      }
      
      return circles;
    };

    setCircles(generateCircles());

    // Animate circles like fireflies with individual lifecycles
    const animationInterval = setInterval(() => {
      setCircles(prevCircles => 
        prevCircles.map(circle => {
          let newCircle = { ...circle };
          
          // Increment lifespan
          newCircle.lifespan += 1;
          
          // Handle individual lifecycle
          const fadeInDuration = newCircle.maxLifespan * 0.2;
          const fadeOutStart = newCircle.maxLifespan * 0.7;
          
          if (newCircle.lifespan < fadeInDuration) {
            // Fade in phase
            newCircle.opacity = (newCircle.lifespan / fadeInDuration) * 0.6;
          } else if (newCircle.lifespan > fadeOutStart) {
            // Fade out phase
            const fadeOutProgress = (newCircle.lifespan - fadeOutStart) / (newCircle.maxLifespan - fadeOutStart);
            newCircle.opacity = Math.max(0, 0.6 * (1 - fadeOutProgress));
          } else {
            // Full visibility phase
            newCircle.opacity = 0.6;
          }
          
          // Respawn when lifespan ends
          if (newCircle.lifespan >= newCircle.maxLifespan) {
            const newX = Math.random() * 100;
            const newY = Math.random() * 100;
            
            newCircle = {
              ...circle,
              x: newX,
              y: newY,
              targetX: newX + (Math.random() * 40 - 20),
              targetY: newY + (Math.random() * 40 - 20),
              opacity: 0,
              lifespan: 0,
              maxLifespan: Math.random() * 200 + 300,
              color: colors[Math.floor(Math.random() * colors.length)],
              size: Math.random() * 100 + 50,
            };
          }

          // Gentle floating movement like fireflies
          const time = Date.now() * 0.0001;
          const floatX = Math.sin(time * newCircle.duration * 0.1 + newCircle.id) * 0.3;
          const floatY = Math.cos(time * newCircle.duration * 0.1 + newCircle.id) * 0.3;
          
          // Move towards target with floating effect (reduced speed by 35%)
          const dx = (newCircle.targetX - newCircle.x) * 0.00065 + floatX * 0.65;
          const dy = (newCircle.targetY - newCircle.y) * 0.00065 + floatY * 0.65;
          newCircle.x += dx;
          newCircle.y += dy;

          // Generate new target when close (gentle wandering)
          if (Math.abs(newCircle.targetX - newCircle.x) < 5 && Math.abs(newCircle.targetY - newCircle.y) < 5) {
            newCircle.targetX = newCircle.x + (Math.random() * 30 - 15);
            newCircle.targetY = newCircle.y + (Math.random() * 30 - 15);
            
            // Keep within bounds
            newCircle.targetX = Math.max(0, Math.min(100, newCircle.targetX));
            newCircle.targetY = Math.max(0, Math.min(100, newCircle.targetY));
          }

          return newCircle;
        })
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />
        
        {/* Firefly-like floating circles */}
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
              filter: 'blur(45px)',
              opacity: circle.opacity,
              transform: `translate(-50%, -50%)`,
              transition: 'opacity 500ms ease-in-out',
            }}
          />
        ))}
        
        {/* Static gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-black/10" />
      </div>
    </>
  );
}