
import { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const examples = [
  {
    id: "action",
    title: "Action",
    slug: "THE LAST STAND",
    description: "A retired special forces operative is forced back into action when a dangerous criminal takes over a small border town.",
    content: (
      <div className="script-page text-left">
        <div className="scene-heading">EXT. DESERT HIGHWAY - DAY</div>
        <div className="action-text">A lone SUV tears down the empty highway, kicking up dust in its wake. The sun beats down mercilessly on the barren landscape.</div>
        <div className="action-text">Inside, MARCUS WALKER (45, weathered, alert eyes) grips the wheel. His knuckles are scarred, his expression grim.</div>
        <div className="character-name">MARCUS</div>
        <div className="dialogue">Should've stayed retired.</div>
        <div className="action-text">Through the windshield, a small town appears on the horizon. A weathered sign reads: "WELCOME TO BORDERLINE - POP. 1,256"</div>
        <div className="action-text">Marcus checks his watch, then reaches for the gun in his holster, making sure it's secure.</div>
        <div className="transition">CUT TO:</div>
      </div>
    )
  },
  {
    id: "drama",
    title: "Drama", 
    slug: "ECHOES OF YESTERDAY",
    description: "A celebrated pianist returns to her childhood home to confront the family secrets that have haunted her for decades.",
    content: (
      <div className="script-page text-left">
        <div className="scene-heading">INT. CONCERT HALL - NIGHT</div>
        <div className="action-text">ELEANOR CHEN (40s, elegant, intense) sits at a grand piano under spotlight. The audience is silent, captivated. Her fingers hover above the keys for a moment, trembling slightly.</div>
        <div className="action-text">She closes her eyes and begins to play Chopin's Nocturne No. 20. The music swells, filling the hall.</div>
        <div className="action-text">FLASH IMAGES: A young girl at a piano. A stern mother watching. A house on fire. A music box spinning.</div>
        <div className="action-text">Eleanor's playing grows more intense, almost desperate. A single tear rolls down her cheek.</div>
        <div className="character-name">ELEANOR (V.O.)</div>
        <div className="dialogue">Some melodies never leave you. They echo through time, refusing to be silenced.</div>
        <div className="transition">DISSOLVE TO:</div>
      </div>
    )
  },
  {
    id: "comedy",
    title: "Comedy",
    slug: "STARTUP SHENANIGANS",
    description: "Three unlikely friends launch a tech startup with a bizarre app idea that unexpectedly becomes the next big thing.",
    content: (
      <div className="script-page text-left">
        <div className="scene-heading">INT. ZACH'S GARAGE - NIGHT</div>
        <div className="action-text">ZACH (28, disheveled, caffeinated), DEVON (25, meticulous, anxious), and RILEY (30, confident, always eating) huddle around a whiteboard filled with terrible app ideas. Empty pizza boxes and energy drinks litter the table.</div>
        <div className="character-name">ZACH</div>
        <div className="dialogue">What about an app that translates your dog's barks?</div>
        <div className="character-name">DEVON</div>
        <div className="dialogue">That's scientifically impossible, and we have no AI expertise, and--</div>
        <div className="character-name">RILEY</div>
        <div className="dialogue">(mouth full of chips) People would download the hell out of that.</div>
        <div className="action-text">Devon sighs dramatically and writes "BarkChat" on the board under "IDEAS THAT WILL BANKRUPT US."</div>
        <div className="transition">SMASH CUT TO:</div>
      </div>
    )
  }
];

export default function ExampleSection() {
  const [activeTab, setActiveTab] = useState("action");
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
    <section id="examples" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/10 text-script-accent rounded-full mb-4">
            Script Examples
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See What You Can Create</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse samples of scripts created with our AI assistant across different genres.
          </p>
        </div>

        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Tabs defaultValue="action" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {examples.map((example) => (
                <TabsTrigger key={example.id} value={example.id}>{example.title}</TabsTrigger>
              ))}
            </TabsList>
            
            {examples.map((example) => (
              <TabsContent key={example.id} value={example.id} className="mt-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{example.slug}</h3>
                  <p className="text-muted-foreground">{example.description}</p>
                </div>
                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                  {example.content}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
