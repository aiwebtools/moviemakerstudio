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
  Trophy,
  Award,
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

// Get today's date formatted
const getTodayDate = () => {
  const today = new Date();
  return today.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

// Top Rated Tools Component
function TopRatedTools() {
  const topTools = [
    {
      name: "SORA 2",
      url: "https://www.sora.com",
      description: "OpenAI's revolutionary video generation model now with integrated sound. Generate cinematic video with synchronized audio in a single generation. Handles Steps 2-5 of your workflow.",
      badge: "OpenAI"
    },
    {
      name: "Google Veo 3 (Flow)",
      url: "https://labs.google/fx/tools/flow",
      description: "Google's next-generation video model with native audio generation. Create stunning visuals with perfectly matched sound effects and dialogue. Covers Steps 2-5 instantly.",
      badge: "Google"
    }
  ];

  return (
    <div className="mb-12 animate-fade-in">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 rounded-full px-4 py-2 mb-4">
          <Trophy className="h-5 w-5 text-yellow-400" />
          <span className="text-yellow-300 font-semibold text-sm">Top Rated Video Generation Platforms</span>
          <Award className="h-5 w-5 text-yellow-400" />
        </div>
        <p className="text-xs text-gray-400">
          Voted #1 as of {getTodayDate()} - These tools generate video AND sound together, completing Steps 2-5 in one go!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topTools.map((tool) => (
          <article key={tool.name} className="group">
            <Card className="h-full bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-orange-500/10 border-2 border-yellow-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent animate-pulse" />
              <CardHeader className="pb-2 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    <Trophy className="h-3 w-3" /> #1 RATED
                  </span>
                  <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">{tool.badge}</span>
                </div>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-yellow-300" style={{ textShadow: '0 0 20px rgba(250, 204, 21, 0.5)' }}>{tool.name}</span>
                </CardTitle>
                <CardDescription className="text-gray-200 mt-2 text-sm leading-relaxed">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 relative">
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">✓ Video Generation</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">✓ Sound Generation</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">✓ All-in-One</span>
                </div>
              </CardContent>
              <CardFooter className="pt-2 relative">
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-bold shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all">
                    Launch {tool.name} →
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </article>
        ))}
      </div>
      <p className="text-center text-xs text-gray-500 mt-4">
        * Only manual editing (Step 5) still required after using these tools
      </p>
    </div>
  );
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

        {/* Top Rated Tools Section */}
        <TopRatedTools />

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
