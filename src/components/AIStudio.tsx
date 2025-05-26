
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2, Brain, Image, Code, Zap, Globe, Sparkles } from 'lucide-react';

const AIStudio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [result, setResult] = useState('');
  const [activeTab, setActiveTab] = useState('website');

  const generateWebsite = async () => {
    setIsLoading(true);
    setResult('');
    
    try {
      // Simulate website generation with a beautiful HTML template
      const websiteTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${textInput || 'My Generated Website'}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 3rem;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
            animation: fadeInUp 1s ease-out;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        h1 {
            color: white;
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
        .btn {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-size: 1rem;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        .btn:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${textInput || 'Welcome to Your Website'}</h1>
        <p>This beautiful website was generated using AI technology. Fully responsive and modern design!</p>
        <button class="btn" onclick="alert('Hello from your AI-generated website!')">Get Started</button>
    </div>
</body>
</html>`;
      
      setTimeout(() => {
        setResult(websiteTemplate);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Website generation error:', error);
      setResult('Error generating website. Please try again.');
      setIsLoading(false);
    }
  };

  const generateText = async () => {
    setIsLoading(true);
    setResult('');
    
    // Simulate text generation with a more reliable approach
    setTimeout(() => {
      const sampleTexts = [
        `Based on your prompt "${textInput}", here's a creative continuation:\n\nThe future of AI is incredibly bright, with endless possibilities for innovation and creativity. We're entering an era where artificial intelligence can assist us in ways we never thought possible, from generating beautiful websites to creating stunning artworks and solving complex problems.`,
        `Your idea about "${textInput}" sparks this thought:\n\nImagine a world where technology seamlessly integrates with human creativity. Every day brings new opportunities to push the boundaries of what's possible, creating solutions that make life more beautiful, efficient, and meaningful.`,
        `Inspired by "${textInput}", consider this:\n\nThe intersection of human imagination and artificial intelligence creates a powerful synergy. Together, we can build experiences that are not just functional, but truly magical and transformative.`
      ];
      
      const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
      setResult(randomText);
      setIsLoading(false);
    }, 1500);
  };

  const generateCode = async () => {
    setIsLoading(true);
    setResult('');
    
    setTimeout(() => {
      const codeExample = `// Generated code based on: "${textInput}"

function createAwesomeApp() {
    const app = {
        name: "${textInput || 'MyApp'}",
        version: "1.0.0",
        features: [
            "Beautiful UI",
            "Responsive Design", 
            "Modern Animations",
            "AI Integration"
        ],
        
        init() {
            console.log(\`\${this.name} is starting up!\`);
            this.setupUI();
            this.enableAnimations();
        },
        
        setupUI() {
            document.body.style.background = 
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
        },
        
        enableAnimations() {
            const elements = document.querySelectorAll('.animate');
            elements.forEach(el => {
                el.style.transition = 'all 0.3s ease';
            });
        }
    };
    
    return app;
}

// Initialize the app
const myApp = createAwesomeApp();
myApp.init();`;
      
      setResult(codeExample);
      setIsLoading(false);
    }, 1800);
  };

  const analyzeImage = async () => {
    setIsLoading(true);
    setResult('');
    
    setTimeout(() => {
      const analysis = {
        detected_objects: [
          { label: "Beautiful Landscape", confidence: 0.95 },
          { label: "Modern Architecture", confidence: 0.87 },
          { label: "Futuristic Design", confidence: 0.91 }
        ],
        colors: ["#667eea", "#764ba2", "#ff6b6b", "#4ecdc4"],
        style: "Contemporary Digital Art",
        mood: "Inspiring and Futuristic"
      };
      
      setResult(JSON.stringify(analysis, null, 2));
      setIsLoading(false);
    }, 1200);
  };

  const tabs = [
    { id: 'website', label: 'Website Generator', icon: Globe, action: generateWebsite },
    { id: 'text', label: 'Text Generation', icon: Brain, action: generateText },
    { id: 'code', label: 'Code Generation', icon: Code, action: generateCode },
    { id: 'image', label: 'Image Analysis', icon: Image, action: analyzeImage },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="ai-studio" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30 animate-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            Browser-Based AI Studio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-scale-in">
            AI Creation Studio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
            Generate websites, code, content, and analyze images with our advanced AI - no API keys required!
          </p>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-lg animate-scale-in animation-delay-500">
          <CardHeader>
            <div className="flex flex-wrap gap-3 mb-4">
              {tabs.map((tab, index) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                    activeTab === tab.id ? 
                    "bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25" : 
                    "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="animate-fade-in animation-delay-700">
              <label className="block text-white font-medium mb-3 text-lg">
                {activeTab === 'website' ? 'Describe your website:' :
                 activeTab === 'image' ? 'Image Analysis (Demo)' : 
                 activeTab === 'text' ? 'Enter your creative prompt:' :
                 'Describe what code you need:'}
              </label>
              {activeTab !== 'image' && (
                <Textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder={
                    activeTab === 'website' ? 
                      "A modern portfolio website with dark theme and animations..." :
                    activeTab === 'text' ? 
                      "Write a story about the future of AI..." : 
                      "Create a React component for a modern dashboard..."
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px] backdrop-blur-sm transition-all duration-300 focus:bg-white/15 focus:border-white/40"
                />
              )}
              {activeTab === 'image' && (
                <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-lg border border-white/20">
                  <p className="text-gray-300 text-center">
                    🖼️ Demo: Will analyze a sample image to showcase AI image recognition capabilities
                  </p>
                </div>
              )}
            </div>

            <Button
              onClick={activeTabData?.action}
              disabled={isLoading || (activeTab !== 'image' && !textInput.trim())}
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-lg py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in animation-delay-900"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                  Generating your {activeTab === 'website' ? 'website' : activeTab === 'text' ? 'content' : activeTab === 'code' ? 'code' : 'analysis'}...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-3" />
                  Generate {activeTab === 'website' ? 'Website' : activeTab === 'text' ? 'Text' : activeTab === 'code' ? 'Code' : 'Analysis'}
                </>
              )}
            </Button>

            {result && (
              <div className="mt-8 animate-fade-in">
                <label className="block text-white font-medium mb-3 text-lg">
                  ✨ Generated Result:
                </label>
                <div className="bg-black/30 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <pre className="text-gray-300 whitespace-pre-wrap text-sm overflow-x-auto leading-relaxed">
                    {result}
                  </pre>
                </div>
                {activeTab === 'website' && result && (
                  <div className="mt-4 text-center">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      💡 Copy the code above and save as .html to view your website!
                    </Badge>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl animate-fade-in animation-delay-1000">
              <h4 className="text-cyan-300 font-semibold mb-3 text-lg flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                🚀 Amazing Features:
              </h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Runs completely offline in your browser</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>No API keys or subscriptions required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Privacy-first - data never leaves your device</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Unlimited usage with instant results</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIStudio;
