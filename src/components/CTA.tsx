import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="scroll-mt-20 px-6 py-24 border-t border-border">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold">
          Join the early access program
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Be among the first to experience automated incident response and agent observability. 
          Limited spots available.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
          <Input 
            type="email" 
            placeholder="your@email.com"
            className="flex-1 h-12 px-4"
          />
          <Button variant="ghost" size="lg" type="submit" className="group border border-border hover:bg-black hover:text-white">
            Get access
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
        
        <p className="text-sm text-muted-foreground pt-4">
          We'll reach out within 48 hours to schedule your onboarding
        </p>
      </div>
    </section>
  );
};

export default CTA;
