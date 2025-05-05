
import { useEffect, useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Gavel } from "lucide-react";

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
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-script-accent flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Terms of Use & Disclaimer
          </DialogTitle>
          <DialogDescription className="pt-3 text-sm sm:text-base">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-script-accent flex-shrink-0 mt-0.5" />
                <p>
                  This website and all tools provided herein (including but not limited to Movie Script Writer, 
                  Movie Scene Maker, Movie Trailer Poster Maker, StageMaster AI Suite, and all animation and sound tools) 
                  are provided for research, informational, and educational productivity purposes only.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Gavel className="h-5 w-5 text-script-accent flex-shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold">Content Ownership:</span> You, the user, own all rights to the content 
                  generated entirely through these services. We claim no ownership over any content you create.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-script-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Ethical Use Agreement:</span> By using these tools, you agree to:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Use these tools in an ethical manner</li>
                    <li>Obtain permission for any likeness or persona being cloned or included in your productions</li>
                    <li>Not infringe on any copyrights or intellectual property rights</li>
                    <li>Take full responsibility for the content you create and how you use it</li>
                  </ul>
                </div>
              </div>

              <p className="font-semibold text-script-accent pt-2">
                By clicking "I AGREE & CONTINUE" below, you acknowledge that you have read, understood, and agree to 
                these terms and conditions.
              </p>
            </div>
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
