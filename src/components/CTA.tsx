import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Transform Your Restaurant?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join thousands of restaurants already using DineFlow to streamline operations, 
          boost revenue, and delight customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="accent" size="lg" className="text-lg px-8 py-6 shadow-glow">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-6">
            Schedule Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-primary-foreground/80">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-accent-glow" />
            14-day free trial
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-accent-glow" />
            No setup fees
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-accent-glow" />
            Cancel anytime
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent-glow/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-glow/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default CTA;