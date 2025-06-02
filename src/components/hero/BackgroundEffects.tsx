
import { useState, useEffect, useRef } from 'react';

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
  const animationRef = useRef<number | null>(null);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    // Create spotlight positions
    const initialSpotlights = [
      { x: 30, y: 20, size: 300, speed: 0.5, delay: 0, direction: 1 },
      { x: 70, y: 80, size: 280, speed: 0.3, delay: 2, direction: -1 },
      { x: 20, y: 60, size: 320, speed: 0.4, delay: 1.5, direction: 1 },
      { x: 80, y: 40, size: 350, speed: 0.6, delay: 0.8, direction: -1 },
      { x: 50, y: 70, size: 270, speed: 0.35, delay: 2.5, direction: 1 },
      { x: 60, y: 30, size: 290, speed: 0.45, delay: 3.2, direction: -1 },
      { x: 40, y: 50, size: 330, speed: 0.55, delay: 1.2, direction: 1 },
    ];
    setSpotlights(initialSpotlights);
    
    // Set up continuous animation
    let lastTime = 0;
    const animate = (currentTime: number) => {
      if (lastTime === 0) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      setTime(prev => prev + deltaTime * 0.001); // Convert to seconds
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  const parallaxStyle = {
    transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * -20}px, ${cursorPosition.y * -20}px)`
  };
  
  return (
    <>
      {/* Reduced black overlay opacity to let divine background show through */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      
      {/* Hollywood-style spotlights */}
      {!isFacebookBrowser && !isMobile && (
        <>
          {spotlights.map((spotlight, index) => {
            // Calculate dynamic position based on time
            const xOffset = Math.sin((time + spotlight.delay) * spotlight.speed) * 15;
            const yOffset = Math.cos((time + spotlight.delay) * spotlight.speed * 0.7) * 10;
            const rotation = Math.sin((time + spotlight.delay) * spotlight.speed) * 25 * spotlight.direction;
            
            return (
              <div 
                key={index}
                className="absolute origin-bottom z-0 opacity-20"
                style={{
                  left: `calc(${spotlight.x}% + ${xOffset}px)`,
                  bottom: '0',
                  width: `${spotlight.size}px`,
                  height: `${spotlight.size * 2}px`,
                  background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
                  transform: `rotate(${rotation}deg) translateY(${yOffset}px)`,
                  transition: 'transform 0.5s ease-out',
                  pointerEvents: 'none',
                }}
              ></div>
            );
          })}
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <div className="absolute h-full w-full bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          
          {/* Enhanced glow effects */}
          <div 
            className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-script-accent/8 blur-[80px] animate-pulse-subtle z-0 pointer-events-none"
            style={parallaxStyle}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-blue-500/8 blur-[60px] animate-pulse-subtle z-0 pointer-events-none"
            style={{
              transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * 30}px, ${cursorPosition.y * 30}px)`,
              animationDelay: '0.5s'
            }}
          ></div>
        </>
      )}
      
      {/* For Facebook browser/mobile, use a lighter overlay */}
      {(isFacebookBrowser || isMobile) && (
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      )}
    </>
  );
}
