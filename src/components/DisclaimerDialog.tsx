
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
      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-script-accent flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Terms of Use & Disclaimer
          </DialogTitle>
          <DialogDescription className="pt-3 text-sm sm:text-base space-y-3">
            <p>
              This website and all AI tools (Movie Script Writer, Scene Maker, Trailer Poster Maker, StageMaster AI Suite, and animation/sound tools) are provided for research, educational, and productivity purposes only.
            </p>

            <div className="bg-yellow-400/10 p-3 rounded-md border border-yellow-400/20">
              <p className="text-yellow-400 font-semibold text-sm">
                Usage: FREE with ChatGPT Plus or higher. Free accounts have limited interactions.
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <p><strong>Content Ownership:</strong> You own all rights to content you create. We claim no ownership.</p>
              
              <p><strong>Ethical Use Agreement:</strong> By using these tools, you agree to:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Use tools ethically and responsibly</li>
                <li>Obtain permission for any likeness or persona cloning</li>
                <li>Not infringe on copyrights or intellectual property</li>
                <li>Take full responsibility for your content and its usage</li>
              </ul>
              
              <p className="text-xs">
                <strong>Full Terms:</strong> For complete terms and disclaimers, visit{" "}
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-script-accent hover:underline"
                >
                  https://aiwebtools.lovable.app/disclaimers
                </a>
              </p>
            </div>

            <p className="font-semibold text-script-accent text-sm pt-2">
              By clicking "I AGREE & CONTINUE" you acknowledge reading and agreeing to these terms.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center pt-2">
          <Button 
            onClick={handleAgree}
            className="bg-script-accent hover:bg-script-accent/90 font-medium px-6"
          >
            I AGREE & CONTINUE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
