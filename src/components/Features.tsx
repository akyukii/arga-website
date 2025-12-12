import { Terminal, GitBranch, Network, Shield } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Agentic failure analysis",
    description:
      "Arga continuously monitors latency spikes, errors, and anomalies across your stack—correlating them with recent PRs, code diffs, and dependency shifts to surface true root causes in minutes.",
  },
  {
    icon: GitBranch,
    title: "Intelligent rollback suggestions",
    description:
      "When production breaks, Arga identifies the minimal set of PRs responsible and auto-generates rollback or patch suggestions that can be safely tested before merge.",
  },
  {
    icon: Network,
    title: "Dynamic context graph",
    description:
      "A constantly updating knowledge graph that maps files, diffs, runtime logs, and service dependencies—ensuring agents always reason with fresh, relevant information.",
  },
  {
    icon: Shield,
    title: "Fully autonomous incident response",
    description:
      "For each rollback, Arga spins an isolated sandbox mirroring production. It runs synthetic tests, traces, and integration checks so you can validate behavior before merge—no surprises post-deploy.",
  },
];

const Features = () => {
  return (
    <section id="features" className="scroll-mt-20 px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Built for autonomous systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From immediate incident response to long-term agent orchestration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-lg border border-border bg-card hover:bg-accent transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-muted border border-border group-hover:bg-accent transition-all duration-300">
                  <Icon className="h-6 w-6 text-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
