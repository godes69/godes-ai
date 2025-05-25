
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Features = () => {
  const handleTryFeature = (featureName: string) => {
    console.log(`Try ${featureName} clicked`);
    alert(`${featureName} feature coming soon!`);
  };

  const handleLaunchStudio = () => {
    console.log("Launch Godes AI Studio clicked");
    alert("Godes AI Studio coming soon!");
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
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
            ✨ AI Capabilities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Platform,
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Infinite Possibilities
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of AI-powered creation with our advanced platform 
            that understands your vision and brings it to life instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-4`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {feature.capabilities.map((capability, capIndex) => (
                        <Badge key={capIndex} variant="secondary" className="bg-white/10 text-gray-300 hover:bg-white/20">
                          {capability}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 group-hover:border-white/40 transition-all"
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

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Creating?</h3>
          <p className="text-gray-300 mb-8">Join thousands of creators using Godes AI to bring their ideas to life</p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-lg px-8 py-4 h-auto"
            onClick={handleLaunchStudio}
          >
            Launch Godes AI Studio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
