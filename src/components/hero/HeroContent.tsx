
interface HeroContentProps {
  loaded: boolean;
}

export const HeroContent = ({ loaded }: HeroContentProps) => {
  return (
    <div className={`transition-all duration-700 px-3 mt-0 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 bg-gradient-to-r from-[#E50914] via-[#1EAEDB] to-[#E50914] bg-size-200 animate-gradient-x text-white">
        Complete AI-Powered Filmmaking Suite
      </span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-2 tracking-tight glow-text">
        Your Complete <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-[#E50914] via-[#1EAEDB] to-[#E50914] bg-size-200 animate-gradient-x bg-clip-text text-transparent">A.I. Movie Making Studio</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-4 animate-pulse-subtle bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-size-200 animate-gradient-slow bg-clip-text">
        The most powerful AI filmmaking suite that guides you through every step of the movie creation process, from script to screen.
      </p>
    </div>
  );
}
