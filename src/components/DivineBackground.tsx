
import { useEffect, useState } from 'react';

export default function DivineBackground() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  
  useEffect(() => {
    // Generate divine stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5
        });
      }
      setStars(newStars);
    };
    
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Main divine gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 via-violet-950 to-indigo-950 animate-gradient-slow bg-size-200" />
      
      {/* Moving divine light rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-400/15 to-transparent transform rotate-12 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-400/10 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold-400/12 to-transparent transform rotate-6 animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Glistening stars */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gold-300 animate-pulse-subtle opacity-30"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 215, 0, 0.2)`
            }}
          />
        ))}
      </div>
      
      {/* Divine orbs - removed purple ones and kept only subtle gold */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full bg-gradient-radial from-gold-400/5 to-transparent blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-gradient-radial from-gold-400/3 to-transparent blur-md animate-float" style={{ animationDelay: '5s' }} />
      
      {/* Shimmering overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-300/2 to-transparent animate-gradient-x" />
    </div>
  );
}
