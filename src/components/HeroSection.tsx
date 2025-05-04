
import { useState, useEffect, useCallback } from 'react';
import { BackgroundEffects } from './hero/BackgroundEffects';
import { HeroContent } from './hero/HeroContent';
import { HeroButtons } from './hero/HeroButtons';
import { VideoPreview } from './hero/VideoPreview';
import { ScriptPreview } from './hero/ScriptPreview';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const isFB = userAgent.indexOf('FBAN') > -1 || userAgent.indexOf('FBAV') > -1;
    setIsFacebookBrowser(isFB);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isFacebookBrowser && !isMobile) {
      setCursorPosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    }
  }, [isFacebookBrowser, isMobile]);
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const scrollToExamples = () => {
    const examplesSection = document.getElementById('examples');
    if (examplesSection) {
      examplesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <BackgroundEffects 
        cursorPosition={cursorPosition}
        isFacebookBrowser={isFacebookBrowser}
        isMobile={isMobile}
        loaded={loaded}
      />
      
      <div className="container relative z-10 mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-4xl pt-24 sm:pt-20 md:pt-16">
        <HeroContent loaded={loaded} />
        
        <HeroButtons loaded={loaded} isMobile={isMobile} />
        
        <VideoPreview loaded={loaded} />
        
        <ScriptPreview 
          loaded={loaded}
          cursorPosition={cursorPosition}
          isFacebookBrowser={isFacebookBrowser}
          isMobile={isMobile}
        />
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-script-accent">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
