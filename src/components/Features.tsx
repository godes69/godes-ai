
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Globe, Gamepad2, Palette, Box, Sparkles, Zap } from 'lucide-react';

const Features = () => {
  const handleTryFeature = (featureName: string) => {
    console.log(`Try ${featureName} clicked`);
    document.getElementById('ai-studio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      title: "Website Generation",
      description: "Create complete, responsive websites with modern design, animations, and full functionality from simple prompts.",
      icon: Globe,
      color: "var(--primary-accent)",
      capabilities: ["Responsive Design", "Modern CSS", "Interactive Elements", "SEO Optimized"]
    },
    {
      title: "Game Development",
      description: "Generate full HTML5 games, Unity WebGL experiences, and interactive applications ready for deployment.",
      icon: Gamepad2,
      color: "var(--secondary-accent)",
      capabilities: ["HTML5 Games", "Physics Engine", "Multiplayer Support", "Mobile Ready"]
    },
    {
      title: "Image Creation",
      description: "Produce high-quality digital art, logos, illustrations, and professional graphics in any style.",
      icon: Palette,
      color: "var(--primary-accent)",
      capabilities: ["Digital Art", "Logo Design", "Photo Realistic", "Custom Styles"]
    },
    {
      title: "3D Modeling",
      description: "Create detailed 3D models, animations, and scenes in various formats for any application.",
      icon: Box,
      color: "var(--secondary-accent)",
      capabilities: ["GLTF Export", "Animations", "Texturing", "Real-time Preview"]
    }
  ];

  return (
    <section id="features" className="py-20 px-6 section-alt relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full animate-float-gentle" 
             style={{ background: 'radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full animate-float-gentle animation-delay-1000" 
             style={{ background: 'radial-gradient(circle, rgba(80, 227, 194, 0.1) 0%, transparent 70%)' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-6 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-3 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
            AI Capabilities
          </Badge>
          <h2 className="mb-6 animate-scale-in animation-delay-200">
            One Platform,
            <span className="gradient-text block mt-2">
              Infinite Possibilities
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400" style={{ color: 'var(--secondary-text)' }}>
            Experience the future of AI-powered creation with our advanced platform 
            that understands your vision and brings it to life instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="soft-card bg-white/80 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-all duration-400 hover:scale-110" 
                       style={{ backgroundColor: feature.color }}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-4 font-bold" style={{ color: 'var(--primary-text)' }}>{feature.title}</h3>
                    <p className="mb-6 leading-relaxed" style={{ color: 'var(--secondary-text)' }}>{feature.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {feature.capabilities.map((capability, capIndex) => (
                        <Badge 
                          key={capIndex} 
                          variant="secondary" 
                          className="bg-gray-100 hover:bg-gray-200 transition-colors duration-400 text-gray-700 font-medium"
                        >
                          {capability}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="border-2 hover:bg-white/50 transition-all duration-400 font-medium"
                      style={{ borderColor: feature.color, color: feature.color }}
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

        <div className="text-center animate-fade-in-up animation-delay-1000">
          <h3 className="mb-4 font-bold" style={{ color: 'var(--primary-text)' }}>Ready to Start Creating?</h3>
          <p className="mb-8 text-lg" style={{ color: 'var(--secondary-text)' }}>Join thousands of creators using Godes AI to bring their ideas to life</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/studio">
              <Button className="btn-primary text-lg px-8 py-6 h-auto shadow-lg">
                <Zap className="w-5 h-5 mr-2" />
                Launch Full Studio
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="border-2 text-lg px-8 py-6 h-auto bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-400 font-medium"
              style={{ borderColor: 'var(--primary-accent)', color: 'var(--primary-accent)' }}
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
