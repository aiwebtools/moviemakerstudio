
import { useEffect, useState } from 'react';

export default function DivineBackground() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  const [floatingOrbs, setFloatingOrbs] = useState<{ x: number; y: number; size: number; speed: number; direction: number }[]>([]);
  
  useEffect(() => {
    // Generate divine stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 8
        });
      }
      setStars(newStars);
    };
    
    // Generate floating orbs
    const generateOrbs = () => {
      const newOrbs = [];
      for (let i = 0; i < 12; i++) {
        newOrbs.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          speed: Math.random() * 0.5 + 0.2,
          direction: Math.random() * 360
        });
      }
      setFloatingOrbs(newOrbs);
    };
    
    generateStars();
    generateOrbs();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Main divine gradient background with enhanced movement */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 via-indigo-950 to-slate-950 animate-gradient-slow bg-size-200" />
      
      {/* Secondary moving gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-950/30 to-transparent animate-gradient-x opacity-60" />
      
      {/* Tertiary diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/20 via-transparent to-gray-900/20 animate-gradient-slow" style={{ animationDelay: '2s', animationDuration: '6s' }} />
      
      {/* Enhanced moving divine light rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-400/20 to-transparent transform rotate-12 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-400/15 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold-400/18 to-transparent transform rotate-6 animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold-400/12 to-transparent transform rotate-18 animate-celestial-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold-400/14 to-transparent transform -rotate-8 animate-celestial-float" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Enhanced glistening stars with more movement */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gold-300 animate-pulse-subtle opacity-40"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: `0 0 ${star.size * 3}px rgba(255, 215, 0, 0.3)`
            }}
          />
        ))}
      </div>
      
      {/* Floating divine orbs with dynamic movement */}
      <div className="absolute inset-0">
        {floatingOrbs.map((orb, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-radial from-gold-400/8 to-transparent blur-xl animate-celestial-float"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced divine orbs with more variety */}
      <div className="absolute top-1/4 left-1/6 w-40 h-40 rounded-full bg-gradient-radial from-gold-400/8 to-transparent blur-xl animate-celestial-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-gradient-radial from-gold-400/6 to-transparent blur-lg animate-float" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-1/3 left-1/2 w-28 h-28 rounded-full bg-gradient-radial from-gold-400/7 to-transparent blur-md animate-celestial-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/6 w-36 h-36 rounded-full bg-gradient-radial from-gold-400/5 to-transparent blur-xl animate-float" style={{ animationDelay: '7s' }} />
      
      {/* Multiple shimmering overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-300/3 to-transparent animate-gradient-x" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gold-400/2 to-transparent animate-gradient-x" style={{ animationDelay: '1s', animationDuration: '3s' }} />
      
      {/* Rotating cosmic waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-gold-400/10 rounded-full animate-rotate-slow transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-gold-400/15 rounded-full animate-rotate-slow transform -translate-x-1/2 -translate-y-1/2" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-gold-400/8 rounded-full animate-rotate-slow transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '30s' }} />
      </div>
      
      {/* Flowing energy streams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent animate-gradient-x" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-gold-400/15 to-transparent animate-gradient-x" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>
    </div>
  );
}
