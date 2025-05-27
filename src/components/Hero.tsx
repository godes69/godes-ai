
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleScrollDown = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden section-light">
      {/* Soft animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full animate-float-gentle" 
             style={{ background: 'radial-gradient(circle, rgba(74, 144, 226, 0.2) 0%, transparent 70%)' }}></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full animate-float-gentle animation-delay-1000" 
             style={{ background: 'radial-gradient(circle, rgba(80, 227, 194, 0.2) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full animate-float-gentle animation-delay-600" 
             style={{ background: 'radial-gradient(circle, rgba(74, 144, 226, 0.15) 0%, transparent 70%)' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-3 text-sm font-medium animate-scale-in">
            <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
            Free & Unlimited AI Generation
          </Badge>
          
          <h1 className="mb-8 animate-fade-in-up">
            Create Anything with
            <span className="gradient-text block mt-2 animate-scale-in animation-delay-200">
              Godes AI
            </span>
          </h1>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400" style={{ color: 'var(--secondary-text)' }}>
            Generate complete websites, interactive games, stunning images, and 3D models 
            with our advanced AI. Professional-grade results, unlimited usage, completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <Link to="/studio">
              <Button className="btn-primary text-lg px-8 py-6 h-auto shadow-lg">
                <Zap className="w-5 h-5 mr-2" />
                Launch AI Studio
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 text-lg px-8 py-6 h-auto bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-400"
              style={{ borderColor: 'var(--primary-accent)', color: 'var(--primary-accent)' }}
              onClick={() => document.getElementById('ai-studio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center animate-fade-in-up animation-delay-800">
            <div className="soft-card p-6 bg-white/80 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2 gradient-text">∞</div>
              <div className="text-sm" style={{ color: 'var(--secondary-text)' }}>Unlimited Usage</div>
            </div>
            <div className="soft-card p-6 bg-white/80 backdrop-blur-sm animation-delay-200">
              <div className="text-3xl font-bold mb-2 gradient-text">$0</div>
              <div className="text-sm" style={{ color: 'var(--secondary-text)' }}>Completely Free</div>
            </div>
            <div className="soft-card p-6 bg-white/80 backdrop-blur-sm animation-delay-400">
              <div className="text-3xl font-bold mb-2 gradient-text">6+</div>
              <div className="text-sm" style={{ color: 'var(--secondary-text)' }}>Creation Types</div>
            </div>
            <div className="soft-card p-6 bg-white/80 backdrop-blur-sm animation-delay-600">
              <div className="text-3xl font-bold mb-2 gradient-text">⚡</div>
              <div className="text-sm" style={{ color: 'var(--secondary-text)' }}>Instant Results</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-400" onClick={handleScrollDown}>
          <ArrowDown className="w-6 h-6" style={{ color: 'var(--primary-accent)' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
