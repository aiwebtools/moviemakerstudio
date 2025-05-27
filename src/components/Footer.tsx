
import { Clapperboard, Film, BookText, PenTool, Video, Sparkles, Music, Image, Headphones, Scissors } from "lucide-react";
import AnimationSoundTools from "@/components/header/AnimationSoundTools";
import { animationTools, soundTools, lipsyncTools, editingTools } from "@/data/tools";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return <footer className="bg-script-paper border-t border-white/10 py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Shrinking the logo section */}
          <div className="mb-6 md:mb-0 max-w-[250px]">
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <Clapperboard className="h-6 w-6 md:h-8 md:w-8 text-script-accent mr-2" />
                <span className="text-base font-bold font-display tracking-tight group">
                  MOVIE Maker <span className="text-script-accent group-hover:animate-pulse-glow">Studio</span>
                </span>
              </div>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-script-accent transition-colors"
              >
                Presented by AiWebTools.Ai
              </a>
              <p className="text-xs text-gray-500 mt-1 italic">
                "Your Launch Pad to the Tools That Power Your Story."
              </p>
            </div>
            <p className="text-xs text-script-muted mt-2 max-w-md">
              The ultimate all-in-one AI suite for creating professional movie content from concept to final production.
            </p>
          </div>
          
          {/* Enlarging the buttons section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 flex-1 w-full md:pl-6">
            <div className="sm:col-span-1">
              <h3 className="font-semibold mb-3 md:mb-4 text-white text-sm sm:text-base flex items-center">
                <Sparkles className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="flex items-center">
                  <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-xs font-bold mr-2">STEP 1</span>
                  Production AI Tools
                </span>
              </h3>
              <div className="space-y-3 mt-4">
                <a href="https://chatgpt.com/g/g-35psQsJil-movie-script-writer-gpt-original-version-1" target="_blank" rel="noopener noreferrer" 
                   className="block">
                  <Button variant="outline" className="w-full h-auto py-2 justify-start bg-gradient-to-r from-script-accent/10 to-transparent hover:from-script-accent/20 border-script-accent/30 hover:border-script-accent transition-all duration-300 group">
                    <Film className="mr-2 h-4 w-4 text-script-accent shrink-0 group-hover:animate-pulse-subtle" />
                    <span>Movie Script Writer GPT v1</span>
                  </Button>
                </a>
                
                <a href="https://chatgpt.com/g/g-ZoZ12NUed-movie-script-writer-gpt" target="_blank" rel="noopener noreferrer" 
                   className="block">
                  <Button variant="outline" className="w-full h-auto py-2 justify-start bg-gradient-to-r from-script-accent/10 to-transparent hover:from-script-accent/20 border-script-accent/30 hover:border-script-accent transition-all duration-300 group">
                    <Film className="mr-2 h-4 w-4 text-script-accent shrink-0 group-hover:animate-pulse-subtle" />
                    <span>Movie Script Writer GPT v2</span>
                  </Button>
                </a>
                
                <a href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" 
                   className="block">
                  <Button variant="outline" className="w-full h-auto py-2 justify-start bg-gradient-to-r from-script-accent/10 to-transparent hover:from-script-accent/20 border-script-accent/30 hover:border-script-accent transition-all duration-300 group">
                    <Video className="mr-2 h-4 w-4 text-script-accent shrink-0 group-hover:animate-pulse-subtle" />
                    <span>Movie Scene Maker GPT</span>
                  </Button>
                </a>
                
                <a href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" target="_blank" rel="noopener noreferrer" 
                   className="block">
                  <Button variant="outline" className="w-full h-auto py-2 justify-start bg-gradient-to-r from-script-accent/10 to-transparent hover:from-script-accent/20 border-script-accent/30 hover:border-script-accent transition-all duration-300 group">
                    <Image className="mr-2 h-4 w-4 text-script-accent shrink-0 group-hover:animate-pulse-subtle" />
                    <span>Movie Trailer Poster Maker</span>
                  </Button>
                </a>
                
                <a href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" 
                   className="block">
                  <Button variant="outline" className="w-full h-auto py-2 justify-start bg-gradient-to-r from-script-accent/10 to-transparent hover:from-script-accent/20 border-script-accent/30 hover:border-script-accent transition-all duration-300 group">
                    <Music className="mr-2 h-4 w-4 text-script-accent shrink-0 group-hover:animate-pulse-subtle" />
                    <span>Music Video Maker GPT</span>
                  </Button>
                </a>
                
                <a href="https://chatgpt.com/g/g-681a201fe69c8191b99e1636be90139e-commercial-scene-maker-gpt" target="_blank" rel="noopener noreferrer" 
                   className="block">
                  <Button variant="outline" className="w-full h-auto py-2 justify-start bg-gradient-to-r from-script-accent/10 to-transparent hover:from-script-accent/20 border-script-accent/30 hover:border-script-accent transition-all duration-300 group">
                    <BookText className="mr-2 h-4 w-4 text-script-accent shrink-0 group-hover:animate-pulse-subtle" />
                    <span>Commercial Scene Maker GPT</span>
                  </Button>
                </a>
                
                <a href="https://screenplaywritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" 
                   className="block">
                  <Button variant="outline" className="w-full h-auto py-2 justify-start bg-gradient-to-r from-script-accent/10 to-transparent hover:from-script-accent/20 border-script-accent/30 hover:border-script-accent transition-all duration-300 group">
                    <BookText className="mr-2 h-4 w-4 text-script-accent shrink-0 group-hover:animate-pulse-subtle" />
                    <span>ScreenPlay Writer GPT</span>
                  </Button>
                </a>
                
                <a href="https://stagemasterai.lovable.app/" target="_blank" rel="noopener noreferrer" 
                   className="block">
                  <Button variant="outline" className="w-full h-auto py-2 px-3 justify-start bg-gradient-to-r from-purple-500/20 to-transparent hover:from-purple-500/30 border-purple-500/30 hover:border-purple-500 transition-all duration-300 group">
                    <span className="mr-2 shrink-0">🎭</span>
                    <span className="text-xs sm:text-sm whitespace-normal">StageMaster AI Suite for the Performing Arts</span>
                  </Button>
                </a>
                
                <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" 
                   className="block mt-3">
                  <Button className="w-full justify-center bg-script-accent hover:bg-script-accent/90 shadow-glow hover:shadow-neon transition-all duration-300">
                    MORE AI TOOLS
                  </Button>
                </a>
              </div>
            </div>
            <div className="sm:col-span-1">
              <div>
                <h3 className="font-semibold mb-2 md:mb-3 text-white text-sm sm:text-base">Company</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">About Us</a></li>
                  <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">Privacy</a></li>
                  <li><a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">Terms</a></li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2 md:mb-3 text-white text-sm sm:text-base flex items-center">
                  <Film className="h-4 w-4 mr-2 text-amber-400" />
                  <span className="flex items-center">
                    <span className="bg-amber-400 text-black px-2 py-0.5 rounded text-xs font-bold mr-2">STEP 2</span>
                    Production Tools
                  </span>
                </h3>
                <div className="mt-2">
                  <AnimationSoundTools 
                    animationTools={animationTools}
                    soundTools={soundTools}
                    lipsyncTools={lipsyncTools}
                    editingTools={editingTools}
                    isMobile={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-400">© 2025 AI WEB TOOLS LLC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="https://www.instagram.com/aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-script-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@aiwebtools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-script-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
