
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleStartCreating = () => {
    console.log("Start Creating Now clicked");
    // Scroll to features section
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchDemo = () => {
    console.log("Watch Demo clicked");
    // You can replace this with actual demo functionality
    alert("Demo feature coming soon!");
  };

  const handleScrollDown = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            🚀 Free & Unlimited AI Generation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create Anything with
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block">
              Godes AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Generate complete websites, interactive games, stunning images, and 3D models 
            with our advanced AI. Professional-grade results, unlimited usage, completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-lg px-8 py-4 h-auto"
              onClick={handleStartCreating}
            >
              Start Creating Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
              onClick={handleWatchDemo}
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400">∞</div>
              <div className="text-sm text-gray-400">Unlimited Usage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">$0</div>
              <div className="text-sm text-gray-400">Completely Free</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">4+</div>
              <div className="text-sm text-gray-400">Creation Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">⚡</div>
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
