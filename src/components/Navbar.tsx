import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              DineFlow
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-foreground hover:text-accent transition-colors">
                Features
              </a>
              <a href="#benefits" className="text-foreground hover:text-accent transition-colors">
                Benefits
              </a>
              <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-accent">
                Features
              </a>
              <a href="#benefits" className="block px-3 py-2 text-foreground hover:text-accent">
                Benefits
              </a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-accent">
                Pricing
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-accent">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button variant="hero" className="justify-start">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;