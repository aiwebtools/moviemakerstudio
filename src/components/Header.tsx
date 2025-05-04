
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clapperboard, Menu } from "lucide-react";
import DesktopNavigation from "./header/DesktopNavigation";
import MobileNavigation from "./header/MobileNavigation";
import { animationTools, soundTools, lipsyncTools, editingTools } from "@/data/tools";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);

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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
      isScrolled 
        ? isFacebookBrowser 
          ? "bg-script-bg border-b border-white/5" 
          : "bg-script-bg/90 backdrop-blur-md shadow-md border-b border-white/5" 
        : isFacebookBrowser 
          ? "bg-script-bg" 
          : "bg-transparent"
    )}>
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Clapperboard className="h-6 w-6 text-script-accent mr-2" />
            <div className="flex flex-col items-start">
              <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tracking-tight group">
                MOVIE Maker <span className="text-script-accent group-hover:animate-pulse-glow">Studio</span>
              </span>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-script-accent transition-colors"
              >
                Presented by AiWebTools.Ai
              </a>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:bg-script-accent/20 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className={cn(
              "h-6 w-6 transition-transform duration-300",
              mobileMenuOpen ? "transform rotate-90" : ""
            )} />
          </Button>
        </div>
        
        <div className="hidden md:block">
          <DesktopNavigation 
            animationTools={animationTools} 
            soundTools={soundTools} 
            lipsyncTools={lipsyncTools}
            editingTools={editingTools}
          />
        </div>
      </div>
      
      <MobileNavigation 
        isOpen={mobileMenuOpen} 
        isFacebookBrowser={isFacebookBrowser} 
        animationTools={animationTools} 
        soundTools={soundTools} 
        lipsyncTools={lipsyncTools}
        editingTools={editingTools}
        onToggleMenu={toggleMobileMenu} 
      />
    </header>
  );
}
