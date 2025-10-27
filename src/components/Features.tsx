import { Terminal, GitBranch, Network, Shield } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Agentic failure analysis",
    description: "AI workflows automatically correlate latency spikes and errors with recent PRs, analyzing diffs, logs, and dependencies to pinpoint root causes.",
  },
  {
    icon: GitBranch,
    title: "Intelligent rollback suggestions",
    description: "Get minimal, targeted rollback options or fix suggestions based on deep analysis of your deployment timeline and code changes.",
  },
  {
    icon: Network,
    title: "Agent observability",
    description: "Lightweight SDK logs every agent run—inputs, outputs, model versions, tool calls, latency, and cost—with automatic versioning.",
  },
  {
    icon: Shield,
    title: "Context & guardrails",
    description: "Shared context across agent workflows with built-in safety: cost caps, tool allowlists, and behavior enforcement.",
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
                className="group p-8 rounded-lg border border-border bg-card hover:bg-white transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-white/10 border border-white/20 group-hover:bg-black/10 group-hover:border-black/20 transition-all duration-300">
                  <Icon className="h-6 w-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-black transition-colors duration-300">{feature.title}</h3>
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
