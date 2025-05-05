
import { ChevronDown, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AnimationSoundTools from "./AnimationSoundTools";

interface DesktopNavigationProps {
  animationTools: { name: string; url: string }[];
  soundTools: { name: string; url: string }[];
  lipsyncTools?: { name: string; url: string }[];
  editingTools?: { name: string; url: string }[];
}

export default function DesktopNavigation({ 
  animationTools, 
  soundTools, 
  lipsyncTools = [],
  editingTools = []
}: DesktopNavigationProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-sm font-medium text-gray-300 hover:text-script-accent hover:bg-white/5 transition-colors px-3 py-1 h-8 rounded-md border-0"
        >
          <Clapperboard className="h-4 w-4 mr-1" />
          ANIMATION & SOUND TOOLS
          <ChevronDown className="h-3 w-3 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-72 bg-script-bg border border-white/10 text-white shadow-lg animate-fade-in"
        sideOffset={8}
        align="end"
      >
        <AnimationSoundTools 
          animationTools={animationTools} 
          soundTools={soundTools}
          lipsyncTools={lipsyncTools}
          editingTools={editingTools}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
