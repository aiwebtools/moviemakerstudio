import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Film,
  Music,
  Headphones,
  Scissors,
  Clapperboard,
  Wand2,
} from "lucide-react";
import {
  gptShortcuts,
  animationTools,
  lipsyncTools,
  soundTools,
  editingTools,
  Tool,
} from "@/data/tools";

// Helpers
const stepBadge = (label: string, color: string) => (
  <span className={cn(
    "inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold mr-2",
    color
  )}>
    {label}
  </span>
);

function getIconForCategory(category: string) {
  switch (category) {
    case "gpt":
      return <Sparkles className="h-4 w-4 text-yellow-300" />;
    case "animation":
      return <Film className="h-4 w-4" />;
    case "lipsync":
      return <Headphones className="h-4 w-4" />;
    case "sound":
      return <Music className="h-4 w-4" />;
    case "editing":
      return <Scissors className="h-4 w-4" />;
    default:
      return <Clapperboard className="h-4 w-4" />;
  }
}

function getDescription(name: string, category: "gpt"|"animation"|"lipsync"|"sound"|"editing"): string {
  // Specific overrides
  const map: Record<string, string> = {
    "Movie Script Writer GPT": "Outline, draft, and refine screenplays with GPT-5 assisted structure and style.",
    "Movie Scene Maker GPT": "Generate shot-by-shot scenes with camera directions and dialogue using GPT-5.",
    "Movie Trailer Poster GPT": "Design striking poster concepts and taglines powered by GPT-5.",
    "Music Video Maker GPT": "Storyboard music videos with beats, transitions, and visual motifs with GPT-5.",
    "Commercial Scene Maker GPT": "Craft persuasive commercial scripts and scenes optimized for conversions.",
    "ScreenPlay Writer GPT": "Write professional screenplays with formatting and character arcs built in.",
    "StageMaster AI Suite": "All-in-one toolkit for performing arts: scripts, staging, cues, and more.",
    "⭐ VEO 3 PROMPT Generator": "Expert prompt builder to get the best results from Google Veo/Flow models.",

    SORA: "OpenAI's video generation for cinematic shots and dynamic motion.",
    KLING: "High-fidelity text-to-video with sharp detail and smooth movement.",
    HAILUO: "Fast AI video creation for social-ready clips and stories.",
    Higgsfield: "Advanced generative video with strong subject consistency.",
    RunwayML: "End-to-end AI video creation, edit, and effects platform.",
    "PIKA LABS": "Quick, creative AI video generations ideal for ideation.",
    "Luma Labs": "Dream Machine for photoreal video and 3D-aware motion.",
    "Google Veo 2": "Google’s video model for dynamic, coherent scene generation.",
    "⭐ Google Flow (Veo 3) - PICTURE AND SOUND!": "Next-gen Veo/Flow model with synchronized visuals and audio.",
    "FREEPIK - ALL MODELS IN ONE PLATFORM": "One platform to access many AI models for video, images, and more.",

    Hedra: "Create realistic lipsync and face animation from audio.",
    "VEO FLOW": "Leverage Google Flow for expressive, precise lipsync.",

    "SUNO Music Generator": "Compose full songs, vocals included, from simple prompts.",
    UDIO: "Generate radio-ready tracks and stems with AI.",
    "Eleven Labs Voice & Sound Generator": "Premium AI voices, dubbing, and sound effects.",
    "FLEXCLIP - Add Sound Effects To Video": "Quickly add AI-generated SFX to any video clip.",

    Filmora: "Beginner-friendly editor with powerful AI effects.",
    Videoleap: "Mobile-first editing with intuitive controls and templates.",
    CapCut: "Fast, social-ready edits with trending effects built in.",
  };

  if (map[name]) return map[name];

  // Category defaults
  const defaults: Record<typeof category, string> = {
    gpt: "GPT-5 powered assistant to plan, write, and structure your production.",
    animation: "Turn prompts or images into cinematic video with AI.",
    lipsync: "Animate faces and match speech with accurate lipsync.",
    sound: "Generate music, voices, and SFX for your scenes.",
    editing: "Edit, refine, and export your final cut.",
  };
  return defaults[category];
}

type Section = {
  step: number;
  title: string;
  subtitle: string;
  badgeClass: string; // semantic classes only
  category: "gpt"|"animation"|"lipsync"|"sound"|"editing";
  tools: Tool[];
};

const sections: Section[] = [
  {
    step: 1,
    title: "GPT Shortcuts",
    subtitle: "Plan, write, and visualize your story",
    badgeClass: "bg-yellow-400 text-black",
    category: "gpt",
    tools: gptShortcuts,
  },
  {
    step: 2,
    title: "Animate Your Scenes - Video Generation Tools",
    subtitle: "Create cinematic video from text or images",
    badgeClass: "bg-amber-400 text-black",
    category: "animation",
    tools: animationTools,
  },
  {
    step: 3,
    title: "Lipsync",
    subtitle: "Match dialogue with believable mouth movement",
    badgeClass: "bg-cyan-400 text-black",
    category: "lipsync",
    tools: lipsyncTools,
  },
  {
    step: 4,
    title: "Music & FX Generation",
    subtitle: "Score your film and add immersive sound",
    badgeClass: "bg-green-400 text-black",
    category: "sound",
    tools: soundTools,
  },
  {
    step: 5,
    title: "Editing Tools",
    subtitle: "Cut, color, and deliver your story",
    badgeClass: "bg-purple-400 text-black",
    category: "editing",
    tools: editingTools,
  },
];

export default function ToolsShowcase() {
  return (
    <section aria-label="AI Tools Showcase" className="py-10 md:py-16 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-4">
        <header className="mb-6 md:mb-10 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 animate-fade-in">Explore the toolkit</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-1 animate-fade-in">Production-Ready AI Tools</h2>
          <p className="text-sm text-script-muted mt-2 max-w-2xl mx-auto animate-fade-in">
            Every tool you need, organized by workflow steps. Tap a card to learn more and launch.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, sIdx) => (
            <section key={section.title} className="animate-fade-in" style={{ animationDelay: `${sIdx * 50}ms` }}>
              <div className="flex items-center mb-4">
                {stepBadge(`STEP ${section.step}`, section.badgeClass)}
                <div className="flex items-center gap-2 text-white">
                  {getIconForCategory(section.category)}
                  <h3 className="text-lg md:text-xl font-semibold">{section.title}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">{section.subtitle}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {section.tools.map((tool, idx) => (
                  <article key={`${section.category}-${tool.name}`} className="group">
                    <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-neon hover:-translate-y-0.5">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white text-base md:text-lg flex items-center gap-2">
                            {getIconForCategory(section.category)}
                            <span>{tool.name}</span>
                          </CardTitle>
                          <Wand2 className="h-4 w-4 text-script-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <CardDescription className="text-gray-300 mt-1">
                          {getDescription(tool.name, section.category)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="h-1 w-full bg-gradient-to-r from-script-accent/40 to-transparent rounded-full" />
                      </CardContent>
                      <CardFooter className="pt-2">
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button variant="default" className="w-full hover:shadow-glow transition-all">
                            Open {tool.name.includes("GPT") ? "GPT" : "Tool"}
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
