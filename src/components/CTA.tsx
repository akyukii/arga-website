import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      toast({
        variant: "destructive",
        title: "Email is required",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([
          {
            email: email.trim(),
            company: company.trim() || null,
          },
        ]);

      if (error) throw error;

      toast({
        title: "You're on the list!",
        description: "Thanks for joining the waitlist.",
      });
      setEmail("");
      setCompany("");
    } catch (err) {
      console.error("Waitlist submission failed", err);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="scroll-mt-20 px-6 py-48 border-t border-border">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold">
          Join our alpha program
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our alpha prototype drops in Jan 2026. Join our waitlist to get early access.
        </p>
        
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 flex-1">
            <Input
              type="email"
              placeholder="your@email.com"
              className="h-12 px-4"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <div className="text-left">
              <Input
                type="text"
                placeholder="Company Name (optional)"
                className="h-12 px-4"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <Button
            variant="ghost"
            size="lg"
            type="submit"
            className="group border border-border hover:bg-black hover:text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get access"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
