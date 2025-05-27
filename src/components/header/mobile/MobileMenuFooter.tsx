
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuFooterProps {
  onToggleMenu: () => void;
}

export default function MobileMenuFooter({ onToggleMenu }: MobileMenuFooterProps) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Button
        onClick={onToggleMenu}
        size="icon"
        className="bg-gray-700 hover:bg-gray-600 text-white rounded-full h-12 w-12 transition-all duration-300 transform hover:scale-110"
        aria-label="Close menu"
      >
        <X className="h-6 w-6" />
      </Button>
    </div>
  );
}
