
interface ScriptPreviewProps {
  loaded: boolean;
  cursorPosition: { x: number; y: number };
  isFacebookBrowser: boolean;
  isMobile: boolean;
}

export const ScriptPreview = ({ loaded, cursorPosition, isFacebookBrowser, isMobile }: ScriptPreviewProps) => {
  return (
    <div 
      className={`mt-6 sm:mt-8 w-full max-w-3xl transition-all delay-500 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={(isFacebookBrowser || isMobile) ? {} : {
        transform: `perspective(1000px) rotateX(${cursorPosition.y * 5}deg) rotateY(${cursorPosition.x * -5}deg)`
      }}
    >
      <div className="script-page transform rotate-[-1deg] mx-auto max-w-2xl hover:shadow-glow transition-all duration-500 relative">
        <div className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-script-accent rounded-full animate-pulse-glow"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-script-accent rounded-full animate-pulse-glow delay-150"></div>
        <div className="scene-heading text-sm sm:text-base">INT. STUDIO APARTMENT - NIGHT</div>
        <div className="action-text text-xs sm:text-sm">A dim-lit room. ALEX (30s, disheveled but determined) hunches over a laptop, the blue glow illuminating their exhausted face. Empty coffee cups surround them.</div>
        <div className="character-name text-xs sm:text-sm">ALEX</div>
        <div className="dialogue text-xs sm:text-sm">This time... this time it's going to be perfect.</div>
        <div className="action-text text-xs sm:text-sm">The cursor blinks on a blank document titled "BREAKTHROUGH - Final Draft v23."</div>
        <div className="transition text-xs sm:text-sm">FADE TO BLACK.</div>
      </div>
    </div>
  );
}
