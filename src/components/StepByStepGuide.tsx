
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, Film, Music, Edit, Share } from "lucide-react";
import { animationTools, soundTools, lipsyncTools, editingTools, gptShortcuts } from "@/data/tools";

const steps = [
  {
    number: "01",
    title: "Write Your Script",
    description: "Start by creating a professional movie script with AI assistance",
    icon: FileText,
    color: "text-script-accent",
    tools: [
      { name: "Movie Script Writer GPT", url: "https://moviescriptwritergpt.lovable.app/select-version", featured: true },
      { name: "Movie Scene Maker GPT", url: "https://moviescenemakergpt.lovable.app/?via=aiwebtools" }
    ]
  },
  {
    number: "02", 
    title: "Create Video Scenes",
    description: "Generate video scenes from your script using AI video generation tools",
    icon: Film,
    color: "text-blue-400",
    tools: animationTools.slice(0, 4) // Top 4 animation tools
  },
  {
    number: "03",
    title: "Add Sound & Music", 
    description: "Create background music, sound effects, and voiceovers for your scenes",
    icon: Music,
    color: "text-purple-400",
    tools: soundTools
  },
  {
    number: "04",
    title: "Sync Lips & Voice",
    description: "Synchronize character lip movements with dialogue using lip-sync tools",
    icon: Share,
    color: "text-green-400", 
    tools: lipsyncTools
  },
  {
    number: "05",
    title: "Edit & Finalize",
    description: "Combine all elements and edit your final movie with professional tools",
    icon: Edit,
    color: "text-yellow-400",
    tools: editingTools
  }
];

export default function StepByStepGuide() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-bold rounded-full mb-6 bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-400 bg-size-200 animate-gradient-x text-black">
            ✨ Complete Step-by-Step Process ✨
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-display">
            From Script to Screen in 5 Steps
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Follow this proven methodology to create your complete movie using AI tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            
            return (
              <Card 
                key={index}
                className={cn(
                  "p-6 border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 cursor-pointer",
                  isActive ? "bg-black/60 border-white/20 transform scale-105" : "hover:bg-black/50 hover:border-white/15"
                )}
                onClick={() => setActiveStep(isActive ? null : index)}
              >
                <div className="text-center">
                  <div className={cn(
                    "w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg transition-all duration-300",
                    step.color.replace('text-', 'bg-') + '/20'
                  )}>
                    <Icon className={cn("w-6 h-6", step.color)} />
                  </div>
                  
                  <div className={cn(
                    "text-xs font-bold mb-2 transition-all duration-300",
                    step.color
                  )}>
                    STEP {step.number}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {step.description}
                  </p>

                  {isActive && (
                    <div className="space-y-2 animate-fade-in">
                      {step.tools.map((tool, toolIndex) => (
                        <a
                          key={toolIndex}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className={cn(
                              "w-full text-xs border transition-all duration-300",
                              tool.featured 
                                ? "border-script-accent/50 text-script-accent hover:bg-script-accent/10" 
                                : "border-white/20 text-white hover:bg-white/10"
                            )}
                          >
                            {tool.name.includes('⭐') ? tool.name : tool.name}
                          </Button>
                        </a>
                      ))}
                    </div>
                  )}
                  
                  {!isActive && (
                    <div className="text-xs text-gray-500">
                      Click to see tools →
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need more advanced tools? Check out our complete toolkit
          </p>
          <a href="#process" className="inline-block">
            <Button variant="outline" className="border-gold-400/50 text-gold-400 hover:bg-gold-400/10">
              View Detailed Process
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
