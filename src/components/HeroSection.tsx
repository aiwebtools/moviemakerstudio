import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(${cursorPosition.x * -20}px, ${cursorPosition.y * -20}px)`
  };

  const scrollToExamples = () => {
    const examplesSection = document.getElementById('examples');
    if (examplesSection) {
      examplesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark-gradient opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(229,9,20,0.15),_transparent_800px)] opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-paper-texture opacity-5 z-0"></div>
      
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute h-full w-full bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div 
        className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-script-accent/5 blur-[80px] animate-pulse-subtle z-0"
        style={parallaxStyle}
      ></div>
      <div 
        className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-blue-500/5 blur-[60px] animate-pulse-subtle z-0"
        style={{
          transform: `translate(${cursorPosition.x * 30}px, ${cursorPosition.y * 30}px)`,
          animationDelay: '0.5s'
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto flex flex-col items-center text-center space-y-8 max-w-4xl">
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/20 text-script-accent rounded-full mb-4 animate-pulse-subtle">
            Industry Standard AI Script Writing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 tracking-tight glow-text">
            Craft Award-Winning Movie Scripts <br/>
            <span className="text-gradient">with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            The most sophisticated AI screenwriting assistant that guides you through every step of the script creation process, from concept to final draft.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all delay-200 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link to="/select-version">
            <Button 
              size="lg" 
              className="font-medium bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300"
            >
              Start Your Script
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="font-medium border-script-accent/50 text-script-accent hover:bg-script-accent/10 transition-all duration-300"
            onClick={scrollToExamples}
          >
            See Examples
          </Button>
        </div>
        
        <div 
          className={`mt-12 w-full max-w-4xl transition-all delay-300 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="relative w-full rounded-xl overflow-hidden shadow-glow border border-white/10 aspect-video transform hover:scale-[1.02] transition-all duration-300">
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-script-bg/80">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-script-accent border-t-transparent animate-spin mb-3"></div>
                  <span className="text-script-accent text-sm">Loading video...</span>
                </div>
              </div>
            )}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/4e3Rkurt3-c?rel=0&autoplay=1" 
              title="ScriptWriter AI Demo Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="z-10"
              onLoad={handleVideoLoad}
            ></iframe>
          </div>
        </div>
        
        <div 
          className={`mt-12 w-full max-w-3xl transition-all delay-500 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{
            transform: `perspective(1000px) rotateX(${cursorPosition.y * 5}deg) rotateY(${cursorPosition.x * -5}deg)`
          }}
        >
          <div className="script-page transform rotate-[-1deg] mx-auto max-w-2xl hover:shadow-glow transition-all duration-500 relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-script-accent rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-script-accent rounded-full animate-pulse-glow delay-150"></div>
            <div className="scene-heading">INT. STUDIO APARTMENT - NIGHT</div>
            <div className="action-text">A dim-lit room. ALEX (30s, disheveled but determined) hunches over a laptop, the blue glow illuminating their exhausted face. Empty coffee cups surround them.</div>
            <div className="character-name">ALEX</div>
            <div className="dialogue">This time... this time it's going to be perfect.</div>
            <div className="action-text">The cursor blinks on a blank document titled "BREAKTHROUGH - Final Draft v23."</div>
            <div className="transition">FADE TO BLACK.</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-script-accent">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
