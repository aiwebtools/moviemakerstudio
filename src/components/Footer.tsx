
import { Clapperboard } from "lucide-react";
import AnimationSoundTools from "@/components/header/AnimationSoundTools";
import { animationTools, soundTools, lipsyncTools, editingTools } from "@/data/tools";

export default function Footer() {
  return <footer className="bg-script-paper border-t border-white/10 py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <Clapperboard className="h-5 w-5 text-script-accent mr-2" />
                <span className="text-lg sm:text-xl font-bold font-display tracking-tight group">
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
            </div>
            <p className="text-xs sm:text-sm text-script-muted mt-2 max-w-md">
              The ultimate all-in-one AI suite for creating professional movie content from concept to final production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="sm:col-span-1">
              <h3 className="font-semibold mb-2 md:mb-3 text-white text-sm sm:text-base">Production AI Tools</h3>
              <ul className="space-y-2">
                <li><a href="https://chatgpt.com/g/g-35psQsJil-movie-script-writer-gpt-original-version-1" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">Movie Script Writer GPT Version 1</a></li>
                <li><a href="https://chatgpt.com/g/g-ZoZ12NUed-movie-script-writer-gpt" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">Movie Script Writer Version 2</a></li>
                <li><a href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">Movie Scene Maker GPT</a></li>
                <li><a href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">Movie Trailer Poster Maker</a></li>
                <li><a href="https://screenplaywritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">ScreenPlay Writer GPT</a></li>
                <li><a href="https://bookwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">Book Writer GPT</a></li>
                <li>
                  <a 
                    href="https://stagemasterai.lovable.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors flex items-center"
                  >
                    <span className="mr-1">🎭</span> StageMaster AI Suite
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.aiwebtools.ai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center mt-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-script-accent text-white rounded-md text-xs font-medium hover:bg-script-accent/90 transition-colors"
                  >
                    MORE AI TOOLS
                  </a>
                </li>
              </ul>
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
                <h3 className="font-semibold mb-2 md:mb-3 text-white text-sm sm:text-base">Production Tools</h3>
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
