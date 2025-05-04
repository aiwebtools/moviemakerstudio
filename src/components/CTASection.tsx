
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section 
      className="py-20 px-4 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1A1F2C] to-black z-0 transition-all duration-300"
      ></div>
      
      {/* Glow effect that follows cursor */}
      {isHovered && (
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-script-accent/10 blur-[120px] pointer-events-none transition-all duration-300 z-0"
          style={{ 
            left: mousePosition.x - 250, 
            top: mousePosition.y - 250,
            opacity: isHovered ? 0.6 : 0 
          }}
        ></div>
      )}
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-5 z-0"></div>
      
      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/20 text-script-accent rounded-full mb-4">
          Start Creating
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white glow-text">Ready to Create Your Cinematic Masterpiece?</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          From concept to screen, our complete filmmaking suite guides you through every step of creating professional movie content.
        </p>
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3">
          <Link to="/select-version">
            <Button 
              size="lg" 
              className="bg-script-accent hover:bg-script-accent/90 text-white hover:shadow-neon transition-all duration-300 font-medium text-sm sm:text-base"
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
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 font-medium text-sm sm:text-base whitespace-normal md:whitespace-nowrap"
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
              size="lg" 
              variant="outline" 
              className="border-[#1EAEDB]/20 text-[#1EAEDB] hover:bg-[#1EAEDB]/10 font-medium text-sm sm:text-base"
            >
              Make Your Movie Trailer Poster
            </Button>
          </a>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full animate-rotate-slow opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-script-accent/20 rounded-full animate-rotate-slow opacity-30" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </section>
  );
}
