
interface HeroContentProps {
  loaded: boolean;
}

export const HeroContent = ({ loaded }: HeroContentProps) => {
  return (
    <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <span className="inline-block px-3 py-1 text-xs font-medium bg-script-accent/20 text-script-accent rounded-full mb-3 md:mb-4">
        Industry Standard AI Script Writing
      </span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-3 md:mb-4 tracking-tight glow-text">
        Craft Award-Winning Movie Scripts <br className="hidden sm:block" />
        <span className="text-gradient">with AI</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
        The most sophisticated AI screenwriting assistant that guides you through every step of the script creation process, from concept to final draft.
      </p>
    </div>
  );
}
