
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLElement).style.color = 'var(--primary-accent)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLElement).style.color = 'var(--secondary-text)';
  };

  return (
    <footer className="section-light border-t py-16 px-6" style={{ borderColor: 'var(--border-color)' }}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold gradient-text">
                Godes AI
              </span>
            </div>
            <p className="mb-6 max-w-md leading-relaxed" style={{ color: 'var(--secondary-text)' }}>
              The future of AI-powered creation. Generate websites, games, images, and 3D models 
              with unlimited usage, completely free.
            </p>
            <Badge className="bg-green-50 text-green-700 border border-green-200 px-4 py-2 font-medium">
              🌱 100% Free Forever
            </Badge>
          </div>
          
          <div>
            <h4 className="font-bold mb-6" style={{ color: 'var(--primary-text)' }}>Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors duration-400 hover:underline" style={{ color: 'var(--secondary-text)' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Website Generator</a></li>
              <li><a href="#" className="transition-colors duration-400 hover:underline" style={{ color: 'var(--secondary-text)' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Game Creator</a></li>
              <li><a href="#" className="transition-colors duration-400 hover:underline" style={{ color: 'var(--secondary-text)' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Image Studio</a></li>
              <li><a href="#" className="transition-colors duration-400 hover:underline" style={{ color: 'var(--secondary-text)' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>3D Modeler</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6" style={{ color: 'var(--primary-text)' }}>Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors duration-400 hover:underline" style={{ color: 'var(--secondary-text)' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Documentation</a></li>
              <li><a href="#" className="transition-colors duration-400 hover:underline" style={{ color: 'var(--secondary-text)' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Tutorials</a></li>
              <li><a href="#" className="transition-colors duration-400 hover:underline" style={{ color: 'var(--secondary-text)' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Community</a></li>
              <li><a href="#" className="transition-colors duration-400 hover:underline" style={{ color: 'var(--secondary-text)' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: 'var(--border-color)' }}>
          <p className="flex items-center justify-center gap-2" style={{ color: 'var(--secondary-text)' }}>
            © 2024 Godes AI. Built with <Heart className="w-4 h-4 text-red-500" /> for creators worldwide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
