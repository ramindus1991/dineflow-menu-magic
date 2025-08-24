import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-restaurant.jpg";
import ContactForm from "./ContactForm";

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Modern restaurant with QR menu system"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Transform Your Restaurant with
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Smart QR Menus
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline your dining experience with DineFlow's innovative QR-based menu system. 
            Let customers browse, order, and pay seamlessly while you manage everything from one powerful dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => setIsContactOpen(true)}
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="text-primary-foreground/80 text-sm">
            ✓ No setup fees  ✓ 6 months free trial  ✓ Full support included
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent-glow/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
};

export default Hero;