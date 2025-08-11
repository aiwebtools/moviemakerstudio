import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clapperboard, Menu } from "lucide-react";
import DesktopNavigation from "./header/DesktopNavigation";
import MobileNavigation from "./header/MobileNavigation";
import { animationTools, soundTools, lipsyncTools, editingTools, gptShortcuts } from "@/data/tools";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const isFB = userAgent.indexOf('FBAN') > -1 || userAgent.indexOf('FBAV') > -1;
    setIsFacebookBrowser(isFB);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 transition-all duration-300 border-b-0 z-50",
      // Reduced padding on mobile to move logo up
      "py-1 px-0 md:py-3 md:px-0",
      isScrolled 
        ? isFacebookBrowser 
          ? "bg-script-bg" 
          : "bg-script-bg/95 backdrop-blur-md shadow-md" 
        : isFacebookBrowser 
          ? "bg-script-bg" 
          : "bg-transparent"
    )}>
      {/* Tagline positioned in top right corner */}
      <div className="absolute top-2 right-4 z-60 hidden md:block">
        <p className="text-xs text-gray-400 italic">
          "Your Launch Pad to the Tools That Power Your Story."
        </p>
      </div>
      
      <div className="w-full mx-0 px-3 md:px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clapperboard className="h-6 w-6 md:h-10 md:w-10 text-script-accent mr-2" />
            <div className="flex flex-col items-start">
              <span className="text-sm sm:text-lg md:text-2xl font-bold font-display tracking-tight group">
                MOVIE MAKER <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-script-accent group-hover:animate-pulse-glow hover:underline"
                >
                  AITOOLS.STUDIO
                </a>
              </span>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[0.6rem] sm:text-xs text-gray-400 hover:text-script-accent transition-colors hover:underline"
              >
                Presented By AiWebTools.Ai
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <a href="https://moviescriptwritergpt.lovable.app/select-version" target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm" 
                variant="default" 
                className="bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-sm font-medium h-8 px-3"
              >
                USE MOVIE SCRIPT WRITER GPT
              </Button>
            </a>
            
            <a 
              href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <Button 
                size="sm"
                variant="default"
                className="bg-[#F97316] hover:bg-[#F97316]/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-sm font-medium h-8 px-3"
              >
                Movie Scene Maker GPT
              </Button>
            </a>
            
            <a 
              href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <Button 
                size="sm"
                variant="default"
                className="bg-[#1EAEDB] hover:bg-[#1EAEDB]/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-sm font-medium h-8 px-3"
              >
                Movie Trailer Poster Maker
              </Button>
            </a>
            
            <DesktopNavigation 
              animationTools={animationTools} 
              soundTools={soundTools} 
              lipsyncTools={lipsyncTools}
              editingTools={editingTools}
              gptShortcuts={gptShortcuts}
            />

            <a 
              href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <Button 
                size="sm"
                variant="default"
                className="bg-[#10B981] hover:bg-[#10B981]/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-sm font-medium h-8 px-3"
              >
                Music Video Maker GPT
              </Button>
            </a>

            <a 
              href="https://chatgpt.com/g/g-681a201fe69c8191b99e1636be90139e-commercial-scene-maker-gpt" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <Button 
                size="sm"
                variant="default"
                className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-sm font-medium h-8 px-3"
              >
                Commercial Scene Maker GPT
              </Button>
            </a>

            <a 
              href="https://screenplaywritergpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <Button 
                size="sm"
                variant="default"
                className="bg-[#EC4899] hover:bg-[#EC4899]/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-sm font-medium h-8 px-3"
              >
                ScreenPlay Writer GPT
              </Button>
            </a>

            <a 
              href="https://stagemasterai.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <Button 
                size="sm"
                variant="default"
                className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-sm font-medium h-8 px-3"
              >
                StageMaster AI Suite
              </Button>
            </a>
            
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm font-medium text-gray-300 hover:text-script-accent px-2 py-1 rounded-md hover:bg-white/5 transition-all duration-200 h-8"
            >
              MORE AI TOOLS
            </a>
          </div>
          
          {/* Fixed mobile hamburger menu button - moved up */}
          <div className="md:hidden fixed top-1 right-3 z-60">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-script-accent/20 transition-colors bg-black/20 backdrop-blur-sm h-8 w-8"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className={cn(
                "h-5 w-5 transition-transform duration-300",
                mobileMenuOpen ? "transform rotate-90" : ""
              )} />
            </Button>
          </div>
        </div>
      </div>
      
      <MobileNavigation 
        isOpen={mobileMenuOpen} 
        isFacebookBrowser={isFacebookBrowser} 
        animationTools={animationTools} 
        soundTools={soundTools} 
        lipsyncTools={lipsyncTools}
        editingTools={editingTools}
        gptShortcuts={gptShortcuts}
        onToggleMenu={toggleMobileMenu} 
      />
    </header>
  );
}
