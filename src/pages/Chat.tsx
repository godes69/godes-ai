
import { useState, useRef, useEffect } from 'react';
import { PromptInputBox } from '@/components/ui/ai-prompt-box';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles, Bot, User, Globe, BrainCog, FolderCode } from 'lucide-react';
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
    
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      content: message,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    setTimeout(() => {
      let aiResponse = '';
      let responseType: 'text' | 'website' | 'code' | 'image' = 'text';

      if (message.toLowerCase().includes('[search:')) {
        aiResponse = `🔍 **Advanced Web Search Results for "${message.replace(/\[search:\s*|\]/gi, '')}"**\n\nI've performed a comprehensive search across the web using advanced AI algorithms:\n\n✨ **Key Findings:**\n- Latest developments and cutting-edge trends\n- Expert insights from industry leaders\n- Comprehensive analysis and data points\n- Real-time information and updates\n\n**Sources analyzed:** Academic papers, news articles, technical documentation, and expert forums.\n\n*Note: This represents an advanced AI search capability that would connect to live web data in a production environment.*`;
      } else if (message.toLowerCase().includes('[think:')) {
        aiResponse = `🧠 **Deep Cognitive Analysis: "${message.replace(/\[think:\s*|\]/gi, '')}"**\n\nEngaging advanced reasoning protocols...\n\n**🔬 Analytical Framework:**\n\n**Phase 1: Decomposition**\n- Breaking down core components and variables\n- Identifying key relationships and dependencies\n- Mapping causal chains and feedback loops\n\n**Phase 2: Multi-Perspective Analysis**\n- Examining from technical, practical, and strategic angles\n- Considering edge cases and potential failure modes\n- Evaluating long-term implications and ripple effects\n\n**Phase 3: Synthesis & Insights**\n- Integrating findings into actionable intelligence\n- Generating novel solutions and optimizations\n- Providing strategic recommendations\n\n**🎯 Conclusion:** Advanced cognitive processing complete. Ready to discuss deeper implications or explore specific aspects further.`;
      } else if (message.toLowerCase().includes('[canvas:')) {
        responseType = 'website';
        aiResponse = `🎨 **Ultra-Premium Website Generated: "${message.replace(/\[canvas:\s*|\]/gi, '')}"**\n\nI've created a stunning, next-generation website with advanced animations and premium design:\n\n\`\`\`html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>${message.replace(/\[canvas:\s*|\]/gi, '') || 'AI Generated Premium Website'}</title>\n    <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n        body {\n            font-family: 'Inter', -apple-system, sans-serif;\n            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);\n            min-height: 100vh;\n            overflow-x: hidden;\n        }\n        .container {\n            position: relative;\n            min-height: 100vh;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding: 2rem;\n        }\n        .hero-card {\n            background: rgba(15, 15, 23, 0.8);\n            backdrop-filter: blur(20px);\n            border: 1px solid rgba(139, 92, 246, 0.3);\n            border-radius: 24px;\n            padding: 4rem;\n            text-align: center;\n            max-width: 800px;\n            box-shadow: \n                0 20px 40px rgba(0, 0, 0, 0.6),\n                0 0 60px rgba(139, 92, 246, 0.2);\n            animation: slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1);\n        }\n        @keyframes slideInUp {\n            from {\n                opacity: 0;\n                transform: translateY(60px) scale(0.9);\n            }\n            to {\n                opacity: 1;\n                transform: translateY(0) scale(1);\n            }\n        }\n        .floating-orb {\n            position: absolute;\n            border-radius: 50%;\n            filter: blur(40px);\n            animation: float 6s ease-in-out infinite;\n        }\n        @keyframes float {\n            0%, 100% { transform: translateY(0) rotate(0deg); }\n            50% { transform: translateY(-20px) rotate(180deg); }\n        }\n        .orb1 {\n            width: 200px;\n            height: 200px;\n            background: linear-gradient(135deg, #8b5cf6, #06b6d4);\n            top: 20%;\n            left: 10%;\n            animation-delay: 0s;\n        }\n        .orb2 {\n            width: 150px;\n            height: 150px;\n            background: linear-gradient(135deg, #ec4899, #f59e0b);\n            top: 60%;\n            right: 15%;\n            animation-delay: 2s;\n        }\n        h1 {\n            font-size: 4rem;\n            font-weight: 900;\n            background: linear-gradient(135deg, #8b5cf6, #06b6d4);\n            background-clip: text;\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            margin-bottom: 2rem;\n            animation: textGlow 2s ease-in-out infinite;\n        }\n        @keyframes textGlow {\n            0%, 100% {\n                filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));\n            }\n            50% {\n                filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.8));\n            }\n        }\n        p {\n            font-size: 1.5rem;\n            color: #e5e7eb;\n            margin-bottom: 3rem;\n            line-height: 1.6;\n        }\n        .premium-btn {\n            background: linear-gradient(135deg, #8b5cf6, #06b6d4);\n            border: none;\n            padding: 1rem 3rem;\n            border-radius: 16px;\n            color: white;\n            font-size: 1.2rem;\n            font-weight: 600;\n            cursor: pointer;\n            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n            box-shadow: 0 8px 30px rgba(139, 92, 246, 0.3);\n        }\n        .premium-btn:hover {\n            transform: translateY(-4px) scale(1.05);\n            box-shadow: 0 12px 40px rgba(139, 92, 246, 0.5);\n        }\n        @media (max-width: 768px) {\n            h1 { font-size: 2.5rem; }\n            p { font-size: 1.2rem; }\n            .hero-card { padding: 2rem; }\n        }\n    </style>\n</head>\n<body>\n    <div class="container">\n        <div class="floating-orb orb1"></div>\n        <div class="floating-orb orb2"></div>\n        <div class="hero-card">\n            <h1>${message.replace(/\[canvas:\s*|\]/gi, '') || 'Welcome to the Future'}</h1>\n            <p>Experience the next generation of AI-powered web design. This stunning website features advanced animations, premium glassmorphism effects, and responsive design that adapts to any device.</p>\n            <button class="premium-btn" onclick="alert('Welcome to your AI-generated premium website!')">Explore Now</button>\n        </div>\n    </div>\n    <script>\n        // Add some interactive particles\n        function createParticle() {\n            const particle = document.createElement('div');\n            particle.style.cssText = \\`\n                position: absolute;\n                width: 4px;\n                height: 4px;\n                background: #8b5cf6;\n                border-radius: 50%;\n                pointer-events: none;\n                animation: particleFloat 4s linear infinite;\n                left: \\${Math.random() * 100}%;\n                top: 100%;\n            \\`;\n            document.body.appendChild(particle);\n            setTimeout(() => particle.remove(), 4000);\n        }\n        \n        // Create particles periodically\n        setInterval(createParticle, 200);\n        \n        // Add particle animation\n        const style = document.createElement('style');\n        style.textContent = \\`\n            @keyframes particleFloat {\n                to {\n                    transform: translateY(-100vh) rotate(360deg);\n                    opacity: 0;\n                }\n            }\n        \\`;\n        document.head.appendChild(style);\n    </script>\n</body>\n</html>\n\`\`\`\n\n✨ **Premium Features Included:**\n- Ultra-modern glassmorphism design\n- Advanced CSS animations and transitions\n- Floating particle effects\n- Responsive design for all devices\n- Interactive hover effects\n- Premium color gradients and typography\n- Optimized performance and accessibility`;
      } else if (message.toLowerCase().includes('code') || message.toLowerCase().includes('function') || message.toLowerCase().includes('component')) {
        responseType = 'code';
        aiResponse = `💻 **Advanced Code Generation Complete**\n\nI've created sophisticated, production-ready code for your request:\n\n\`\`\`typescript\n// Ultra-Premium React Component with Advanced Features\nimport React, { useState, useEffect, useRef } from 'react';\nimport { motion, useAnimation, useInView } from 'framer-motion';\n\ninterface UltraPremiumComponentProps {\n  title: string;\n  description?: string;\n  variant?: 'primary' | 'secondary' | 'premium';\n  onInteract?: (data: any) => void;\n}\n\nconst UltraPremiumComponent: React.FC<UltraPremiumComponentProps> = ({\n  title,\n  description,\n  variant = 'primary',\n  onInteract\n}) => {\n  const [isHovered, setIsHovered] = useState(false);\n  const [particleCount, setParticleCount] = useState(0);\n  const controls = useAnimation();\n  const ref = useRef(null);\n  const isInView = useInView(ref, { once: true });\n\n  useEffect(() => {\n    if (isInView) {\n      controls.start({\n        opacity: 1,\n        y: 0,\n        scale: 1,\n        filter: 'blur(0px)',\n        transition: {\n          duration: 0.8,\n          ease: [0.16, 1, 0.3, 1]\n        }\n      });\n    }\n  }, [isInView, controls]);\n\n  const variantStyles = {\n    primary: 'from-purple-600 to-cyan-500',\n    secondary: 'from-pink-500 to-orange-400',\n    premium: 'from-purple-600 via-pink-500 to-cyan-500'\n  };\n\n  const handleInteraction = () => {\n    setParticleCount(prev => prev + 10);\n    onInteract?.({ \n      timestamp: Date.now(), \n      variant, \n      title,\n      interaction: 'click'\n    });\n    \n    // Trigger premium animation\n    controls.start({\n      scale: [1, 1.05, 1],\n      rotate: [0, 1, 0],\n      transition: { duration: 0.3 }\n    });\n  };\n\n  return (\n    <motion.div\n      ref={ref}\n      initial={{ opacity: 0, y: 60, scale: 0.9, filter: 'blur(10px)' }}\n      animate={controls}\n      className={\\`\n        relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl\n        bg-gradient-to-br \\${variantStyles[variant]}\n        shadow-2xl border border-white/20\n        hover:shadow-4xl transition-all duration-500\n        group cursor-pointer\n      \\`}\n      onMouseEnter={() => setIsHovered(true)}\n      onMouseLeave={() => setIsHovered(false)}\n      onClick={handleInteraction}\n      whileHover={{ \n        scale: 1.02, \n        y: -5,\n        transition: { duration: 0.3 }\n      }}\n      whileTap={{ scale: 0.98 }}\n    >\n      {/* Premium background effects */}\n      <div className=\"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent\" />\n      <div className=\"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent\" />\n      \n      {/* Floating particles */}\n      {Array.from({ length: particleCount }).map((_, i) => (\n        <motion.div\n          key={i}\n          className=\"absolute w-1 h-1 bg-white rounded-full\"\n          initial={{ \n            x: Math.random() * 300, \n            y: Math.random() * 200, \n            opacity: 1 \n          }}\n          animate={{ \n            y: -100, \n            opacity: 0,\n            transition: { duration: 2, delay: i * 0.1 }\n          }}\n          onAnimationComplete={() => \n            setParticleCount(prev => Math.max(0, prev - 1))\n          }\n        />\n      ))}\n      \n      {/* Content */}\n      <div className=\"relative z-10\">\n        <motion.h2 \n          className=\"text-4xl font-black text-white mb-4 leading-tight\"\n          animate={{ \n            textShadow: isHovered \n              ? '0 0 20px rgba(255,255,255,0.8)' \n              : '0 0 10px rgba(255,255,255,0.3)'\n          }}\n        >\n          {title}\n        </motion.h2>\n        \n        {description && (\n          <motion.p \n            className=\"text-white/90 text-lg leading-relaxed mb-6\"\n            initial={{ opacity: 0 }}\n            animate={{ opacity: 1 }}\n            transition={{ delay: 0.2 }}\n          >\n            {description}\n          </motion.p>\n        )}\n        \n        <motion.button\n          className={\\`\n            px-8 py-4 bg-white/20 backdrop-blur-sm rounded-2xl\n            text-white font-semibold border border-white/30\n            hover:bg-white/30 hover:border-white/50\n            transition-all duration-300 group-hover:scale-105\n          \\`}\n          whileHover={{ scale: 1.05 }}\n          whileTap={{ scale: 0.95 }}\n        >\n          Interact Now →\n        </motion.button>\n      </div>\n      \n      {/* Premium shimmer effect */}\n      <motion.div\n        className=\"absolute inset-0 opacity-0 group-hover:opacity-100\"\n        style={{\n          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',\n        }}\n        animate={{\n          x: isHovered ? ['-100%', '100%'] : '-100%',\n          transition: { duration: 1.5, ease: 'easeInOut' }\n        }}\n      />\n    </motion.div>\n  );\n};\n\nexport default UltraPremiumComponent;\n\`\`\`\n\n🚀 **Advanced Features:**\n- Framer Motion animations with spring physics\n- Advanced TypeScript patterns and interfaces\n- Performance-optimized with React hooks\n- Accessibility-focused design\n- Responsive and touch-friendly\n- Premium visual effects and micro-interactions\n- Modular and extensible architecture\n- Production-ready code quality`;
      } else {
        aiResponse = `🌟 **Welcome to Godes AI - The Ultimate AI Experience**\n\nHello! I'm your advanced AI assistant, powered by next-generation artificial intelligence. I'm designed to be your ultimate digital companion with limitless capabilities:\n\n🧠 **Core Capabilities:**\n- **Advanced Reasoning**: Deep analytical thinking and problem-solving\n- **Creative Generation**: Websites, applications, content, and designs\n- **Code Development**: Full-stack development in any programming language\n- **Multilingual Communication**: Fluent in every human and programming language\n- **Real-time Learning**: Continuous improvement and adaptation\n\n✨ **Specialized Functions:**\n🔍 **[Search: query]** - Advanced web search with AI analysis\n🧠 **[Think: topic]** - Deep cognitive analysis and reasoning\n🎨 **[Canvas: idea]** - Generate complete websites and applications\n\n💬 **Natural Conversation**: Just chat with me naturally! I understand context, nuance, and can help with anything from simple questions to complex projects.\n\n🌐 **What would you like to create together today?** I'm here to help you build, learn, solve problems, or explore any topic you're curious about. My capabilities are virtually unlimited!`;
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
    }, Math.random() * 2000 + 1500);
  };

  const formatMessage = (content: string) => {
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-300">$1</strong>');
    content = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<div class="neu-inset rounded-xl p-6 my-6 overflow-x-auto"><pre class="text-cyan-300 text-sm font-mono"><code>${code.trim()}</code></pre></div>`;
    });
    content = content.replace(/`([^`]+)`/g, '<code class="glass-effect px-3 py-1 rounded-lg text-sm font-mono text-purple-300">$1</code>');
    content = content.replace(/\n/g, '<br>');
    return content;
  };

  return (
    <div className="min-h-screen glass-effect flex flex-col">
      {/* Ultra-premium header */}
      <div className="glass-effect-strong border-b border-white/10 p-6">
        <div className="container mx-auto flex items-center gap-6">
          <Link to="/">
            <Button variant="ghost" size="icon" className="hover-glow">
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center glass-effect animate-glow-pulse">
              <Sparkles className="w-7 h-7 text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl font-black gradient-text-premium">Godes AI Chat</h1>
              <p className="text-gray-400">Your limitless AI companion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages container with premium effects */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto p-6">
          <div className="container mx-auto max-w-5xl space-y-8">
            {messages.length === 0 && (
              <div className="text-center py-20 animate-fade-in-premium">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 glass-effect animate-float-premium">
                  <Bot className="w-12 h-12 text-purple-400" />
                </div>
                <h2 className="text-4xl font-black gradient-text-premium mb-6">Welcome to Godes AI</h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Experience the most advanced AI assistant ever created. I can generate websites, write code, 
                  analyze complex problems, search the web, and help with absolutely anything you can imagine.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="neu-card p-8 rounded-2xl hover-lift">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 glass-effect">
                      <Globe className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-4">Web Search</h3>
                    <p className="text-gray-400">Use [Search: query] for advanced web research</p>
                  </div>
                  <div className="neu-card p-8 rounded-2xl hover-lift">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 glass-effect">
                      <BrainCog className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-4">Deep Analysis</h3>
                    <p className="text-gray-400">Use [Think: topic] for cognitive reasoning</p>
                  </div>
                  <div className="neu-card p-8 rounded-2xl hover-lift">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 glass-effect">
                      <FolderCode className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-4">Create & Code</h3>
                    <p className="text-gray-400">Use [Canvas: idea] to generate websites</p>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-6 ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-premium`}
              >
                {message.sender === 'ai' && (
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center glass-effect flex-shrink-0">
                    <Bot className="w-6 h-6 text-purple-400" />
                  </div>
                )}
                
                <div
                  className={`max-w-4xl rounded-3xl px-8 py-6 ${
                    message.sender === 'user'
                      ? 'glass-effect border border-purple-500/30'
                      : 'neu-card'
                  } hover-lift`}
                >
                  <div
                    className="prose prose-invert max-w-none text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                  />
                  <div className="mt-4 text-sm text-gray-500">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>

                {message.sender === 'user' && (
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center glass-effect flex-shrink-0">
                    <User className="w-6 h-6 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-6 justify-start animate-fade-in-premium">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center glass-effect flex-shrink-0">
                  <Bot className="w-6 h-6 text-purple-400" />
                </div>
                <div className="neu-card rounded-3xl px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-gray-400">AI is thinking deeply...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Premium input container */}
      <div className="glass-effect-strong border-t border-white/10 p-6">
        <div className="container mx-auto max-w-5xl">
          <PromptInputBox
            onSend={handleSendMessage}
            isLoading={isLoading}
            placeholder="Ask me anything... I can create websites, write code, search the web, and much more!"
            className="hover-glow"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
