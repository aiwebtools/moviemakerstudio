
import { useState, useEffect } from 'react';

interface BackgroundEffectsProps {
  cursorPosition: { x: number; y: number };
  isFacebookBrowser: boolean;
  isMobile: boolean;
  loaded: boolean;
}

export const BackgroundEffects = ({ 
  cursorPosition, 
  isFacebookBrowser, 
  isMobile,
  loaded 
}: BackgroundEffectsProps) => {
  const [spotlights, setSpotlights] = useState<{ x: number; y: number; size: number; speed: number; delay: number; direction: number }[]>([]);
  
  useEffect(() => {
    // Create spotlight positions
    const initialSpotlights = [
      { x: 30, y: 20, size: 300, speed: 0.5, delay: 0, direction: 1 },
      { x: 70, y: 80, size: 280, speed: 0.3, delay: 2, direction: -1 },
      { x: 20, y: 60, size: 320, speed: 0.4, delay: 1.5, direction: 1 },
    ];
    setSpotlights(initialSpotlights);
  }, []);
  
  const parallaxStyle = {
    transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * -20}px, ${cursorPosition.y * -20}px)`
  };
  
  return (
    <>
      <div className="absolute inset-0 bg-black opacity-95 z-0"></div>
      
      {/* Hollywood-style spotlights */}
      {!isFacebookBrowser && !isMobile && (
        <>
          {spotlights.map((spotlight, index) => (
            <div 
              key={index}
              className="absolute origin-bottom z-0 opacity-15"
              style={{
                left: `${spotlight.x}%`,
                bottom: '0',
                width: `${spotlight.size}px`,
                height: `${spotlight.size * 2}px`,
                background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)',
                transform: `rotate(${Math.sin((Date.now() / 1000 + spotlight.delay) * spotlight.speed) * 30 * spotlight.direction}deg)`,
                animation: `spotlight-sweep ${6 / spotlight.speed}s infinite ease-in-out ${spotlight.delay}s`,
                animationDirection: spotlight.direction > 0 ? 'normal' : 'reverse'
              }}
            ></div>
          ))}
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute h-full w-full bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          
          {/* Glow effects */}
          <div 
            className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-script-accent/5 blur-[80px] animate-pulse-subtle z-0"
            style={parallaxStyle}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-blue-500/5 blur-[60px] animate-pulse-subtle z-0"
            style={{
              transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * 30}px, ${cursorPosition.y * 30}px)`,
              animationDelay: '0.5s'
            }}
          ></div>
        </>
      )}
      
      {(isFacebookBrowser || isMobile) && (
        <div className="absolute inset-0 bg-black z-0"></div>
      )}
    </>
  );
}
