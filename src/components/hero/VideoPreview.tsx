
import { useState, useEffect } from 'react';

interface VideoPreviewProps {
  loaded: boolean;
}

export const VideoPreview = ({ loaded }: VideoPreviewProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = 'https://i.ytimg.com/vi/Zdthelofv_E/maxresdefault.jpg';
    document.head.appendChild(preloadLink);

    return () => {
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
      }
    };
  }, []);
  
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  
  return (
    <div 
      className={`mt-6 sm:mt-8 md:mt-10 w-full max-w-4xl transition-all delay-300 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="relative w-full rounded-xl overflow-hidden shadow-glow border border-white/10 aspect-video transform hover:scale-[1.01] transition-all duration-300">
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-script-bg/80">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-script-accent border-t-transparent animate-spin mb-3"></div>
              <span className="text-script-accent text-xs sm:text-sm">Loading video...</span>
            </div>
          </div>
        )}
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/Zdthelofv_E?rel=0&autoplay=1&mute=0&playsinline=1&enablejsapi=1&modestbranding=1&origin=https://www.aiwebtools.ai&vq=hd1080&hd=1&playlist=Zdthelofv_E&controls=1" 
          title="MOVIE Maker Studio Demo Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
          allowFullScreen
          loading="eager"
          className="z-10"
          onLoad={handleVideoLoad}
        ></iframe>
      </div>
    </div>
  );
}
