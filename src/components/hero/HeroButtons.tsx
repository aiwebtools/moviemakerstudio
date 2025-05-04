
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroButtonsProps {
  loaded: boolean;
  isMobile: boolean;
}

export const HeroButtons = ({ loaded, isMobile }: HeroButtonsProps) => {
  return (
    <div className={`flex flex-row flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 transition-all delay-200 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Link to="/select-version">
        <Button 
          size={isMobile ? "default" : "lg"} 
          className="font-medium bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300 text-sm sm:text-base"
        >
          Write Your Movie Script Now
        </Button>
      </Link>
      <a 
        href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          variant="outline" 
          className="font-medium border-script-accent/50 text-script-accent hover:bg-script-accent/10 transition-all duration-300 text-sm sm:text-base whitespace-normal md:whitespace-nowrap"
        >
          Start Creating Your Movie Scene Visuals Click Here
        </Button>
      </a>
      <a 
        href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          variant="outline" 
          className="font-medium border-[#1EAEDB]/50 text-[#1EAEDB] hover:bg-[#1EAEDB]/10 transition-all duration-300 text-sm sm:text-base"
        >
          Make Your Movie Trailer Poster
        </Button>
      </a>
    </div>
  );
}
