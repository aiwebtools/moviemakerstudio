
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);

  useEffect(() => {
    // Check if running in Facebook browser
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8",
      isScrolled 
        ? isFacebookBrowser 
          ? "bg-script-bg border-b border-white/5" 
          : "bg-script-bg/90 backdrop-blur-md shadow-md border-b border-white/5" 
        : isFacebookBrowser 
          ? "bg-script-bg" 
          : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold font-display tracking-tight group">
            Movie Script Writer <span className="text-script-accent group-hover:animate-pulse-glow">GPT</span>
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
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="flex items-center text-sm font-medium text-gray-300 hover:text-script-accent transition-colors">
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>
          <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white hover:text-script-accent transition-colors">Features</a>
          <a href="#process" className="text-sm font-medium text-gray-300 hover:text-white hover:text-script-accent transition-colors">Process</a>
          <a href="#examples" className="text-sm font-medium text-gray-300 hover:text-white hover:text-script-accent transition-colors">Examples</a>
          <Link to="/select-version">
            <Button size="sm" variant="default" className="bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300">
              Start Writing
            </Button>
          </Link>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-script-accent/20"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-[72px] left-0 right-0 shadow-lg transition-all duration-300 overflow-hidden z-50",
        isFacebookBrowser 
          ? "bg-script-bg border-b border-white/5" 
          : "bg-script-bg/95 backdrop-blur-md border-b border-white/5",
        mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
      )}>
        <div className="container mx-auto px-6 flex flex-col space-y-4 pb-4">
          <Link 
            to="/" 
            className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>
          <a 
            href="#features" 
            className="text-sm font-medium py-2 text-gray-300 hover:text-white hover:text-script-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#process" 
            className="text-sm font-medium py-2 text-gray-300 hover:text-white hover:text-script-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Process
          </a>
          <a 
            href="#examples" 
            className="text-sm font-medium py-2 text-gray-300 hover:text-white hover:text-script-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Examples
          </a>
          <Link to="/select-version" onClick={() => setMobileMenuOpen(false)}>
            <Button 
              size="sm" 
              variant="default" 
              className="bg-script-accent hover:bg-script-accent/90 shadow-glow w-full"
            >
              Start Writing
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
