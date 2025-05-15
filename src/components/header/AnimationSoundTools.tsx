
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
        <AccordionContent className={isMobile ? "bg-white/5" : "px-2 bg-white/5 rounded-md mt-1"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '2'} ${isMobile ? 'py-2' : 'py-2'}`}>
            {gptShortcuts.map((tool, index) => {
              // Apply different styles based on the tool name
              let buttonStyle = "";
              let iconColor = "";
              
              if (tool.name === "Movie Script Writer GPT") {
                buttonStyle = "from-purple-500 via-purple-400 to-purple-600 hover:shadow-purple-500/30";
                iconColor = "text-purple-300";
              } else if (tool.name === "Movie Scene Maker GPT") {
                buttonStyle = "from-blue-500 via-blue-400 to-blue-600 hover:shadow-blue-500/30";
                iconColor = "text-blue-300";
              } else if (tool.name === "Movie Trailer Poster GPT") {
                buttonStyle = "from-orange-500 via-orange-400 to-orange-600 hover:shadow-orange-500/30";
                iconColor = "text-orange-300";
              } else if (tool.name === "Music Video Maker GPT") {
                buttonStyle = "from-green-500 via-green-400 to-green-600 hover:shadow-green-500/30";
                iconColor = "text-green-300";
              }
              
              return (
                <a 
                  key={tool.name}
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={onItemClick}
                  className={`
                    group relative overflow-hidden px-4 py-2.5 rounded-md shadow-sm 
                    bg-gradient-to-r ${buttonStyle} 
                    transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                    flex items-center animate-fade-in
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-white/20 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  {tool.name === "Movie Script Writer GPT" && (
                    <Film className={`h-4 w-4 mr-2 ${iconColor} group-hover:animate-pulse-subtle`} />
                  )}
                  {tool.name === "Movie Scene Maker GPT" && (
                    <Video className={`h-4 w-4 mr-2 ${iconColor} group-hover:animate-pulse-subtle`} />
                  )}
                  {tool.name === "Movie Trailer Poster GPT" && (
                    <Image className={`h-4 w-4 mr-2 ${iconColor} group-hover:animate-pulse-subtle`} />
                  )}
                  {tool.name === "Music Video Maker GPT" && (
                    <Music className={`h-4 w-4 mr-2 ${iconColor} group-hover:animate-pulse-subtle`} />
                  )}
                  
                  <span className="text-white font-medium text-sm">{tool.name}</span>
                </a>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
