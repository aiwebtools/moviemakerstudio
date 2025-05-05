
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import ExampleSection from '@/components/ExampleSection';
import Footer from '@/components/Footer';
import DisclaimerDialog from '@/components/DisclaimerDialog';

// Add animation styles
import './animationStyles.css';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to ensure smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <span className="text-2xl font-bold font-display tracking-tight">
            Script<span className="text-script-accent">Writer</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <DisclaimerDialog />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <ExampleSection />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
