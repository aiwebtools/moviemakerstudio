
import { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: "Complete Script Creation",
    description: "Develop a full movie script with proper formatting, character arcs, plot development, and industry-standard structure."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <path d="M12 11h4"/>
        <path d="M12 16h4"/>
        <path d="M8 11h.01"/>
        <path d="M8 16h.01"/>
      </svg>
    ),
    title: "Detailed Scene Planning",
    description: "Organize your movie into acts and scenes with detailed breakdowns for each segment, creating a coherent and engaging narrative."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" x2="9.01" y1="9" y2="9"/>
        <line x1="15" x2="15.01" y1="9" y2="9"/>
      </svg>
    ),
    title: "Character Development",
    description: "Create rich, multidimensional characters with detailed backstories, motivations, and emotional arcs that evolve throughout the script."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      </svg>
    ),
    title: "Industry Standard Formatting",
    description: "Generate scripts that adhere to Hollywood formatting standards, including proper scene headings, dialogue, action lines, and transitions."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    title: "Document Export",
    description: "Export your completed screenplay to Word documents after each scene, making it easy to review, edit, and share your work."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: "Guided Process",
    description: "Follow a structured, step-by-step approach to script creation that ensures no important element is overlooked or forgotten."
  }
];

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToFeatures = () => {
    const featuresHeading = document.getElementById('features-heading');
    if (featuresHeading) {
      featuresHeading.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" ref={sectionRef} className="py-20 px-4 bg-script-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(229,9,20,0.1),_transparent_800px)] opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-paper-texture opacity-5 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        {/* CTA Section moved here from HeroSection */}
        <div className="w-full max-w-3xl mx-auto mb-24 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/20 text-script-accent rounded-full mb-4">
            Start Creating
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white glow-text">Ready to Write Your Masterpiece?</h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            From concept to final draft, our AI assistant guides you through every step of creating an industry-standard, award-worthy screenplay.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/select-version">
              <Button 
                size="lg" 
                className="bg-script-accent hover:bg-script-accent/90 text-white hover:shadow-neon transition-all duration-300 font-medium"
              >
                Start Writing Now
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 font-medium"
              onClick={scrollToFeatures}
            >
              See How It Works
            </Button>
          </div>
        </div>

        <div className="text-center mb-16" id="features-heading">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/20 text-script-accent rounded-full mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Everything You Need to Write Your Masterpiece</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI assistant guides you through the entire scriptwriting process, from concept to final draft, with industry-standard formatting and expert creative guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={cn(
                "p-6 border border-white/5 shadow-md overflow-hidden interactive-card relative",
                isVisible ? "animate-fade-up" : "opacity-0",
                hoverIndex === index ? "bg-script-highlight/70" : "glass-card"
              )}
              style={{ animationDelay: `${100 * index}ms` }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="h-12 w-12 rounded-lg bg-script-accent/20 flex items-center justify-center text-script-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              {hoverIndex === index && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-script-accent rounded-full animate-pulse-glow"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
