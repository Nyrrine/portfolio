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

    // Create grid positions for even distribution
    const createGridPositions = () => {
      const positions = [];
      for (let x = 0; x <= 100; x += 20) {
        for (let y = 0; y <= 100; y += 25) {
          positions.push({ x: x + (Math.random() * 10 - 5), y: y + (Math.random() * 10 - 5) });
        }
      }
      return positions;
    };

    const generateCircles = () => {
      const positions = createGridPositions();
      const circleCount = 25;
      const selectedPositions = positions.sort(() => Math.random() - 0.5).slice(0, circleCount);
      
      return selectedPositions.map((pos, i) => {
        const targetX = Math.random() * 100;
        const targetY = Math.random() * 100;
        
        return {
          id: i,
          size: Math.random() * 120 + 40,
          x: pos.x,
          y: pos.y,
          targetX: targetX,
          targetY: targetY,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 30 + 20,
          opacity: 0,
          fadeDirection: 'in' as const,
        };
      });
    };

    setCircles(generateCircles());

    // Animate circles with fade in/out and respawn
    const animationInterval = setInterval(() => {
      setCircles(prevCircles => 
        prevCircles.map(circle => {
          let newCircle = { ...circle };
          
          // Handle opacity animation
          if (circle.fadeDirection === 'in') {
            newCircle.opacity = Math.min(circle.opacity + 0.02, 0.7);
            if (newCircle.opacity >= 0.7) {
              newCircle.fadeDirection = 'out';
            }
          } else {
            newCircle.opacity = Math.max(circle.opacity - 0.01, 0);
            if (newCircle.opacity <= 0) {
              // Respawn at new position
              const newPos = {
                x: Math.random() * 100,
                y: Math.random() * 100,
              };
              newCircle = {
                ...circle,
                x: newPos.x,
                y: newPos.y,
                targetX: Math.random() * 100,
                targetY: Math.random() * 100,
                opacity: 0,
                fadeDirection: 'in',
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 120 + 40,
              };
            }
          }

          // Move towards target
          const dx = (newCircle.targetX - newCircle.x) * 0.002;
          const dy = (newCircle.targetY - newCircle.y) * 0.002;
          newCircle.x += dx;
          newCircle.y += dy;

          // Generate new target when close
          if (Math.abs(newCircle.targetX - newCircle.x) < 2 && Math.abs(newCircle.targetY - newCircle.y) < 2) {
            newCircle.targetX = Math.random() * 100;
            newCircle.targetY = Math.random() * 100;
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
        
        {/* Dynamic floating circles with enhanced movement */}
        {circles.map((circle) => (
          <div
            key={circle.id}
            className="absolute rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              background: circle.color,
              filter: 'blur(50px)',
              opacity: circle.opacity,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
        
        {/* Static gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-black/10" />
      </div>
      
      <style jsx global>{`
        @keyframes float-enhanced {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          25% {
            transform: translate(-30%, -70%) scale(1.1);
          }
          50% {
            transform: translate(-70%, -30%) scale(0.95);
          }
          75% {
            transform: translate(-20%, -40%) scale(1.05);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
}