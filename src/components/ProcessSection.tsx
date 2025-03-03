
import { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

  return (
    <section id="process" ref={sectionRef} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/10 text-script-accent rounded-full mb-4">
            Step-by-Step Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Your Script Comes to Life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI follows a proven methodology to create industry-standard scripts, guiding you from initial concept to finished screenplay.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={cn(
                "p-6 border border-gray-100 shadow-sm overflow-hidden relative",
                isVisible ? "animate-fade-up" : "opacity-0"
              )}
              style={{ animationDelay: `${150 * index}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-script-accent/10 flex items-center justify-center text-script-accent font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-script-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute top-0 left-0 h-full w-1 bg-script-accent opacity-20"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
