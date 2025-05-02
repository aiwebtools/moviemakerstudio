
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VersionCard from '@/components/VersionCard';
import StageVersionCard from '@/components/StageVersionCard';
import VersionPageHeader from '@/components/VersionPageHeader';
import { Sparkles, Zap, Theater, Camera, Film } from "lucide-react";

export default function SelectVersion() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-script-bg text-white">
      <Header />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <VersionPageHeader />
          
          <div className="grid md:grid-cols-5 gap-6 mx-auto">
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
            />
            
            {/* StageMaster AI Suite Card */}
            <StageVersionCard
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
