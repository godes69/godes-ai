
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, Zap, Globe, Brain, Code, Image, Palette, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeBackground from "@/components/ThreeBackground";

const Studio = () => {
  const [activeCreator, setActiveCreator] = useState(null);

  const creators = [
    {
      id: 'website',
      title: 'Website Builder',
      description: 'Create stunning, responsive websites with modern designs',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      features: ['Responsive Design', 'Modern CSS', 'Interactive Elements', 'SEO Ready']
    },
    {
      id: 'app',
      title: 'App Generator',
      description: 'Build complete web applications with full functionality',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['React Components', 'State Management', 'API Integration', 'Modern UI']
    },
    {
      id: 'game',
      title: 'Game Creator',
      description: 'Generate HTML5 games and interactive experiences',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      features: ['HTML5 Canvas', 'Physics Engine', 'Animations', 'Mobile Ready']
    },
    {
      id: 'design',
      title: 'Design Studio',
      description: 'Create beautiful graphics, logos, and digital art',
      icon: Palette,
      color: 'from-green-500 to-teal-500',
      features: ['Logo Design', 'Digital Art', 'Brand Assets', 'Vector Graphics']
    },
    {
      id: 'code',
      title: 'Code Assistant',
      description: 'Generate clean, efficient code for any programming task',
      icon: Code,
      color: 'from-indigo-500 to-blue-500',
      features: ['Multiple Languages', 'Clean Code', 'Documentation', 'Best Practices']
    },
    {
      id: 'content',
      title: 'Content Writer',
      description: 'Create engaging text, stories, and marketing content',
      icon: Image,
      color: 'from-pink-500 to-rose-500',
      features: ['Blog Posts', 'Marketing Copy', 'Creative Writing', 'SEO Content']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ThreeBackground />
      
      <div className="relative z-10 pt-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Link to="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Badge className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Studio Pro
            </Badge>
          </div>

          {/* Title Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Create Anything
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose your creation type and let our AI build exactly what you envision. 
              From websites to games, apps to art - the possibilities are endless.
            </p>
          </div>

          {/* Creator Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {creators.map((creator, index) => (
              <Card 
                key={creator.id} 
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group cursor-pointer transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveCreator(creator)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${creator.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <creator.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{creator.title}</CardTitle>
                  <p className="text-gray-300 text-sm leading-relaxed">{creator.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {creator.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="secondary" 
                        className="bg-white/10 text-gray-300 hover:bg-white/20 text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${creator.color} hover:opacity-90 transition-all duration-300`}
                  >
                    Start Creating
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our AI Studio?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: 'Lightning Fast', desc: 'Generate in seconds' },
                { icon: Brain, title: 'AI Powered', desc: 'Advanced algorithms' },
                { icon: Globe, title: 'No Limits', desc: 'Unlimited usage' },
                { icon: Sparkles, title: 'Premium Quality', desc: 'Professional results' }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${1000 + index * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
