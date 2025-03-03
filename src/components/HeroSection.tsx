
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f5f5f5,_transparent)] opacity-60 z-0"></div>
      <div className="absolute inset-0 bg-paper-texture opacity-10 z-0"></div>
      
      <div className="container relative z-10 mx-auto flex flex-col items-center text-center space-y-8 max-w-4xl">
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/10 text-script-accent rounded-full mb-4">
            Industry Standard AI Script Writing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 tracking-tight">
            Craft Award-Winning Movie Scripts with AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The most sophisticated AI screenwriting assistant that guides you through every step of the script creation process, from concept to final draft.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all delay-200 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button size="lg" className="font-medium">Start Your Script</Button>
          <Button size="lg" variant="outline" className="font-medium">See Examples</Button>
        </div>
        
        {/* Script sample preview */}
        <div className={`mt-12 w-full max-w-3xl transition-all delay-400 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="script-page transform rotate-[-1deg] mx-auto max-w-2xl">
            <div className="scene-heading">INT. STUDIO APARTMENT - NIGHT</div>
            <div className="action-text">A dim-lit room. ALEX (30s, disheveled but determined) hunches over a laptop, the blue glow illuminating their exhausted face. Empty coffee cups surround them.</div>
            <div className="character-name">ALEX</div>
            <div className="dialogue">This time... this time it's going to be perfect.</div>
            <div className="action-text">The cursor blinks on a blank document titled "BREAKTHROUGH - Final Draft v23."</div>
            <div className="transition">FADE TO BLACK.</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
