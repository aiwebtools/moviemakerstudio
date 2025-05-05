
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeroButtonsProps {
  loaded: boolean;
  isMobile: boolean;
}

export const HeroButtons = ({ loaded, isMobile }: HeroButtonsProps) => {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  
  return (
    <div className={`flex flex-row flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 transition-all delay-200 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <a 
        href="https://moviescriptwritergpt.lovable.app/select-version" 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-transform duration-300"
        onMouseEnter={() => setHoveredButton(0)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          className={`font-medium bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300 text-sm sm:text-base transform ${hoveredButton === 0 ? 'scale-110 button-glow' : ''}`}
        >
          <span className="rainbow-text">
            Write Your Movie Script Now
          </span>
        </Button>
      </a>
      <a 
        href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-transform duration-300"
        onMouseEnter={() => setHoveredButton(1)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          variant="outline" 
          className={`font-medium border-script-accent/50 hover:bg-script-accent/10 transition-all duration-300 text-sm sm:text-base whitespace-normal md:whitespace-nowrap transform ${hoveredButton === 1 ? 'scale-110 button-glow animate-border-gradient' : ''}`}
        >
          <span className="rainbow-text">
            Start Creating Your Movie Scene Visuals Click Here
          </span>
        </Button>
      </a>
      <a 
        href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300"
        onMouseEnter={() => setHoveredButton(2)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          variant="outline" 
          className={`font-medium border-[#1EAEDB]/50 hover:bg-[#1EAEDB]/10 transition-all duration-300 text-sm sm:text-base transform ${hoveredButton === 2 ? 'scale-110 button-glow animate-border-gradient' : ''}`}
        >
          <span className="rainbow-text">
            Make Your Movie Trailer Poster
          </span>
        </Button>
      </a>
    </div>
  );
}
