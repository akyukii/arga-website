import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 rounded-full bg-black border border-white/20">
          <p className="text-sm font-mono text-white">
            Expanding the Frontier  of Agentic Systems
          </p>
        </div>
        
        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold tracking-tighter">
          The DevOps Engineer
          <br />
          for Agentic Systems
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        AI can write code. Arga helps it ship. We handle versioning, context, and debugging so agentic systems can help teams move from prototypes to production faster than ever.
        </p>
        
        <div className="flex justify-center pt-4">
          <Button size="lg" className="text-base group bg-black text-white hover:bg-black/90 border border-white/20" asChild>
            <a href="#cta">
              Request early access
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
