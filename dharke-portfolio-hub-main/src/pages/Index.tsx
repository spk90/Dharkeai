import { ChartBar, LineChart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:pt-40 md:pb-20">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fadeIn">
            Smart Trading Decisions with AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeIn [animation-delay:200ms]">
            Experience the future of stock trading in Nepal with our AI-powered platform
          </p>
          <div className="flex justify-center gap-4 pt-4 animate-fadeIn [animation-delay:400ms]">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and services to help you make informed investment decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Portfolio Management"
              description="Professional management of your investment portfolio with real-time tracking and optimization"
              icon={<ChartBar className="w-6 h-6 text-primary" />}
              className="animate-fadeIn [animation-delay:200ms]"
              link="/portfolio"
            />
            <ServiceCard
              title="Live Market Data"
              description="Access real-time market data and insights from Nepal Stock Exchange (NEPSE)"
              icon={<LineChart className="w-6 h-6 text-primary" />}
              className="animate-fadeIn [animation-delay:400ms]"
              link="/live-market-data"
            />
            <ServiceCard
              title="AI Technical Analysis"
              description="Advanced technical analysis powered by artificial intelligence for better trading decisions"
              icon={<Brain className="w-6 h-6 text-primary" />}
              className="animate-fadeIn [animation-delay:600ms]"
              link="/analysis"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start Trading Smarter?</h2>
            <p className="text-muted-foreground">
              Join thousands of traders who are already using Dharke.AI to make better investment decisions
            </p>
            <Button size="lg">Create Free Account</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;