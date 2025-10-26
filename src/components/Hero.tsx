import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
          <p className="text-sm font-mono text-muted-foreground">
            Automated failure analysis for production systems
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
          Fix production before
          <br />
          you get paged
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          When something breaks after deployment, Arga automatically correlates failures with recent PRs, 
          analyzes diffs and logs, and pinpoints the culprit—often before your on-call engineer wakes up.
        </p>
        
        <div className="flex justify-center pt-4">
          <Button size="lg" className="text-base group">
            Request early access
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
