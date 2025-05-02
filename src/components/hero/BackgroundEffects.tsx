
import { useState, useEffect } from 'react';

interface BackgroundEffectsProps {
  cursorPosition: { x: number; y: number };
  isFacebookBrowser: boolean;
  isMobile: boolean;
  loaded: boolean;
}

export const BackgroundEffects = ({ 
  cursorPosition, 
  isFacebookBrowser, 
  isMobile,
  loaded 
}: BackgroundEffectsProps) => {
  const parallaxStyle = {
    transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * -20}px, ${cursorPosition.y * -20}px)`
  };
  
  return (
    <>
      <div className="absolute inset-0 bg-dark-gradient opacity-90 z-0"></div>
      
      {!isFacebookBrowser && !isMobile && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(229,9,20,0.15),_transparent_800px)] opacity-80 z-0"></div>
          <div className="absolute inset-0 bg-paper-texture opacity-5 z-0"></div>
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute h-full w-full bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          <div 
            className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-script-accent/5 blur-[80px] animate-pulse-subtle z-0"
            style={parallaxStyle}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-blue-500/5 blur-[60px] animate-pulse-subtle z-0"
            style={{
              transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * 30}px, ${cursorPosition.y * 30}px)`,
              animationDelay: '0.5s'
            }}
          ></div>
        </>
      )}
      
      {(isFacebookBrowser || isMobile) && (
        <div className="absolute inset-0 bg-script-bg z-0"></div>
      )}
    </>
  );
}
