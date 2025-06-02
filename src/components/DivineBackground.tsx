
import { useEffect, useState } from 'react';

export default function DivineBackground() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  const [floatingOrbs, setFloatingOrbs] = useState<{ x: number; y: number; size: number; speed: number; direction: number }[]>([]);
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; speed: number }[]>([]);
  
  useEffect(() => {
    // Generate massive star field
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 300; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 1,
          delay: Math.random() * 10
        });
      }
      setStars(newStars);
    };
    
    // Generate floating energy orbs
    const generateOrbs = () => {
      const newOrbs = [];
      for (let i = 0; i < 25; i++) {
        newOrbs.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 120 + 40,
          speed: Math.random() * 1 + 0.3,
          direction: Math.random() * 360
        });
      }
      setFloatingOrbs(newOrbs);
    };
    
    // Generate floating particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 80; i++) {
        newParticles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.8 + 0.2
        });
      }
      setParticles(newParticles);
    };
    
    generateStars();
    generateOrbs();
    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Multi-layered dynamic background with intense movement */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 via-indigo-950 via-purple-950 to-slate-950 animate-gradient-slow bg-size-200" />
      
      {/* Rapid moving gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-900/40 via-purple-900/30 to-transparent animate-gradient-x opacity-70" style={{ animationDuration: '1.5s' }} />
      
      {/* Counter-rotating gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-violet-900/30 via-transparent via-gold-900/20 to-slate-900/30 animate-gradient-x" style={{ animationDelay: '0.5s', animationDuration: '2s', animationDirection: 'reverse' }} />
      
      {/* Diagonal sweeping gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 via-transparent via-purple-900/25 to-indigo-900/20 animate-gradient-slow" style={{ animationDelay: '1s', animationDuration: '3s' }} />
      
      {/* Intense divine light beams with rapid movement */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-gold-400/30 via-gold-300/20 to-transparent transform rotate-15 animate-celestial-float" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-gold-400/25 via-purple-400/15 to-transparent transform -rotate-15 animate-celestial-float" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold-400/28 via-violet-400/18 to-transparent transform rotate-8 animate-float" style={{ animationDelay: '2s', animationDuration: '2.5s' }} />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 via-gold-400/15 to-transparent transform rotate-22 animate-celestial-float" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-400/18 via-gold-300/12 to-transparent transform -rotate-18 animate-float" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }} />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gold-400/22 via-indigo-400/14 to-transparent transform rotate-12 animate-celestial-float" style={{ animationDelay: '2.5s', animationDuration: '4.2s' }} />
      </div>
      
      {/* Massive enhanced star field with varied animations */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-gold-300 opacity-60 ${index % 3 === 0 ? 'animate-pulse-subtle' : index % 3 === 1 ? 'animate-float' : 'animate-celestial-float'}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              boxShadow: `0 0 ${star.size * 4}px rgba(255, 215, 0, 0.4), 0 0 ${star.size * 8}px rgba(255, 215, 0, 0.2)`
            }}
          />
        ))}
      </div>
      
      {/* Dynamic floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-gold-400/30 to-purple-400/20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${index * 0.1}s`,
              animationDuration: `${2 + particle.speed}s`
            }}
          />
        ))}
      </div>
      
      {/* Massive floating divine orbs with intense movement */}
      <div className="absolute inset-0">
        {floatingOrbs.map((orb, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-radial from-gold-400/12 via-purple-400/8 to-transparent blur-2xl animate-celestial-float"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Additional massive divine orbs */}
      <div className="absolute top-1/6 left-1/8 w-60 h-60 rounded-full bg-gradient-radial from-gold-400/15 via-purple-400/8 to-transparent blur-3xl animate-celestial-float" style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
      <div className="absolute top-1/3 right-1/5 w-80 h-80 rounded-full bg-gradient-radial from-violet-400/12 via-gold-400/6 to-transparent blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-50 h-50 rounded-full bg-gradient-radial from-purple-400/18 via-gold-300/10 to-transparent blur-2xl animate-celestial-float" style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
      <div className="absolute top-2/3 right-1/8 w-70 h-70 rounded-full bg-gradient-radial from-gold-400/14 via-indigo-400/7 to-transparent blur-3xl animate-float" style={{ animationDelay: '3s', animationDuration: '4.5s' }} />
      <div className="absolute bottom-1/6 left-2/3 w-90 h-90 rounded-full bg-gradient-radial from-violet-400/10 via-gold-400/8 to-transparent blur-2xl animate-celestial-float" style={{ animationDelay: '1.5s', animationDuration: '6s' }} />
      
      {/* Rapid shimmering overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-300/6 to-transparent animate-gradient-x" style={{ animationDuration: '1.8s' }} />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-400/4 via-gold-400/3 to-transparent animate-gradient-x" style={{ animationDelay: '0.3s', animationDuration: '2.2s' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-violet-300/3 to-transparent animate-gradient-x" style={{ animationDelay: '0.8s', animationDuration: '1.5s' }} />
      
      {/* Multiple rotating cosmic waves with varied speeds */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-gold-400/15 rounded-full animate-rotate-slow transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '15s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-purple-400/20 rounded-full animate-rotate-slow transform -translate-x-1/2 -translate-y-1/2" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-violet-400/12 rounded-full animate-rotate-slow transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '22s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-gold-400/18 rounded-full animate-rotate-slow transform -translate-x-1/2 -translate-y-1/2" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-purple-400/25 rounded-full animate-rotate-slow transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '28s' }} />
      </div>
      
      {/* Intense flowing energy streams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold-400/25 to-transparent animate-gradient-x" style={{ animationDuration: '2s' }} />
        <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-transparent via-purple-400/20 to-transparent animate-gradient-x" style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-400/15 to-transparent animate-gradient-x" style={{ animationDelay: '0.5s', animationDuration: '1.8s' }} />
        <div className="absolute bottom-1/3 right-0 w-full h-1 bg-gradient-to-l from-transparent via-gold-300/18 to-transparent animate-gradient-x" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
      </div>
      
      {/* Pulsing cosmic energy centers */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-gold-400/60 animate-divine-glow" style={{ animationDuration: '2s' }} />
      <div className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-purple-400/50 animate-divine-glow" style={{ animationDelay: '1s', animationDuration: '3s' }} />
      <div className="absolute top-1/2 left-3/4 w-3 h-3 rounded-full bg-violet-400/70 animate-divine-glow" style={{ animationDelay: '2s', animationDuration: '2.5s' }} />
    </div>
  );
}
