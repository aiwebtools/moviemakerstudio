import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [videoLoaded, setVideoLoaded] = useState(false);
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
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isFB) {
        setCursorPosition({
          x: (e.clientX / window.innerWidth) - 0.5,
          y: (e.clientY / window.innerHeight) - 0.5
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const parallaxStyle = {
    transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * -20}px, ${cursorPosition.y * -20}px)`
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

  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = 'https://i.ytimg.com/vi/4e3Rkurt3-c/maxresdefault.jpg';
    document.head.appendChild(preloadLink);

    return () => {
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark-gradient opacity-90 z-0"></div>
      
      {!isFacebookBrowser && !isMobile && (
        <>
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
              transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * 30}px, ${cursorPosition.y * 30}px)`,
              animationDelay: '0.5s'
            }}
          ></div>
        </>
      )}
      
      {(isFacebookBrowser || isMobile) && (
        <div className="absolute inset-0 bg-script-bg z-0"></div>
      )}
      
      <div className="container relative z-10 mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-4xl pt-24 sm:pt-20 md:pt-16">
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/20 text-script-accent rounded-full mb-3 md:mb-4">
            Industry Standard AI Script Writing
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-3 md:mb-4 tracking-tight glow-text">
            Craft Award-Winning Movie Scripts <br className="hidden sm:block" />
            <span className="text-gradient">with AI</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            The most sophisticated AI screenwriting assistant that guides you through every step of the script creation process, from concept to final draft.
          </p>
        </div>
        
        <div className={`flex flex-row flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 transition-all delay-200 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link to="/select-version">
            <Button 
              size={isMobile ? "default" : "lg"} 
              className="font-medium bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300 text-sm sm:text-base"
            >
              Write Your Movie Script Now
            </Button>
          </Link>
          <a 
            href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size={isMobile ? "default" : "lg"} 
              variant="outline" 
              className="font-medium border-script-accent/50 text-script-accent hover:bg-script-accent/10 transition-all duration-300 text-sm sm:text-base whitespace-normal md:whitespace-nowrap"
            >
              Start Creating Your Movie Scene Visuals Click Here
            </Button>
          </a>
          <a 
            href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size={isMobile ? "default" : "lg"} 
              variant="outline" 
              className="font-medium border-[#1EAEDB]/50 text-[#1EAEDB] hover:bg-[#1EAEDB]/10 transition-all duration-300 text-sm sm:text-base"
            >
              Make Your Movie Trailer Poster
            </Button>
          </a>
        </div>
        
        <div 
          className={`mt-6 sm:mt-8 md:mt-10 w-full max-w-4xl transition-all delay-300 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="relative w-full rounded-xl overflow-hidden shadow-glow border border-white/10 aspect-video transform hover:scale-[1.01] transition-all duration-300">
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-script-bg/80">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-script-accent border-t-transparent animate-spin mb-3"></div>
                  <span className="text-script-accent text-xs sm:text-sm">Loading video...</span>
                </div>
              </div>
            )}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/4e3Rkurt3-c?rel=0&autoplay=1&playsinline=1&enablejsapi=1&modestbranding=1&origin=https://www.aiwebtools.ai&vq=hd1080&playlist=4e3Rkurt3-c&controls=1" 
              title="ScriptWriter AI Demo Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
              allowFullScreen
              loading="eager"
              className="z-10"
              onLoad={handleVideoLoad}
            ></iframe>
          </div>
        </div>
        
        <div 
          className={`mt-6 sm:mt-8 w-full max-w-3xl transition-all delay-500 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={(isFacebookBrowser || isMobile) ? {} : {
            transform: `perspective(1000px) rotateX(${cursorPosition.y * 5}deg) rotateY(${cursorPosition.x * -5}deg)`
          }}
        >
          <div className="script-page transform rotate-[-1deg] mx-auto max-w-2xl hover:shadow-glow transition-all duration-500 relative">
            <div className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-script-accent rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-script-accent rounded-full animate-pulse-glow delay-150"></div>
            <div className="scene-heading text-sm sm:text-base">INT. STUDIO APARTMENT - NIGHT</div>
            <div className="action-text text-xs sm:text-sm">A dim-lit room. ALEX (30s, disheveled but determined) hunches over a laptop, the blue glow illuminating their exhausted face. Empty coffee cups surround them.</div>
            <div className="character-name text-xs sm:text-sm">ALEX</div>
            <div className="dialogue text-xs sm:text-sm">This time... this time it's going to be perfect.</div>
            <div className="action-text text-xs sm:text-sm">The cursor blinks on a blank document titled "BREAKTHROUGH - Final Draft v23."</div>
            <div className="transition text-xs sm:text-sm">FADE TO BLACK.</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-script-accent">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
