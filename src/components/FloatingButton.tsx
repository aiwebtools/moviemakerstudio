
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <a 
      href="https://www.aiwebtools.ai" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 animate-fade-in"
    >
      <Button 
        className="bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105 group px-4 py-2 rounded-xl min-w-0 whitespace-nowrap"
      >
        <span className="text-sm font-medium">MORE AI WEB TOOLS</span>
        <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
      </Button>
    </a>
  );
}
