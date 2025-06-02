
import { useState, useEffect } from 'react';

export default function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(255, 255, 255, 0.1) 0%, 
          rgba(255, 255, 255, 0.05) 20%, 
          rgba(229, 9, 20, 0.03) 40%, 
          transparent 60%)`,
        mixBlendMode: 'screen',
      }}
    >
      {/* Inner bright spotlight */}
      <div
        className="absolute w-32 h-32 rounded-full"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: `radial-gradient(circle, 
            rgba(255, 255, 255, 0.2) 0%, 
            rgba(255, 255, 255, 0.1) 30%, 
            rgba(255, 255, 255, 0.05) 60%, 
            transparent 100%)`,
          filter: 'blur(8px)',
        }}
      />
      
      {/* Outer glow */}
      <div
        className="absolute w-96 h-96 rounded-full"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: `radial-gradient(circle, 
            rgba(229, 9, 20, 0.06) 0%, 
            rgba(229, 9, 20, 0.02) 50%, 
            transparent 80%)`,
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
}
