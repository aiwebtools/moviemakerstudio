import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Sparkles, Zap } from "lucide-react";
export default function SelectVersion() {
  const [hoveredVersion, setHoveredVersion] = useState<number | null>(null);
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-script-bg text-white">
      <Header />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 glow-text">Choose Your Movie Script Writing Experience</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Select the version of Movie Script Writer GPT that best fits your creative needs and start crafting your award-winning screenplay today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Version 1 Card */}
            <div className={`glass-panel p-8 rounded-xl transition-all duration-300 relative overflow-hidden ${hoveredVersion === 1 ? "transform scale-[1.02] shadow-neon border-script-accent/50" : ""}`} onMouseEnter={() => setHoveredVersion(1)} onMouseLeave={() => setHoveredVersion(null)}>
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-script-accent/20 to-transparent opacity-0 transition-opacity duration-300 ${hoveredVersion === 1 ? "opacity-100" : ""}`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Version 1</h2>
                  <span className="bg-script-accent/20 text-script-accent px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" /> Original
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  The classic experience with all the essential features to create professional screenplays. Export to DOCX available upon request.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-script-accent mr-2">✓</span>
                    <span>Advanced narrative techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-script-accent mr-2">✓</span>
                    <span>Complex character arcs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-script-accent mr-2">✓</span>
                    <span>Enhanced dialogue writing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-script-accent mr-2">✓</span>
                    <span>Manual DOCX export (upon request)</span>
                  </li>
                </ul>
                
                <a href="https://chatgpt.com/g/g-35psQsJil-movie-script-writer-gpt-original-version-1" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center w-full bg-script-accent hover:bg-script-accent/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 ${hoveredVersion === 1 ? "shadow-neon" : ""}`}>
                  Select Version 1
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Version 2 Card */}
            <div className={`glass-panel p-8 rounded-xl transition-all duration-300 relative overflow-hidden ${hoveredVersion === 2 ? "transform scale-[1.02] shadow-neon border-script-accent/50" : ""}`} onMouseEnter={() => setHoveredVersion(2)} onMouseLeave={() => setHoveredVersion(null)}>
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-script-accent/20 to-transparent opacity-0 transition-opacity duration-300 ${hoveredVersion === 2 ? "opacity-100" : ""}`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Version 2</h2>
                  <span className="bg-script-accent/20 text-script-accent px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Zap className="w-3 h-3 mr-1" /> Enhanced
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Same great screenplay writing capabilities as Version 1, but with automatic DOCX export functionality built-in.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-script-accent mr-2">✓</span>
                    <span>Advanced narrative techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-script-accent mr-2">✓</span>
                    <span>Complex character arcs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-script-accent mr-2">✓</span>
                    <span>Enhanced dialogue writing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-script-accent mr-2">✓</span>
                    <span>Automatic DOCX export</span>
                  </li>
                </ul>
                
                <a href="https://chatgpt.com/g/g-ZoZ12NUed-movie-script-writer-gpt" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center w-full bg-script-accent hover:bg-script-accent/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 ${hoveredVersion === 2 ? "shadow-neon" : ""}`}>
                  Select Version 2
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full animate-rotate-slow opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 border border-script-accent/20 rounded-full animate-rotate-slow opacity-30" style={{
          animationDirection: 'reverse'
        }}></div>
        </div>
      </main>
      
      <Footer />
    </div>;
}