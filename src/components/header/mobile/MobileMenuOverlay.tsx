
import { cn } from "@/lib/utils";

interface MobileMenuOverlayProps {
  isOpen: boolean;
  isFacebookBrowser: boolean;
  children: React.ReactNode;
}

export default function MobileMenuOverlay({
  isOpen,
  isFacebookBrowser,
  children,
}: MobileMenuOverlayProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-40"
      style={{ top: '60px' }}
    >
      <div className={cn(
        "w-full h-full shadow-lg transition-all duration-300 border-t-0 relative",
        isFacebookBrowser 
          ? "bg-script-bg" 
          : "bg-script-bg/95 backdrop-blur-md"
      )}>
        {children}
      </div>
    </div>
  );
}
