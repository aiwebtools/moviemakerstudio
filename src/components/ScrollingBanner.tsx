
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollingBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    setIsFacebookBrowser(userAgent.indexOf('FBAN') > -1 || userAgent.indexOf('FBAV') > -1);
  }, []);

  const handleClick = () => {
    window.open('https://www.aiwebtools.ai', '_blank');
  };

  return (
    <div 
      ref={bannerRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "cursor-pointer py-2 md:py-3 overflow-hidden w-full",
        "bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#0EA5E9] bg-size-200 animate-gradient-x",
        "border-t border-b border-white/10",
        isHovered ? "shadow-lg" : ""
      )}
    >
      <div className={cn(
        "flex items-center justify-center gap-3 whitespace-nowrap animate-marquee",
        isHovered ? "animation-paused" : ""
      )}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center text-white gap-3 px-4">
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-white animate-pulse" />
            <span className="text-sm md:text-base font-medium">
              <span className="font-bold">AiWebTools.Ai:</span> Your gateway to <span className="font-bold">FREE</span> AI tools empowering humanity. Unlock your true potential without limitations.
            </span>
            <span className="text-xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
