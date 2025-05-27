
import { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIStudio from "@/components/AIStudio";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Ultra-premium background with interactive elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Dynamic gradient background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at ${80 - mousePosition.x * 0.05}% ${20 + mousePosition.y * 0.05}%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
              radial-gradient(circle at ${mousePosition.x * 0.08}% ${100 - mousePosition.y * 0.08}%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
            `,
          }}
        />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 animate-gradient-xy"
            style={{
              background: `
                conic-gradient(from 0deg at 50% 50%, 
                  rgba(139, 92, 246, 0.4) 0deg, 
                  rgba(6, 182, 212, 0.4) 120deg, 
                  rgba(236, 72, 153, 0.4) 240deg, 
                  rgba(139, 92, 246, 0.4) 360deg)
              `,
              filter: 'blur(80px)',
            }}
          />
        </div>

        {/* Premium grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
