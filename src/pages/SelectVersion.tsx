
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VersionCard from '@/components/VersionCard';
import StageVersionCard from '@/components/StageVersionCard';
import VersionPageHeader from '@/components/VersionPageHeader';
import { Sparkles, Zap, Theater, Camera, Film, Music } from "lucide-react";

export default function SelectVersion() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-script-bg text-white">
      <Header />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <VersionPageHeader />
          
          {/* Modified grid layout with better desktop sizing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto">
            {/* Version 1 Card */}
            <VersionCard
              title="Movie Script Writer Version 1"
              description="The classic experience with all the essential features to create professional screenplays. Export to DOCX available upon request."
              features={[
                "Advanced narrative techniques",
                "Complex character arcs",
                "Enhanced dialogue writing",
                "Manual DOCX export (upon request)"
              ]}
              link="https://chatgpt.com/g/g-35psQsJil-movie-script-writer-gpt-original-version-1"
              badgeText="Original"
              BadgeIcon={Sparkles}
              buttonText="Select Movie Script Writer Version 1"
              buttonColor="bg-purple-600 hover:bg-purple-700"
              buttonShadow="shadow-[0_0_10px_#8b5cf6,0_0_20px_#8b5cf6]"
            />
            
            {/* Version 2 Card */}
            <VersionCard
              title="Movie Script Writer Version 2"
              description="Same great screenplay writing capabilities as Version 1, but with automatic DOCX export functionality built-in."
              features={[
                "Advanced narrative techniques",
                "Complex character arcs",
                "Enhanced dialogue writing",
                "Automatic DOCX export"
              ]}
              link="https://chatgpt.com/g/g-ZoZ12NUed-movie-script-writer-gpt"
              badgeText="Enhanced"
              BadgeIcon={Zap}
              buttonText="Select Movie Script Writer Version 2"
              buttonColor="bg-blue-600 hover:bg-blue-700"
              buttonShadow="shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6]"
            />
            
            {/* Movie Scene Maker GPT Card */}
            <VersionCard
              title="Movie Scene Maker"
              description="Become the star in your own Hollywood productions with GPT-4o powered image generation. Upload your picture and create customized movie scenes."
              features={[
                "Personal scene generation",
                "Use your own scripts",
                "AI image generation",
                "Customizable scenarios"
              ]}
              link="https://moviescenemakergpt.lovable.app/?via=aiwebtools"
              badgeText="Star"
              BadgeIcon={Camera}
              buttonText="Use Movie Scene Maker"
              buttonColor="bg-green-600 hover:bg-green-700"
              buttonShadow="shadow-[0_0_10px_#22c55e,0_0_20px_#22c55e]"
            />
            
            {/* Movie Trailer Poster Maker Card */}
            <VersionCard
              title="Movie Trailer Poster Maker"
              description="Create eye-catching movie trailers and posters with GPT-4o powered image generation. Turn your script into professional marketing materials."
              features={[
                "AI poster generation",
                "Trailer concept design",
                "Marketing copy creation",
                "Professional visual styles"
              ]}
              link="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt"
              badgeText="Visual"
              BadgeIcon={Film}
              buttonText="Use Movie Trailer Poster Maker"
              buttonColor="bg-amber-600 hover:bg-amber-700"
              buttonShadow="shadow-[0_0_10px_#d97706,0_0_20px_#d97706]"
            />
            
            {/* Music Video Maker GPT Card - NEW */}
            <VersionCard
              title="Music Video Maker GPT"
              description="Create captivating music videos with AI-powered visual generation and music synchronization. Turn your song into a professional music video."
              features={[
                "Music video concept creation",
                "Visual style development",
                "Scene planning & storyboarding",
                "Music & visuals synchronization"
              ]}
              link="https://musicvideomakergpt.lovable.app/?via=aiwebtools"
              badgeText="Music"
              BadgeIcon={Music}
              buttonText="Use Music Video Maker GPT"
              buttonColor="bg-indigo-600 hover:bg-indigo-700"
              buttonShadow="shadow-[0_0_10px_#4f46e5,0_0_20px_#4f46e5]"
            />
            
            {/* StageMaster AI Suite Card */}
            <VersionCard
              title="StageMaster AI"
              description="Complete AI Creative Suite designed specifically for theater, stage production, and performing arts. From set design to choreography."
              features={[
                "Theater & Stage Set Design",
                "Costume Design for Stage",
                "Choreography Planning",
                "Stage Lighting & Production"
              ]}
              link="https://stagemasterai.lovable.app/"
              badgeText="Performing Arts"
              BadgeIcon={Theater}
              buttonColor="bg-fuchsia-600 hover:bg-fuchsia-700"
              buttonShadow="shadow-[0_0_10px_#c026d3,0_0_20px_#c026d3]"
              buttonText="Explore StageMaster for Performing Arts"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full animate-rotate-slow opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 border border-script-accent/20 rounded-full animate-rotate-slow opacity-30" style={{
            animationDirection: 'reverse'
          }}></div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
