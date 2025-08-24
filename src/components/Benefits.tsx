import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Users, Shield, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Boost sales by 25% with upselling features and streamlined ordering process.",
      stat: "25% Revenue Increase",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce order processing time and eliminate manual menu printing costs.",
      stat: "60% Time Saved",
    },
    {
      icon: DollarSign,
      title: "Lower Costs",
      description: "Cut printing costs and reduce staff needed for order taking.",
      stat: "40% Cost Reduction",
    },
    {
      icon: Users,
      title: "Better Experience",
      description: "Enhance customer satisfaction with contactless, efficient service.",
      stat: "95% Customer Satisfaction",
    },
    {
      icon: Shield,
      title: "Contactless & Safe",
      description: "Promote hygiene with touchless ordering and payment solutions.",
      stat: "100% Contactless",
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Update menus, prices, and availability in real-time across all locations.",
      stat: "Real-time Updates",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Restaurants Choose 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> DineFlow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of restaurants that have transformed their operations and 
            delighted customers with our smart QR menu system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {benefit.stat}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;