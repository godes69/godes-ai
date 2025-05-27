
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignIn = () => {
    console.log("Sign In clicked");
    alert("Sign In feature coming soon!");
  };

  const handleGetStarted = () => {
    console.log("Get Started clicked");
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (section: string) => {
    console.log(`Navigation to ${section} clicked`);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = 'var(--primary-accent)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = 'var(--secondary-text)';
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b" style={{ borderColor: 'var(--border-color)' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              Godes AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }} 
              className="font-medium transition-all duration-400 hover:scale-105" 
              style={{ color: 'var(--secondary-text)' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Features
            </a>
            <Link 
              to="/chat"
              className="font-medium transition-all duration-400 hover:scale-105" 
              style={{ color: 'var(--secondary-text)' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              AI Chat
            </Link>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }} 
              className="font-medium transition-all duration-400 hover:scale-105" 
              style={{ color: 'var(--secondary-text)' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About
            </a>
            <Button 
              variant="outline" 
              className="border-2 hover:bg-white/50 transition-all duration-400 font-medium"
              style={{ borderColor: 'var(--primary-accent)', color: 'var(--primary-accent)' }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Link to="/chat">
              <Button 
                className="btn-primary font-medium shadow-lg"
              >
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
              className="transition-all duration-400 hover:bg-white/20"
              style={{ color: 'var(--primary-text)' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t animate-fade-in-up" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex flex-col space-y-4 mt-4">
              <a 
                href="#features" 
                onClick={(e) => { e.preventDefault(); handleNavClick('features'); }} 
                className="font-medium transition-colors duration-400" 
                style={{ color: 'var(--secondary-text)' }}
              >
                Features
              </a>
              <Link 
                to="/chat"
                className="font-medium transition-colors duration-400" 
                style={{ color: 'var(--secondary-text)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                AI Chat
              </Link>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); handleNavClick('features'); }} 
                className="font-medium transition-colors duration-400" 
                style={{ color: 'var(--secondary-text)' }}
              >
                About
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="outline" 
                  className="border-2 hover:bg-white/50 transition-all duration-400 font-medium"
                  style={{ borderColor: 'var(--primary-accent)', color: 'var(--primary-accent)' }}
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
                <Link to="/chat">
                  <Button 
                    className="btn-primary font-medium w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
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
