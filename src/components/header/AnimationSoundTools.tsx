
import { Film, Music, Headphones, Scissors, Sparkles, Video, Image } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Tool = {
  name: string;
  url: string;
};

interface AnimationSoundToolsProps {
  animationTools: Tool[];
  soundTools: Tool[];
  lipsyncTools?: Tool[];
  editingTools?: Tool[];
  gptShortcuts?: Tool[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function AnimationSoundTools({
  animationTools,
  soundTools,
  lipsyncTools = [],
  editingTools = [],
  gptShortcuts = [],
  isMobile = false,
  onItemClick,
}: AnimationSoundToolsProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="animation" className="border-white/10">
        <AccordionTrigger className={isMobile ? "text-sm font-medium text-script-accent py-2" : "px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium"}>
          <div className="flex items-center">
            <Film className="h-4 w-4 mr-2" /> Animate Your Scenes - Video Generation Tools
          </div>
        </AccordionTrigger>
        <AccordionContent className={isMobile ? "" : "px-2"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '1'} ${isMobile ? 'py-2' : ''}`}>
            {animationTools.map((tool, index) => (
              <a 
                key={tool.name}
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isMobile ? 'text-sm text-gray-300 hover:text-script-accent' : 'px-3 py-2 rounded-md text-sm hover:bg-white/5'} flex items-center transition-all duration-200 hover:translate-x-1 animate-fade-in`}
                onClick={onItemClick}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="mr-1">🎬</span> {tool.name}
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="lipsync" className="border-white/10">
        <AccordionTrigger className={isMobile ? "text-sm font-medium text-script-accent py-2" : "px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium"}>
          <div className="flex items-center">
            <Headphones className="h-4 w-4 mr-2" /> Lipsync
          </div>
        </AccordionTrigger>
        <AccordionContent className={isMobile ? "" : "px-2"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '1'} ${isMobile ? 'py-2' : ''}`}>
            {lipsyncTools.map((tool, index) => (
              <a 
                key={tool.name}
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isMobile ? 'text-sm text-gray-300 hover:text-script-accent' : 'px-3 py-2 rounded-md text-sm hover:bg-white/5'} flex items-center transition-all duration-200 hover:translate-x-1 animate-fade-in`}
                onClick={onItemClick}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="mr-1">👄</span> {tool.name}
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="sound" className="border-white/10">
        <AccordionTrigger className={isMobile ? "text-sm font-medium text-script-accent py-2" : "px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium"}>
          <div className="flex items-center">
            <Music className="h-4 w-4 mr-2" /> Music & FX Generation
          </div>
        </AccordionTrigger>
        <AccordionContent className={isMobile ? "" : "px-2"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '1'} ${isMobile ? 'py-2' : ''}`}>
            {soundTools.map((tool, index) => (
              <a 
                key={tool.name}
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isMobile ? 'text-sm text-gray-300 hover:text-script-accent' : 'px-3 py-2 rounded-md text-sm hover:bg-white/5'} flex items-center transition-all duration-200 hover:translate-x-1 animate-fade-in`}
                onClick={onItemClick}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tool.name === "Eleven Labs Voice & Sound Generator" ? (
                  <span className="mr-1">🔊</span>
                ) : (
                  <span className="mr-1">🎵</span>
                )} 
                {tool.name}
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="editing" className="border-white/10">
        <AccordionTrigger className={isMobile ? "text-sm font-medium text-script-accent py-2" : "px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium"}>
          <div className="flex items-center">
            <Scissors className="h-4 w-4 mr-2" /> Editing Tools
          </div>
        </AccordionTrigger>
        <AccordionContent className={isMobile ? "" : "px-2"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '1'} ${isMobile ? 'py-2' : ''}`}>
            {editingTools.map((tool, index) => (
              <a 
                key={tool.name}
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isMobile ? 'text-sm text-gray-300 hover:text-script-accent' : 'px-3 py-2 rounded-md text-sm hover:bg-white/5'} flex items-center transition-all duration-200 hover:translate-x-1 animate-fade-in`}
                onClick={onItemClick}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="mr-1">✂️</span> {tool.name}
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="gpt" className="border-white/10">
        <AccordionTrigger className={isMobile ? "text-sm font-medium text-white py-2" : "px-3 py-2 text-white hover:text-white/90 font-medium"}>
          <div className="flex items-center">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-300" /> GPT Shortcuts
          </div>
        </AccordionTrigger>
        <AccordionContent className={isMobile ? "bg-white/5" : "px-2 bg-white/5"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '1'} ${isMobile ? 'py-2' : ''}`}>
            {gptShortcuts.map((tool, index) => (
              <a 
                key={tool.name}
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isMobile ? 'text-sm text-white hover:text-yellow-300' : 'px-3 py-2 rounded-md text-sm hover:bg-white/10 text-white'} flex items-center transition-all duration-200 hover:translate-x-1 animate-fade-in`}
                onClick={onItemClick}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tool.name === "Movie Script Writer GPT" && <Film className="h-4 w-4 mr-1" />}
                {tool.name === "Movie Scene Maker GPT" && <Video className="h-4 w-4 mr-1" />}
                {tool.name === "Movie Trailer Poster GPT" && <Image className="h-4 w-4 mr-1" />}
                {tool.name === "Music Video Maker GPT" && <Music className="h-4 w-4 mr-1" />}
                {tool.name}
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
