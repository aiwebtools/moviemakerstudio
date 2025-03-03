
import { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Define Your Script Structure",
    description: "Start by specifying the number of acts and scenes for your movie. This foundational step shapes the overall structure of your screenplay.",
    details: ["Set the number of acts (typically 3)", "Define how many scenes per act", "Establish your movie's genre and tone"]
  },
  {
    number: "02",
    title: "Create Scene Titles & Outlines",
    description: "Develop compelling titles and detailed outlines for each scene to create a roadmap for your screenplay's narrative journey.",
    details: ["Generate descriptive scene titles", "Plan character appearances and interactions", "Outline key plot points and revelations"]
  },
  {
    number: "03", 
    title: "Develop Characters & Plot",
    description: "Build rich character profiles and a compelling plot that weaves together your scenes into a cohesive and engaging story.",
    details: ["Create detailed character backstories", "Establish motivations and conflicts", "Design character arcs across the full script"]
  },
  {
    number: "04",
    title: "Write Scene by Scene",
    description: "Compose each scene segment with meticulous attention to detail, including dialogue, action descriptions, and emotional undertones.",
    details: ["Write professional scene headings", "Craft natural, purposeful dialogue", "Include detailed action descriptions", "Add proper transitions between scenes"]
  },
  {
    number: "05",
    title: "Export & Review",
    description: "Save your work after completing each scene segment, allowing for continuous review and refinement throughout the writing process.",
    details: ["Export completed scenes to Word documents", "Review and provide feedback", "Make adjustments before proceeding", "Maintain momentum with structured workflow"]
  }
];

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const handleCardHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleCardLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section 
      id="process" 
      ref={sectionRef} 
      className="py-20 px-4 bg-script-paper relative overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/20 text-script-accent rounded-full mb-4 animate-pulse-subtle">
            Step-by-Step Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How Your Script Comes to Life</h2>
          <p className="text-script-muted max-w-2xl mx-auto">
            Our AI follows a proven methodology to create industry-standard scripts, guiding you from initial concept to finished screenplay.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={cn(
                "p-6 border border-white/5 shadow-md overflow-hidden relative transition-all duration-300",
                isVisible ? "animate-fade-up" : "opacity-0",
                activeIndex === index 
                  ? "bg-script-highlight/70 shadow-[0_0_15px_rgba(229,9,20,0.2)] border-script-accent/20 transform -translate-y-1" 
                  : "bg-black/30 backdrop-blur-sm hover:bg-script-highlight/50 hover:-translate-y-1"
              )}
              style={{ 
                animationDelay: `${150 * index}ms`,
              }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={cn(
                    "h-14 w-14 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300",
                    activeIndex === index 
                      ? "bg-script-accent shadow-[0_0_15px_rgba(229,9,20,0.7)]" 
                      : "bg-script-accent/20"
                  )}>
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white flex items-center">
                    {step.title}
                    {activeIndex === index && (
                      <span className="ml-2 text-script-accent">→</span>
                    )}
                  </h3>
                  <p className="text-script-muted mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start group">
                        <svg 
                          className={cn(
                            "h-5 w-5 mr-2 mt-0.5 transition-all duration-300",
                            activeIndex === index ? "text-script-accent" : "text-script-accent/70"
                          )} 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                        <span className={cn(
                          "text-sm transition-all duration-300",
                          activeIndex === index ? "text-white" : "text-gray-300 group-hover:text-white"
                        )}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {activeIndex === index && (
                    <div className="mt-4 animate-fade-in">
                      <Link to="/select-version">
                        <Button variant="ghost" className="text-script-accent hover:text-script-accent hover:bg-script-accent/10 border border-script-accent/20">
                          Learn more
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div 
                className={cn(
                  "absolute top-0 left-0 h-full w-1 transition-all duration-500",
                  activeIndex === index 
                    ? "bg-script-accent shadow-[0_0_10px_rgba(229,9,20,0.7)]" 
                    : "bg-script-accent/20"
                )}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
