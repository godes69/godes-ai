
import { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIStudio from "@/components/AIStudio";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--background)', color: 'var(--primary-text)' }}>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <AIStudio />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
