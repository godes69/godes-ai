
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleExploreFeatures = () => {
    console.log("Explore Features clicked");
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-green-400/30 to-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center animate-fade-in">
          <Badge className="mb-6 bg-white/10 text-white border-white/20 px-6 py-2 text-base backdrop-blur-lg animate-scale-in">
            <Sparkles className="w-4 h-4 mr-2" />
            🚀 The Future of AI Creation is Here
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-scale-in animation-delay-300">
            <span className="block text-white mb-4">Create Anything</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              with AI Power
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200 animate-fade-in animation-delay-500">
            Generate <strong className="text-cyan-300">websites</strong>, create <strong className="text-purple-300">games</strong>, 
            design <strong className="text-pink-300">images</strong>, and build <strong className="text-green-300">3D models</strong> 
            — all with unlimited usage, completely free forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in animation-delay-700">
            <Link to="/chat">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-2 w-5 h-5" />
                Start Creating Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleExploreFeatures}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-lg transition-all duration-300 transform hover:scale-105"
            >
              <Globe className="mr-2 w-5 h-5" />
              Explore Features
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in animation-delay-1000">
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Websites</h3>
              <p className="text-sm text-gray-300">Professional sites in seconds</p>
            </div>
            
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Games</h3>
              <p className="text-sm text-gray-300">Interactive experiences</p>
            </div>
            
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Images</h3>
              <p className="text-sm text-gray-300">Stunning AI artwork</p>
            </div>
            
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">3D Models</h3>
              <p className="text-sm text-gray-300">Professional 3D assets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
