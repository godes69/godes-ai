
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleScrollDown = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30 animate-pulse">
            🚀 Free & Unlimited AI Generation
          </Badge>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in">
            Create Anything with
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block animate-scale-in animation-delay-300">
              Godes AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
            Generate complete websites, interactive games, stunning images, and 3D models 
            with our advanced AI. Professional-grade results, unlimited usage, completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-700">
            <Link to="/studio">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-lg px-8 py-6 h-auto transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Launch AI Studio
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('ai-studio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center animate-fade-in animation-delay-900">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-400 animate-pulse">∞</div>
              <div className="text-sm text-gray-400">Unlimited Usage</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-cyan-400 animate-pulse animation-delay-500">$0</div>
              <div className="text-sm text-gray-400">Completely Free</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-pink-400 animate-pulse animation-delay-1000">6+</div>
              <div className="text-sm text-gray-400">Creation Types</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-400 animate-pulse animation-delay-1500">⚡</div>
              <div className="text-sm text-gray-400">Instant Results</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={handleScrollDown}>
          <ArrowDown className="text-white/50" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
