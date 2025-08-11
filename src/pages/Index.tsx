
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import ToolsShowcase from '@/components/ToolsShowcase';
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
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className={`animate-pulse transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-2xl font-bold font-display tracking-tight">
            Script<span className="text-script-accent">Writer</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <ToolsShowcase />
        <ExampleSection />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
