
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Brain, Cpu, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ultra-premium animated background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full animate-morph opacity-30"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            left: `${20 + mousePosition.x * 0.01}%`,
            top: `${20 + mousePosition.y * 0.01}%`,
            filter: 'blur(40px)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full animate-morph opacity-20"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
            right: `${15 + mousePosition.x * 0.008}%`,
            top: `${30 + mousePosition.y * 0.008}%`,
            filter: 'blur(50px)',
            transform: 'translate(50%, -50%)',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full animate-morph opacity-25"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #10b981)',
            left: `${60 + mousePosition.x * 0.006}%`,
            bottom: `${20 + mousePosition.y * 0.006}%`,
            filter: 'blur(45px)',
            transform: 'translate(-50%, 50%)',
            animationDelay: '4s',
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float-premium opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-6">
        <div className={`text-center transition-all duration-1500 ${isVisible ? 'animate-slide-in-premium' : 'opacity-0'}`}>
          <Badge className="mb-8 glass-effect border-purple-500/30 text-purple-300 px-8 py-3 text-lg hover-glow">
            <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
            🚀 Next-Generation AI Experience
          </Badge>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-none">
            <span className="block text-white mb-6 animate-text-glow">Create Beyond</span>
            <span className="gradient-text-premium text-7xl md:text-9xl lg:text-[12rem] animate-gradient-x">
              Imagination
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl mb-16 max-w-5xl mx-auto leading-relaxed text-gray-300 opacity-0 animate-fade-in-premium" style={{ animationDelay: '0.5s' }}>
            Unleash the power of <strong className="gradient-text-glow">unlimited AI</strong> that thinks, creates, and evolves. 
            Generate <strong className="text-cyan-400">websites</strong>, build <strong className="text-purple-400">applications</strong>, 
            design <strong className="text-pink-400">experiences</strong>, and automate <strong className="text-green-400">everything</strong> 
            — all with the most advanced AI assistant ever created.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 opacity-0 animate-scale-in-premium" style={{ animationDelay: '0.8s' }}>
            <Link to="/chat">
              <Button className="btn-premium text-xl px-12 py-6 hover-lift">
                <Brain className="mr-3 w-6 h-6" />
                Start Creating Now
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleExploreFeatures}
              className="glass-effect border-white/20 text-white hover-glow px-12 py-6 text-xl"
            >
              <Zap className="mr-3 w-6 h-6" />
              Explore AI Powers
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto opacity-0 animate-fade-in-premium" style={{ animationDelay: '1.2s' }}>
            <div className="neu-card p-8 rounded-2xl hover-lift group">
              <div className="w-20 h-20 mx-auto mb-6 glass-effect rounded-3xl flex items-center justify-center group-hover:animate-glow-pulse">
                <Cpu className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="font-bold text-2xl text-white mb-4 gradient-text-glow">AI Development</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Build complete applications, websites, and digital experiences with conversational AI</p>
            </div>
            
            <div className="neu-card p-8 rounded-2xl hover-lift group" style={{ animationDelay: '1.4s' }}>
              <div className="w-20 h-20 mx-auto mb-6 glass-effect rounded-3xl flex items-center justify-center group-hover:animate-glow-pulse">
                <Brain className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="font-bold text-2xl text-white mb-4 gradient-text-glow">Deep Intelligence</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Advanced reasoning, analysis, and problem-solving across any domain or language</p>
            </div>
            
            <div className="neu-card p-8 rounded-2xl hover-lift group" style={{ animationDelay: '1.6s' }}>
              <div className="w-20 h-20 mx-auto mb-6 glass-effect rounded-3xl flex items-center justify-center group-hover:animate-glow-pulse">
                <Rocket className="w-10 h-10 text-pink-400" />
              </div>
              <h3 className="font-bold text-2xl text-white mb-4 gradient-text-glow">Limitless Creation</h3>
              <p className="text-gray-400 text-lg leading-relaxed">From code to content, design to deployment - create anything you can imagine</p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-premium" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-12 border-2 border-purple-400 rounded-full p-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
