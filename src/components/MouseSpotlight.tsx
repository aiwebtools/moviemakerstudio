
import { useState, useEffect, useRef } from 'react';

export default function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={`fixed top-0 left-0 w-96 h-96 pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
        background: `radial-gradient(circle at center, 
          rgba(255, 255, 255, 0.15) 0%, 
          rgba(255, 255, 255, 0.08) 20%, 
          rgba(229, 9, 20, 0.05) 40%, 
          transparent 70%)`,
        filter: 'blur(1px)',
        mixBlendMode: 'screen',
      }}
    >
      {/* Inner bright core */}
      <div
        className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(255, 255, 255, 0.3) 0%, 
            rgba(255, 255, 255, 0.1) 50%, 
            transparent 100%)`,
          filter: 'blur(0.5px)',
        }}
      />
      
      {/* Outer glow */}
      <div
        className="absolute top-1/2 left-1/2 w-80 h-80 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(229, 9, 20, 0.08) 0%, 
            rgba(229, 9, 20, 0.03) 30%, 
            transparent 70%)`,
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
}
