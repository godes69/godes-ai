
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Godes AI
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The future of AI-powered creation. Generate websites, games, images, and 3D models 
              with unlimited usage, completely free.
            </p>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              🌱 100% Free Forever
            </Badge>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Website Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Game Creator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Image Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">3D Modeler</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Godes AI. Built with ❤️ for creators worldwide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
