import { Card } from "@/components/ui/card";

type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Our models are often trained in-house with a lot of pre-defined context, for example, if one window has 180k tokens, up to 120k can already be defined before you open the agent tab window, meaning you'd only have 60k window to work with.",
    author: "Senior Software Engineer",
    title: "Amazon",
    company: "AWS",
  },
  {
    quote:
      "A lot of context is missing in our models, I need to provide exact file paths of all relevant files and open them on my IDE to paste into Cursor/agent tab",
    author: "Software Engineer",
    title: "Google",
    company: "Google Voice",
  },
  {
    quote:
      "Since the codebase we own is so large, everyone is expected to be available and there's no oncall on our team; if your code caused an issue, you will get pinged 24/7. It caused a lot of unnecessary stress and burnout.",
    author: "Software Engineer",
    title: "Tesla",
    company: "Service Platform",
  },
  {
    quote:
      "Our team moves really fast. There's no time to write super detailed PRs or runbooks at startups. Usually you know your PR reviewer so minimal context is needed. So it's hard to provide context to agents because it lives in our heads.",
    author: "Machine Learning Engineer",
    title: "Baseten",
    company: "ML Infrastructure",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="scroll-mt-20 px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">What teams say</h2>
          <p className="text-lg text-muted-foreground">Current pain points in enterprise environments</p>
        </div>

        <div className="grid gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-6 border border-border bg-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <p className="text-base md:text-lg leading-relaxed md:max-w-3xl">{t.quote}</p>
                <div className="text-right md:text-right md:min-w-[220px]">
                  <p className="font-medium">{t.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.title} • {t.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


