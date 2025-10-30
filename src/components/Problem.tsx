import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

type ProblemItem = {
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
};

type ProblemProps = {
  items?: ProblemItem[];
  autoAdvanceMs?: number;
};

const defaultItems: ProblemItem[] = [
  {
    problemTitle: "AI can't ship products",
    problemDescription:
      "AI can generate code, but it can't ship products. It lacks context, can't validate its own changes, and struggles with version control.",
    solutionTitle: "Our solution",
    solutionDescription:
      "We turn code change descriptions into structured context, helping agentic workflows trace, debug, and understand service breakages faster.",
  },
];

const Problem = ({ items = defaultItems, autoAdvanceMs = 4000 }: ProblemProps) => {
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!emblaApi || isHovered) return;
    const id = setInterval(() => {
      emblaApi.scrollNext();
    }, Math.max(2500, autoAdvanceMs));
    return () => clearInterval(id);
  }, [emblaApi, autoAdvanceMs, isHovered]);

  return (
    <section id="product" className="scroll-mt-20 px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-4 md:gap-16">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-destructive/10 border border-destructive/20">
              <p className="text-sm font-mono text-destructive">The problem</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-green-200 border border-green-700">
              <p className="text-sm font-mono text-green-700">With Arga</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Carousel setApi={setEmblaApi} opts={{ loop: true }}>
          <CarouselContent>
            {items.map((item, idx) => (
              <CarouselItem key={idx}>
                <div className="grid md:grid-cols-2 gap-16">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {item.problemTitle}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.problemDescription}
                    </p>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {item.solutionTitle}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.solutionDescription}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="ghost"
            className="bg-transparent text-black hover:!bg-black hover:!text-white border-0 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <CarouselNext
            variant="ghost"
            className="bg-transparent text-black hover:!bg-black hover:!text-white border-0 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Problem;
