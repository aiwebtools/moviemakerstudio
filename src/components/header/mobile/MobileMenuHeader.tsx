
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuHeaderProps {
  onToggleMenu: () => void;
}

export default function MobileMenuHeader({ onToggleMenu }: MobileMenuHeaderProps) {
  return (
    <>
      {/* Top close button */}
      <div className="flex justify-end p-3 border-b border-white/10">
        <Button
          onClick={onToggleMenu}
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-gray-300 hover:text-script-accent hover:bg-white/5"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Tagline with glowing gold effect */}
      <div className="text-center py-6 px-3 border-b border-white/10 relative overflow-hidden">
        <div className="relative">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-xl font-bold animate-fade-in transition-all duration-300 hover:scale-105 cursor-pointer relative"
              style={{
                textShadow: '0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.4)',
                filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.6))'
              }}>
            Become the Star You Are
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 opacity-0 hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
          </h2>
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse opacity-60"></div>
        </div>
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent animate-pulse"></div>
      </div>
    </>
  );
}
