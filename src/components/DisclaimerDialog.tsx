
import React, { useEffect, useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function DisclaimerDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Clear localStorage during development if needed
    // localStorage.removeItem("hasSeenDisclaimer");
    
    // Check if the user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    
    if (!hasSeenDisclaimer) {
      // Ensure dialog opens with a slight delay to allow component to fully mount
      const timer = setTimeout(() => {
        setOpen(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    // Save to localStorage that the user has seen the disclaimer
    localStorage.setItem("hasSeenDisclaimer", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto bg-gradient-to-br from-purple-900/95 via-indigo-900/95 to-violet-900/95 border-2 border-gold-400/30 shadow-2xl shadow-purple-500/20">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-transparent bg-gradient-to-r from-gold-300 via-yellow-200 to-gold-300 bg-clip-text flex items-center gap-2 animate-pulse-subtle">
            <Shield className="h-5 w-5 text-gold-300 drop-shadow-lg" />
            Terms of Use & Disclaimer
          </DialogTitle>
          <DialogDescription className="pt-3 text-sm sm:text-base space-y-3 text-gray-100">
            <div className="bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-gold-400/20 p-4 rounded-lg border border-gold-400/30 shadow-inner">
              <p className="text-gold-200 font-semibold text-center text-sm animate-pulse-subtle">
                ✨ For Informational, Educational, and Research Purposes Only ✨
              </p>
            </div>
            
            <p className="text-gray-200">
              This website and all AI tools (Movie Script Writer, Scene Maker, Trailer Poster Maker, StageMaster AI Suite, and animation/sound tools) are provided for research, educational, and productivity purposes only.
            </p>

            <div className="bg-gradient-to-r from-yellow-400/15 via-amber-300/15 to-gold-400/15 p-3 rounded-md border border-yellow-400/25 shadow-glow">
              <p className="text-yellow-200 font-semibold text-sm">
                Usage: FREE with ChatGPT Plus or higher. Free accounts have limited interactions.
              </p>
            </div>

            <div className="space-y-2 text-sm text-gray-200">
              <p><strong className="text-gold-200">Content Ownership:</strong> You own all rights to content you create. We claim no ownership.</p>
              
              <p><strong className="text-gold-200">Ethical Use Agreement:</strong> By using these tools, you agree to:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-300">
                <li>Use tools ethically and responsibly</li>
                <li>Obtain permission for any likeness or persona cloning</li>
                <li>Not infringe on copyrights or intellectual property</li>
                <li>Take full responsibility for your content and its usage</li>
              </ul>
            </div>

            <p className="font-semibold text-transparent bg-gradient-to-r from-gold-300 via-yellow-200 to-gold-300 bg-clip-text text-sm pt-2 text-center animate-pulse-subtle">
              By clicking "I AGREE & CONTINUE" you acknowledge reading and agreeing to these terms.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center pt-2">
          <Button 
            onClick={handleAgree}
            className="bg-gradient-to-r from-gold-500 via-yellow-400 to-gold-500 hover:from-gold-400 hover:via-yellow-300 hover:to-gold-400 text-black font-bold px-8 py-3 rounded-xl shadow-glow hover:shadow-neon transition-all duration-300 transform hover:scale-105"
          >
            I AGREE & CONTINUE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
