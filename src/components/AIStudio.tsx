
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIStudio = () => {
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
            Next-Generation AI Chat
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-scale-in">
            Unified AI Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
            Experience the power of AI in one seamless chat interface. Generate websites, search the web, 
            create code, analyze images, and more - all through natural conversation.
          </p>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-lg animate-scale-in animation-delay-500">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-4">
              AI Chat Interface
            </CardTitle>
            <p className="text-gray-300 text-lg">
              One chat to rule them all. No more switching between different tools and tabs.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
                <h4 className="text-cyan-300 font-semibold mb-3 text-lg flex items-center">
                  🔍 Smart Prefixes
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div><code className="bg-gray-800 px-2 py-1 rounded">[Search: query]</code> - Web search</div>
                  <div><code className="bg-gray-800 px-2 py-1 rounded">[Think: topic]</code> - Deep analysis</div>
                  <div><code className="bg-gray-800 px-2 py-1 rounded">[Canvas: idea]</code> - Website generation</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <h4 className="text-pink-300 font-semibold mb-3 text-lg flex items-center">
                  ⚡ Instant Generation
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Complete websites in seconds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Code generation & debugging</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Image analysis & insights</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/chat">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-3" />
                  Launch AI Chat
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 p-6 rounded-xl border border-green-500/20">
              <h4 className="text-green-300 font-semibold mb-3 text-lg flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                🚀 Key Features:
              </h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Natural conversation interface</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Multi-modal capabilities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Real-time responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Unlimited usage</span>
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
