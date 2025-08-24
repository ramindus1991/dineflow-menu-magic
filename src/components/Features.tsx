import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Smartphone, BarChart3, Settings, CreditCard, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: QrCode,
      title: "QR Code Menus",
      description: "Customers scan QR codes to instantly access your digital menu on their phones. No app downloads required.",
    },
    {
      icon: Smartphone,
      title: "Mobile Ordering",
      description: "Seamless mobile ordering experience with real-time updates and order tracking for customers.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into sales, popular items, peak hours, and customer behavior patterns.",
    },
    {
      icon: Settings,
      title: "Easy Menu Management",
      description: "Update menus, prices, and availability in real-time. Changes reflect instantly across all QR codes.",
    },
    {
      icon: CreditCard,
      title: "Integrated Payments",
      description: "Secure payment processing with support for all major payment methods and digital wallets.",
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Manage orders, kitchen workflow, and staff assignments from a centralized admin dashboard.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Modernize Your Restaurant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DineFlow provides a complete solution for restaurants to embrace digital transformation 
            and enhance customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-accent/50"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;