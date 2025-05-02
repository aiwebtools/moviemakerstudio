
import { Home, ExternalLink, ChevronDown, Film } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AnimationSoundTools from "./AnimationSoundTools";

interface DesktopNavigationProps {
  animationTools: { name: string; url: string }[];
  soundTools: { name: string; url: string }[];
}

export default function DesktopNavigation({ animationTools, soundTools }: DesktopNavigationProps) {
  const location = useLocation();
  
  // Determine if a route is active
  const isActiveRoute = (path: string) => location.pathname === path;
  
  return (
    <nav className="flex items-center justify-between space-x-4 lg:space-x-6">
      <Link 
        to="/" 
        className={cn(
          "flex items-center justify-center w-9 h-9 relative rounded-md transition-all duration-200",
          isActiveRoute("/") 
            ? "text-script-accent bg-white/5" 
            : "text-gray-300 hover:text-script-accent hover:bg-white/5"
        )}
        title="Home"
      >
        <Home className={cn("h-5 w-5", isActiveRoute("/") && "text-script-accent")} />
        {isActiveRoute("/") && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-script-accent"></span>
        )}
      </Link>
      
      <Link to="/select-version">
        <Button 
          size="sm" 
          variant="default" 
          className="bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 font-medium"
        >
          USE MOVIE SCRIPT WRITER GPT
        </Button>
      </Link>
      
      <a 
        href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        <Button 
          size="sm"
          variant="default"
          className="bg-[#F97316] hover:bg-[#F97316]/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 font-medium"
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
          className="bg-[#1EAEDB] hover:bg-[#1EAEDB]/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 font-medium"
        >
          Movie Trailer Poster Maker
        </Button>
      </a>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="text-sm font-medium text-gray-300 hover:text-script-accent hover:bg-white/5 transition-colors px-2 py-1.5 h-auto"
          >
            <Film className="h-4 w-4 mr-1" />
            ANIMATION & SOUND TOOLS
            <ChevronDown className="h-3 w-3 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-72 bg-script-bg border border-white/10 text-white shadow-lg animate-fade-in"
          sideOffset={8}
        >
          <AnimationSoundTools animationTools={animationTools} soundTools={soundTools} />
        </DropdownMenuContent>
      </DropdownMenu>
      
      <a 
        href="https://stagemasterai.lovable.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        <Button 
          size="sm"
          variant="default"
          className="bg-[#33C3F0] hover:bg-[#33C3F0]/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 font-medium"
        >
          StageMaster AI Suite for the Performing Arts
        </Button>
      </a>
      
      <a 
        href="https://www.aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center text-sm font-medium text-gray-300 hover:text-script-accent px-2 py-1.5 rounded-md hover:bg-white/5 transition-all duration-200"
      >
        <ExternalLink className="h-4 w-4 mr-1" /> MORE AI TOOLS
      </a>
    </nav>
  );
}
