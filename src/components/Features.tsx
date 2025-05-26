
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Features = () => {
  const handleTryFeature = (featureName: string) => {
    console.log(`Try ${featureName} clicked`);
    // Scroll to AI Studio section
    document.getElementById('ai-studio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      title: "Website Generation",
      description: "Create complete, responsive websites with modern design, animations, and full functionality from simple prompts.",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
      capabilities: ["Responsive Design", "Modern CSS", "Interactive Elements", "SEO Optimized"]
    },
    {
      title: "Game Development",
      description: "Generate full HTML5 games, Unity WebGL experiences, and interactive applications ready for deployment.",
      icon: "🎮",
      color: "from-purple-500 to-pink-500",
      capabilities: ["HTML5 Games", "Physics Engine", "Multiplayer Support", "Mobile Ready"]
    },
    {
      title: "Image Creation",
      description: "Produce high-quality digital art, logos, illustrations, and professional graphics in any style.",
      icon: "🎨",
      color: "from-orange-500 to-red-500",
      capabilities: ["Digital Art", "Logo Design", "Photo Realistic", "Custom Styles"]
    },
    {
      title: "3D Modeling",
      description: "Create detailed 3D models, animations, and scenes in various formats for any application.",
      icon: "🧊",
      color: "from-green-500 to-teal-500",
      capabilities: ["GLTF Export", "Animations", "Texturing", "Real-time Preview"]
    }
  ];

  return (
    <section id="features" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30 animate-pulse">
            ✨ AI Capabilities
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-scale-in animation-delay-300">
            One Platform,
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Infinite Possibilities
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
            Experience the future of AI-powered creation with our advanced platform 
            that understands your vision and brings it to life instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {feature.capabilities.map((capability, capIndex) => (
                        <Badge key={capIndex} variant="secondary" className="bg-white/10 text-gray-300 hover:bg-white/20 transition-colors">
                          {capability}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 group-hover:border-white/40 transition-all transform hover:scale-105"
                      onClick={() => handleTryFeature(feature.title)}
                    >
                      Try {feature.title}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in animation-delay-1000">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Creating?</h3>
          <p className="text-gray-300 mb-8 text-lg">Join thousands of creators using Godes AI to bring their ideas to life</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/studio">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-lg px-8 py-6 h-auto transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Launch Full Studio
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('ai-studio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try Quick Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
