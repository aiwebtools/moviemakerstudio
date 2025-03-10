
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

export default function DisclaimerDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    
    if (!hasSeenDisclaimer) {
      setOpen(true);
    }
  }, []);

  const handleAgree = () => {
    // Save to localStorage that the user has seen the disclaimer
    localStorage.setItem("hasSeenDisclaimer", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-script-accent">Disclaimer</DialogTitle>
          <DialogDescription className="pt-2 text-sm sm:text-base">
            <p className="mb-3">
              This tool is provided for research, informational, and educational productivity purposes only.
            </p>
            <p className="mb-3">
              You, the user, own all rights to the movie scripts generated entirely through this service.
            </p>
            <p className="font-semibold">
              By clicking "I Agree" below, you acknowledge these terms and conditions.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={handleAgree}
            className="bg-script-accent hover:bg-script-accent/90 font-medium"
          >
            I AGREE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
