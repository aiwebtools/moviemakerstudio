
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ExternalLink, ChevronDown, Film } from "lucide-react";
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
  onToggleMenu: () => void;
}

export default function MobileNavigation({
  isOpen,
  isFacebookBrowser,
  animationTools,
  soundTools,
  onToggleMenu,
}: MobileNavigationProps) {
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <div className={cn(
      "fixed top-[72px] left-0 right-0 shadow-lg transition-all duration-300 overflow-hidden z-50",
      isFacebookBrowser 
        ? "bg-script-bg border-b border-white/5" 
        : "bg-script-bg/95 backdrop-blur-md border-b border-white/5",
      isOpen ? "max-h-screen py-4" : "max-h-0"
    )}>
      <div className="container mx-auto px-4 flex flex-col space-y-4 pb-4">
        <Link 
          to="/" 
          className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
          onClick={onToggleMenu}
        >
          <Home className="h-4 w-4 mr-1" />
          Home
        </Link>
        
        <Link to="/select-version" onClick={onToggleMenu}>
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
          onClick={onToggleMenu}
        >
          <span className="mr-1">🎬</span> Movie Scene Maker GPT
        </a>
        
        <a 
          href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
          onClick={onToggleMenu}
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
              <AnimationSoundTools 
                animationTools={animationTools} 
                soundTools={soundTools} 
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
          className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
          onClick={onToggleMenu}
        >
          <span className="mr-1">🎭</span> StageMaster AI Suite for the Performing Arts
        </a>
        
        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-sm font-medium py-2 text-gray-300 hover:text-script-accent transition-colors"
          onClick={onToggleMenu}
        >
          <ExternalLink className="h-4 w-4 mr-1" /> MORE AI TOOLS
        </a>
      </div>
    </div>
  );
}
