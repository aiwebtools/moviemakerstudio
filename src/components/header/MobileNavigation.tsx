
import MobileMenuOverlay from "./mobile/MobileMenuOverlay";
import MobileMenuHeader from "./mobile/MobileMenuHeader";
import MobileMenuContent from "./mobile/MobileMenuContent";
import MobileMenuFooter from "./mobile/MobileMenuFooter";

interface MobileNavigationProps {
  isOpen: boolean;
  isFacebookBrowser: boolean;
  animationTools: { name: string; url: string }[];
  soundTools: { name: string; url: string }[];
  lipsyncTools?: { name: string; url: string }[];
  editingTools?: { name: string; url: string }[];
  gptShortcuts?: { name: string; url: string }[];
  onToggleMenu: () => void;
}

export default function MobileNavigation({
  isOpen,
  isFacebookBrowser,
  animationTools,
  soundTools,
  lipsyncTools = [],
  editingTools = [],
  gptShortcuts = [],
  onToggleMenu,
}: MobileNavigationProps) {
  return (
    <MobileMenuOverlay isOpen={isOpen} isFacebookBrowser={isFacebookBrowser}>
      <MobileMenuHeader onToggleMenu={onToggleMenu} />
      <MobileMenuContent
        animationTools={animationTools}
        soundTools={soundTools}
        lipsyncTools={lipsyncTools}
        editingTools={editingTools}
        gptShortcuts={gptShortcuts}
        onToggleMenu={onToggleMenu}
      />
      <MobileMenuFooter onToggleMenu={onToggleMenu} />
    </MobileMenuOverlay>
  );
}
