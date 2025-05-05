
interface HeroContentProps {
  loaded: boolean;
}

export const HeroContent = ({ loaded }: HeroContentProps) => {
  return (
    <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 md:mb-4 rainbow-text text-shadow-pulse">
        Complete AI-Powered Filmmaking Suite
      </span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-3 md:mb-4 tracking-tight">
        Your Complete <br className="hidden sm:block" />
        <span className="rainbow-text text-shadow-pulse">Movie Making Studio</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-shadow-pulse rainbow-text max-w-2xl mx-auto">
        The most powerful AI filmmaking suite that guides you through every step of the movie creation process, from script to screen.
      </p>
    </div>
  );
}
