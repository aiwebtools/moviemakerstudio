
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ExternalLink, ChevronDown, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import AnimationSoundTools from "./AnimationSoundTools";

interface MobileNavigationProps {
  isOpen: boolean;
  isFacebookBrowser: boolean;
  animationTools: { name: string; url: string }[];
  soundTools: { name: string; url: string }[];
  lipsyncTools?: { name: string; url: string }[];
  editingTools?: { name: string; url: string }[];
  onToggleMenu: () => void;
}

export default function MobileNavigation({
  isOpen,
  isFacebookBrowser,
  animationTools,
  soundTools,
  lipsyncTools = [],
  editingTools = [],
  onToggleMenu,
}: MobileNavigationProps) {
  const [toolsOpen, setToolsOpen] = useState(false);
  const location = useLocation();
  
  // Determine if a route is active
  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <div className={cn(
      "fixed top-[60px] left-0 right-0 shadow-lg transition-all duration-300 overflow-hidden z-50 border-t-0",
      isFacebookBrowser 
        ? "bg-script-bg" 
        : "bg-script-bg/95 backdrop-blur-md",
      isOpen 
        ? "max-h-screen py-2 animate-fade-in" 
        : "max-h-0 animate-fade-out"
    )}>
      <div className="w-full px-4 flex flex-col space-y-2 pb-2">
        <Link 
          to="/" 
          className={cn(
            "flex items-center text-sm font-medium py-2 transition-all duration-200 hover:translate-x-1",
            isActiveRoute("/") 
              ? "text-script-accent" 
              : "text-gray-300 hover:text-script-accent"
          )}
          onClick={onToggleMenu}
        >
          <Home className={cn("h-4 w-4 mr-1", isActiveRoute("/") && "text-script-accent")} />
          Home
          {isActiveRoute("/") && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-script-accent animate-pulse" />
          )}
        </Link>
        
        <a 
          href="https://moviescriptwritergpt.lovable.app/select-version" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={onToggleMenu} 
          className="animate-fade-in" 
          style={{animationDelay: '50ms'}}
        >
          <Button 
            variant="default" 
            className="bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon w-full transition-all duration-300 transform hover:scale-[1.02] h-10 py-0 text-sm"
          >
            USE MOVIE SCRIPT WRITER GPT
          </Button>
        </a>
        
        <a 
          href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={onToggleMenu}
          className="animate-fade-in" 
          style={{animationDelay: '100ms'}}
        >
          <Button 
            variant="default"
            className="bg-[#F97316] hover:bg-[#F97316]/90 shadow-glow hover:shadow-neon w-full transition-all duration-300 transform hover:scale-[1.02] h-10 py-0 text-sm"
          >
            Movie Scene Maker GPT
          </Button>
        </a>
        
        <a 
          href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={onToggleMenu}
          className="animate-fade-in"
          style={{animationDelay: '150ms'}}
        >
          <Button 
            variant="default"
            className="bg-[#1EAEDB] hover:bg-[#1EAEDB]/90 shadow-glow hover:shadow-neon w-full transition-all duration-300 transform hover:scale-[1.02] h-10 py-0 text-sm"
          >
            Movie Trailer Poster Maker
          </Button>
        </a>
        
        <Collapsible
          open={toolsOpen}
          onOpenChange={setToolsOpen}
          className="w-full animate-fade-in"
          style={{animationDelay: '200ms'}}
        >
          <CollapsibleTrigger className="w-full flex items-center justify-between py-1.5 text-sm font-medium text-gray-300 hover:text-script-accent transition-colors border border-white/10 rounded-md px-2">
            <div className="flex items-center">
              <Clapperboard className="h-4 w-4 mr-1" />
              ANIMATION & SOUND TOOLS
            </div>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${toolsOpen ? 'transform rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="animate-accordion-down">
            <div className="ml-4 mt-2 space-y-2">
              <AnimationSoundTools 
                animationTools={animationTools} 
                soundTools={soundTools} 
                lipsyncTools={lipsyncTools}
                editingTools={editingTools}
                isMobile={true} 
                onItemClick={onToggleMenu} 
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        <a 
          href="https://stagemasterai.lovable.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={onToggleMenu}
          className="animate-fade-in"
          style={{animationDelay: '250ms'}}
        >
          <Button 
            variant="default"
            className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 shadow-glow hover:shadow-neon w-full transition-all duration-300 transform hover:scale-[1.02] h-10 py-0 text-xs"
          >
            StageMaster AI Suite for the Performing Arts
          </Button>
        </a>
        
        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-all duration-200 hover:translate-x-1 animate-fade-in"
          onClick={onToggleMenu}
          style={{animationDelay: '300ms'}}
        >
          <ExternalLink className="h-4 w-4 mr-1" /> MORE AI TOOLS
        </a>
      </div>
    </div>
  );
}
