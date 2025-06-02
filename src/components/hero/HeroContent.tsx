
interface HeroContentProps {
  loaded: boolean;
}

export const HeroContent = ({ loaded }: HeroContentProps) => {
  return (
    <div className={`transition-all duration-700 px-3 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Divine badge with celestial glow */}
      <span className="inline-block px-4 py-2 text-sm font-bold rounded-full mb-6 bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-400 bg-size-200 animate-gradient-x text-black shadow-divine animate-celestial-float mt-8 md:mt-0">
        ✨ Complete AI-Powered Filmmaking Suite ✨
      </span>
      
      {/* Divine title with enhanced glow */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-6 tracking-tight">
        <span className="block text-transparent bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text drop-shadow-2xl animate-pulse-subtle">
          Your Complete
        </span>
        <br className="hidden sm:block" />
        <span className="block text-transparent bg-gradient-to-r from-gold-300 via-yellow-200 via-gold-400 to-purple-300 bg-size-200 animate-gradient-x bg-clip-text drop-shadow-2xl">
          A.I. Movie Making Studio
        </span>
      </h1>
      
      {/* Divine description with enhanced styling */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent blur-xl" />
        <p className="relative text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          <span className="text-transparent bg-gradient-to-r from-gray-200 via-white via-gold-200 to-gray-200 bg-size-200 animate-gradient-slow bg-clip-text font-medium">
            The most powerful AI filmmaking suite that guides you through every step of the movie creation process, from script to screen.
          </span>
        </p>
      </div>
    </div>
  );
}
