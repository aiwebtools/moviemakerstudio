
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Home, ExternalLink, ChevronDown, Film, Music } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

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

  const animationTools = [
    { name: "SORA", url: "https://www.sora.com" },
    { name: "KLING", url: "https://klingai.com" },
    { name: "HAILUO", url: "https://hailuoai.video/" },
    { name: "Higgsfield", url: "https://higgsfield.ai/" },
    { name: "RunwayML", url: "https://runwayml.com/" },
    { name: "PIKA LABS", url: "https://pika.art/" },
  ];

  const soundTools = [
    { name: "SUNO Music Generator", url: "https://suno.com/invite/@aiwebtools" },
    { name: "Eleven Labs Voice & Sound Generator", url: "https://elevenlabs.io/?from=kennybastian5304" },
  ];

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
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tracking-tight group">
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
          
          {/* Reordered navigation items */}
          <Link to="/select-version">
            <Button size="sm" variant="default" className="bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300">
              USE MOVIE SCRIPT WRITER GPT
            </Button>
          </Link>
          
          <a 
            href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium text-gray-300 hover:text-script-accent flex items-center transition-colors"
          >
            <span className="mr-1">🎬</span> Movie Scene Maker GPT
          </a>
          
          <a 
            href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium text-gray-300 hover:text-script-accent flex items-center transition-colors"
          >
            <span className="mr-1">🎬</span> Movie Trailer Poster Maker
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-script-accent transition-colors">
                <Film className="h-4 w-4 mr-1" />
                ANIMATION & SOUND TOOLS
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 bg-script-bg border border-white/10 text-white">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="animation" className="border-white/10">
                  <AccordionTrigger className="px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium">
                    <Film className="h-4 w-4 mr-2" /> Animate Your Scenes
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    <div className="flex flex-col space-y-1">
                      {animationTools.map((tool) => (
                        <a 
                          key={tool.name}
                          href={tool.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-3 py-2 rounded-md text-sm hover:bg-white/5 flex items-center"
                        >
                          <span className="mr-1">🎬</span> {tool.name}
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="sound" className="border-white/10">
                  <AccordionTrigger className="px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium">
                    <Music className="h-4 w-4 mr-2" /> Music & FX Generation
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    <div className="flex flex-col space-y-1">
                      {soundTools.map((tool) => (
                        <a 
                          key={tool.name}
                          href={tool.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-3 py-2 rounded-md text-sm hover:bg-white/5 flex items-center"
                        >
                          <span className="mr-1">🎵</span> {tool.name}
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a 
            href="https://stagemasterai.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium text-gray-300 hover:text-script-accent flex items-center transition-colors"
          >
            <span className="mr-1">🎭</span> StageMaster AI Suite for the Performing Arts
          </a>
          
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-sm font-medium text-gray-300 hover:text-script-accent transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-1" /> MORE AI TOOLS
          </a>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-script-accent/20"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      <div className={cn(
        "fixed top-[72px] left-0 right-0 shadow-lg transition-all duration-300 overflow-hidden z-50",
        isFacebookBrowser 
          ? "bg-script-bg border-b border-white/5" 
          : "bg-script-bg/95 backdrop-blur-md border-b border-white/5",
        mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-4 pb-4">
          <Link 
            to="/" 
            className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>
          
          {/* Reordered mobile navigation items */}
          <Link to="/select-version" onClick={() => setMobileMenuOpen(false)}>
            <Button 
              size="sm" 
              variant="default" 
              className="bg-script-accent hover:bg-script-accent/90 shadow-glow w-full"
            >
              USE MOVIE SCRIPT WRITER GPT
            </Button>
          </Link>
          
          <a 
            href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="mr-1">🎬</span> Movie Scene Maker GPT
          </a>
          
          <a 
            href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="mr-1">🎬</span> Movie Trailer Poster Maker
          </a>
          
          <Collapsible
            open={toolsOpen}
            onOpenChange={setToolsOpen}
            className="w-full"
          >
            <CollapsibleTrigger className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-300 hover:text-script-accent transition-colors">
              <div className="flex items-center">
                <Film className="h-4 w-4 mr-1" />
                ANIMATION & SOUND TOOLS
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${toolsOpen ? 'transform rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-6 mt-2 space-y-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="animation" className="border-white/10">
                    <AccordionTrigger className="text-sm font-medium text-script-accent py-2">
                      Animate Your Scenes
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-3 py-2">
                        {animationTools.map((tool) => (
                          <a 
                            key={tool.name}
                            href={tool.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sm text-gray-300 hover:text-script-accent flex items-center"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="mr-1">🎬</span> {tool.name}
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="sound" className="border-white/10">
                    <AccordionTrigger className="text-sm font-medium text-script-accent py-2">
                      Music & FX Generation
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-3 py-2">
                        {soundTools.map((tool) => (
                          <a 
                            key={tool.name}
                            href={tool.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sm text-gray-300 hover:text-script-accent flex items-center"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="mr-1">🎵</span> {tool.name}
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <a 
            href="https://stagemasterai.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="mr-1">🎭</span> StageMaster AI Suite for the Performing Arts
          </a>
          
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ExternalLink className="h-4 w-4 mr-1" /> MORE AI TOOLS
          </a>
        </div>
      </div>
    </header>
  );
}
