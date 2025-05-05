
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeroButtonsProps {
  loaded: boolean;
  isMobile: boolean;
}

export const HeroButtons = ({ loaded, isMobile }: HeroButtonsProps) => {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  
  return (
    <div className={`flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 transition-all delay-200 duration-700 px-4 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <a 
        href="https://moviescriptwritergpt.lovable.app/select-version" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full md:w-auto transition-transform duration-300"
        onMouseEnter={() => setHoveredButton(0)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          className={`w-full md:w-auto font-medium bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300 text-base md:text-lg transform ${hoveredButton === 0 ? 'scale-105' : ''}`}
        >
          <span className="bg-gradient-to-r from-white via-white/80 to-white bg-size-200 animate-gradient-x bg-clip-text">
            Write Your Movie Script Now
          </span>
        </Button>
      </a>
      <a 
        href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full md:w-auto transition-transform duration-300"
        onMouseEnter={() => setHoveredButton(1)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          variant="outline" 
          className={`w-full md:w-auto font-medium border-2 border-script-accent/50 text-script-accent hover:bg-script-accent/10 transition-all duration-300 text-base md:text-lg transform ${hoveredButton === 1 ? 'scale-105' : ''}`}
        >
          <span className="bg-gradient-to-r from-[#E50914] via-[#1EAEDB] to-[#E50914] bg-size-200 animate-gradient-slow bg-clip-text text-transparent hover:text-script-accent">
            Start Creating Your Movie Scene Visuals
          </span>
        </Button>
      </a>
      <a 
        href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto transition-transform duration-300"
        onMouseEnter={() => setHoveredButton(2)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          variant="outline" 
          className={`w-full md:w-auto font-medium border-2 border-[#1EAEDB]/50 text-[#1EAEDB] hover:bg-[#1EAEDB]/10 transition-all duration-300 text-base md:text-lg transform ${hoveredButton === 2 ? 'scale-105' : ''}`}
        >
          <span className="bg-gradient-to-r from-[#1EAEDB] via-white to-[#1EAEDB] bg-size-200 animate-gradient-slow bg-clip-text text-transparent hover:text-[#1EAEDB]">
            Make Your Movie Trailer Poster
          </span>
        </Button>
      </a>
    </div>
  );
}
