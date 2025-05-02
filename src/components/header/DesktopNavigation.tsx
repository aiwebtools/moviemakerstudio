
import { Home, ExternalLink, ChevronDown, Film } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AnimationSoundTools from "./AnimationSoundTools";

interface DesktopNavigationProps {
  animationTools: { name: string; url: string }[];
  soundTools: { name: string; url: string }[];
}

export default function DesktopNavigation({ animationTools, soundTools }: DesktopNavigationProps) {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link to="/" className="flex items-center text-sm font-medium text-gray-300 hover:text-script-accent transition-colors">
        <Home className="h-4 w-4 mr-1" />
        Home
      </Link>
      
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
          <AnimationSoundTools animationTools={animationTools} soundTools={soundTools} />
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
  );
}
