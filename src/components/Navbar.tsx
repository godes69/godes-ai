
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignIn = () => {
    console.log("Sign In clicked");
    // Placeholder for future authentication
  };

  const handleNavClick = (section: string) => {
    console.log(`Navigation to ${section} clicked`);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass-effect-strong' : 'glass-effect'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center glass-effect group-hover:animate-glow-pulse transition-all duration-300">
              <Sparkles className="text-purple-400 w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-3xl font-black gradient-text-premium">
              Godes AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }} 
              className="font-medium text-lg text-gray-300 hover:text-purple-400 hover:scale-105 transition-all duration-300"
            >
              Features
            </a>
            <Link 
              to="/chat"
              className={`font-medium text-lg hover:scale-105 transition-all duration-300 ${
                location.pathname === '/chat' 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              AI Chat
            </Link>
            <Button 
              variant="outline" 
              className="glass-effect border-purple-500/30 text-purple-300 hover-glow font-medium px-6"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Link to="/chat">
              <Button className="btn-premium font-medium">
                <Brain className="mr-2 w-5 h-5" />
                Try AI Chat
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="glass-effect hover-glow"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 glass-effect-strong rounded-2xl animate-fade-in-premium">
            <div className="flex flex-col space-y-6 p-6">
              <a 
                href="#features" 
                onClick={(e) => { e.preventDefault(); handleNavClick('features'); }} 
                className="font-medium text-lg text-gray-300 hover:text-purple-400 transition-colors"
              >
                Features
              </a>
              <Link 
                to="/chat"
                className="font-medium text-lg text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Chat
              </Link>
              <div className="flex flex-col space-y-4 pt-4">
                <Button 
                  variant="outline" 
                  className="glass-effect border-purple-500/30 text-purple-300 hover-glow font-medium"
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
                <Link to="/chat">
                  <Button 
                    className="btn-premium font-medium w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Brain className="mr-2 w-5 h-5" />
                    Try AI Chat
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
