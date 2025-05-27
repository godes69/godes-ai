
import { useState, useRef, useEffect } from 'react';
import { PromptInputBox } from '@/components/ui/ai-prompt-box';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles, Bot, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'website' | 'code' | 'image';
}

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string, files?: File[]) => {
    console.log('Sending message:', message, files);
    
    // Add user message
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      content: message,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response based on message type
    setTimeout(() => {
      let aiResponse = '';
      let responseType: 'text' | 'website' | 'code' | 'image' = 'text';

      if (message.toLowerCase().includes('[search:')) {
        aiResponse = `I've searched the web for information about "${message.replace(/\[search:\s*|\]/gi, '')}". Based on current web results, here's what I found:\n\n✨ **Key Information:**\n- Latest developments and trends\n- Expert insights and analysis\n- Relevant resources and references\n\nThis is a simulated search response. In a real implementation, this would connect to actual search APIs.`;
      } else if (message.toLowerCase().includes('[think:')) {
        aiResponse = `🧠 **Deep Analysis of "${message.replace(/\[think:\s*|\]/gi, '')}"**\n\nLet me think through this step by step:\n\n**Step 1: Understanding the Core Concept**\n- Breaking down the fundamental elements\n- Identifying key relationships and patterns\n\n**Step 2: Critical Analysis**\n- Examining different perspectives\n- Considering potential implications\n\n**Step 3: Synthesis**\n- Drawing meaningful conclusions\n- Providing actionable insights\n\nThis represents a thoughtful, analytical approach to your query.`;
      } else if (message.toLowerCase().includes('[canvas:')) {
        responseType = 'website';
        aiResponse = `🎨 **Website Generated for "${message.replace(/\[canvas:\s*|\]/gi, '')}"**\n\nI've created a beautiful, responsive website based on your request:\n\n\`\`\`html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>${message.replace(/\[canvas:\s*|\]/gi, '') || 'AI Generated Website'}</title>\n    <style>\n        * { margin: 0; padding: 0; box-sizing: border-box; }\n        body {\n            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;\n            background: linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%);\n            min-height: 100vh;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: #1A1A1A;\n        }\n        .container {\n            background: rgba(255, 255, 255, 0.95);\n            backdrop-filter: blur(20px);\n            border-radius: 24px;\n            padding: 3rem;\n            text-align: center;\n            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n            animation: fadeInUp 0.8s ease-out;\n        }\n        @keyframes fadeInUp {\n            from { opacity: 0; transform: translateY(30px); }\n            to { opacity: 1; transform: translateY(0); }\n        }\n        h1 {\n            font-size: 3.5rem;\n            font-weight: 700;\n            margin-bottom: 1.5rem;\n            background: linear-gradient(135deg, #4A90E2, #50E3C2);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n        }\n        p {\n            font-size: 1.25rem;\n            color: #4A4A4A;\n            margin-bottom: 2rem;\n            line-height: 1.6;\n        }\n        .btn {\n            background: linear-gradient(135deg, #4A90E2, #50E3C2);\n            color: white;\n            border: none;\n            padding: 1rem 2.5rem;\n            border-radius: 50px;\n            font-size: 1.1rem;\n            font-weight: 500;\n            cursor: pointer;\n            transition: all 0.3s ease;\n        }\n        .btn:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 25px rgba(74, 144, 226, 0.3);\n        }\n    </style>\n</head>\n<body>\n    <div class="container">\n        <h1>${message.replace(/\[canvas:\s*|\]/gi, '') || 'Welcome'}</h1>\n        <p>This beautiful, modern website was generated using advanced AI technology. Fully responsive design with smooth animations and a professional look.</p>\n        <button class="btn" onclick="alert('Hello from your AI-generated website!')">Explore More</button>\n    </div>\n</body>\n</html>\n\`\`\`\n\n✨ **Features included:**\n- Modern glassmorphism design\n- Responsive layout\n- Smooth animations\n- Professional typography\n- Interactive elements`;
      } else if (message.toLowerCase().includes('code') || message.toLowerCase().includes('function') || message.toLowerCase().includes('component')) {
        responseType = 'code';
        aiResponse = `💻 **Code Generated for your request:**\n\n\`\`\`typescript\n// Modern React Component\nimport React from 'react';\n\ninterface Props {\n  title: string;\n  description?: string;\n}\n\nconst GeneratedComponent: React.FC<Props> = ({ title, description }) => {\n  return (\n    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-2xl shadow-xl">\n      <h2 className="text-3xl font-bold text-white mb-4">\n        {title}\n      </h2>\n      {description && (\n        <p className="text-blue-100 text-lg leading-relaxed">\n          {description}\n        </p>\n      )}\n      <button \n        className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"\n        onClick={() => console.log('Generated component clicked!')}\n      >\n        Interact\n      </button>\n    </div>\n  );\n};\n\nexport default GeneratedComponent;\n\`\`\`\n\n🚀 **Features:**\n- TypeScript support\n- Modern React patterns\n- Responsive design\n- Interactive elements\n- Clean, maintainable code`;
      } else {
        aiResponse = `Hello! I'm your AI assistant powered by Godes AI. I can help you with:\n\n🌐 **Website Generation** - Use [Canvas: description] to generate complete websites\n🔍 **Web Search** - Use [Search: query] to search the internet\n🧠 **Deep Thinking** - Use [Think: topic] for analytical responses\n💻 **Code Generation** - Ask for any programming help\n🎨 **Creative Tasks** - Image analysis, content creation, and more\n\nWhat would you like me to help you with today?`;
      }

      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
        type: responseType,
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, Math.random() * 2000 + 1000); // Random delay between 1-3 seconds
  };

  const formatMessage = (content: string) => {
    // Convert **bold** to actual bold
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert code blocks
    content = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<div class="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto"><pre class="text-green-400 text-sm"><code>${code.trim()}</code></pre></div>`;
    });

    // Convert inline code
    content = content.replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-2 py-1 rounded text-sm font-mono">$1</code>');
    
    // Convert line breaks
    content = content.replace(/\n/g, '<br>');
    
    return content;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex flex-col">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Godes AI Chat</h1>
              <p className="text-sm text-gray-300">Your intelligent assistant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto p-4">
          <div className="container mx-auto max-w-4xl space-y-6">
            {messages.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Welcome to Godes AI</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  I'm your advanced AI assistant. I can help you create websites, generate code, search the web, 
                  analyze images, and much more. Try using prefixes like [Search:], [Think:], or [Canvas:] for specialized tasks.
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Web Search</h3>
                    <p className="text-sm text-gray-300">Use [Search: query] to search the internet</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mb-3">
                      <BrainCog className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Deep Analysis</h3>
                    <p className="text-sm text-gray-300">Use [Think: topic] for detailed analysis</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mb-3">
                      <FolderCode className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Create & Code</h3>
                    <p className="text-sm text-gray-300">Use [Canvas: idea] to generate websites</p>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'ai' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={`max-w-3xl rounded-2xl px-6 py-4 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white'
                  }`}
                >
                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                  />
                  <div className="mt-3 text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>

                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-white/70 text-sm">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Container */}
      <div className="bg-black/20 backdrop-blur-lg border-t border-white/10 p-4">
        <div className="container mx-auto max-w-4xl">
          <PromptInputBox
            onSend={handleSendMessage}
            isLoading={isLoading}
            placeholder="Type your message here... Try [Search:], [Think:], or [Canvas:] for specialized tasks"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
