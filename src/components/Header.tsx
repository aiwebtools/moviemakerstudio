import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./header/MobileNavigation";
import DesktopNavigation from "./header/DesktopNavigation";
import { animationTools, soundTools, lipsyncTools } from "@/data/tools";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Detect Facebook in-app browser
  const isFacebookBrowser = /FBAN|FBAV/.test(navigator.userAgent);
  
  // Scroll event listener to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 h-[72px] z-50 transition-colors duration-300",
      isFacebookBrowser 
        ? "bg-script-bg border-b border-white/5" 
        : scrolled 
          ? "bg-script-bg/95 backdrop-blur-md border-b border-white/5" 
          : "bg-transparent"
    )}>
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex">
            <DesktopNavigation animationTools={animationTools} soundTools={soundTools} lipsyncTools={lipsyncTools} />
          </div>
          
          {/* Mobile Button - Shown only on mobile */}
          <div className="flex lg:hidden">
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Shown only on mobile when open */}
      <MobileNavigation 
        isOpen={isMenuOpen} 
        isFacebookBrowser={isFacebookBrowser} 
        animationTools={animationTools} 
        soundTools={soundTools} 
        lipsyncTools={lipsyncTools}
        onToggleMenu={toggleMenu} 
      />
    </header>
  );
}
