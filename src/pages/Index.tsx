
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import ExampleSection from '@/components/ExampleSection';
import Footer from '@/components/Footer';

// Add animation styles
import './animationStyles.css';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to trigger animations
    setIsMounted(true);
    
    // Simulate loading to ensure smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // Reduced from 600ms to 400ms
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950">
        <div className={`animate-pulse transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-3xl font-bold font-display tracking-tight">
            <span className="text-transparent bg-gradient-to-r from-gold-300 via-yellow-200 to-gold-300 bg-clip-text">Script</span>
            <span className="text-transparent bg-gradient-to-r from-purple-300 via-violet-200 to-purple-300 bg-clip-text">Writer</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Divine section dividers */}
      <main className="space-y-16 md:space-y-24 lg:space-y-32">
        <section className="relative">
          <HeroSection />
          {/* Divine separator */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        </section>
        
        <section className="relative py-8 md:py-16">
          <FeaturesSection />
          {/* Divine separator */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
        </section>
        
        <section className="relative py-8 md:py-16">
          <ProcessSection />
          {/* Divine separator */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
        </section>
        
        <section className="relative py-8 md:py-16">
          <ExampleSection />
        </section>
      </main>
    </div>
  );
}

export default Index;
