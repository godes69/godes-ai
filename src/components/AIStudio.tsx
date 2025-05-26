import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2, Brain, Image, Code, Zap } from 'lucide-react';

const AIStudio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [result, setResult] = useState('');
  const [activeTab, setActiveTab] = useState('text');

  const generateText = async () => {
    setIsLoading(true);
    setResult('');
    
    try {
      // Dynamic import to avoid loading the large library until needed
      const { pipeline } = await import('@huggingface/transformers');
      
      // Create a text generation pipeline
      const generator = await pipeline('text-generation', 'Xenova/gpt2', {
        device: 'webgpu'
      });
      
      const output = await generator(textInput, {
        max_new_tokens: 100,
        temperature: 0.7,
        do_sample: true,
      });
      
      // Handle the output correctly - it's an array with generated_text property
      const generatedText = Array.isArray(output) ? output[0]?.generated_text || output[0]?.text || JSON.stringify(output[0]) : String(output);
      setResult(generatedText);
    } catch (error) {
      console.error('Text generation error:', error);
      setResult('Error generating text. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateCode = async () => {
    setIsLoading(true);
    setResult('');
    
    try {
      const { pipeline } = await import('@huggingface/transformers');
      
      const generator = await pipeline('text-generation', 'Xenova/codegen-350M-mono', {
        device: 'webgpu'
      });
      
      const output = await generator(textInput, {
        max_new_tokens: 150,
        temperature: 0.3,
        do_sample: true,
      });
      
      // Handle the output correctly - it's an array with generated_text property
      const generatedText = Array.isArray(output) ? output[0]?.generated_text || output[0]?.text || JSON.stringify(output[0]) : String(output);
      setResult(generatedText);
    } catch (error) {
      console.error('Code generation error:', error);
      setResult('Error generating code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const analyzeImage = async () => {
    setIsLoading(true);
    setResult('');
    
    try {
      const { pipeline } = await import('@huggingface/transformers');
      
      const classifier = await pipeline('image-classification', 'Xenova/vit-base-patch16-224', {
        device: 'webgpu'
      });
      
      // For demo purposes, we'll use a placeholder image URL
      const imageUrl = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400';
      const output = await classifier(imageUrl);
      
      setResult(JSON.stringify(output.slice(0, 3), null, 2));
    } catch (error) {
      console.error('Image analysis error:', error);
      setResult('Error analyzing image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'text', label: 'Text Generation', icon: Brain, action: generateText },
    { id: 'code', label: 'Code Generation', icon: Code, action: generateCode },
    { id: 'image', label: 'Image Analysis', icon: Image, action: analyzeImage },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="ai-studio" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
            🧠 Browser-Based AI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Studio
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent block">
              No API Keys Required
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powered by WebGPU and Transformers.js - AI models running directly in your browser
          </p>
        </div>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-4">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={activeTab === tab.id ? 
                    "bg-gradient-to-r from-green-500 to-cyan-500" : 
                    "border-white/20 text-white hover:bg-white/10"
                  }
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                {activeTab === 'image' ? 'Image Analysis (Demo)' : 'Enter your prompt:'}
              </label>
              {activeTab !== 'image' && (
                <Textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder={
                    activeTab === 'text' ? 
                      "Write a story about..." : 
                      "Create a function that..."
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                />
              )}
              {activeTab === 'image' && (
                <p className="text-gray-300 bg-white/10 p-4 rounded-md">
                  Demo: Will analyze a sample cat image to show image classification capabilities
                </p>
              )}
            </div>

            <Button
              onClick={activeTabData?.action}
              disabled={isLoading || (activeTab !== 'image' && !textInput.trim())}
              className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Generate
                </>
              )}
            </Button>

            {result && (
              <div className="mt-6">
                <label className="block text-white font-medium mb-2">Result:</label>
                <div className="bg-white/10 border border-white/20 rounded-md p-4">
                  <pre className="text-gray-300 whitespace-pre-wrap text-sm overflow-x-auto">
                    {result}
                  </pre>
                </div>
              </div>
            )}

            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-md">
              <h4 className="text-blue-300 font-medium mb-2">🚀 Features:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Runs completely in your browser</li>
                <li>• No API keys or external services required</li>
                <li>• Powered by WebGPU for fast performance</li>
                <li>• Privacy-first - data never leaves your device</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIStudio;
