const Problem = () => {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-destructive/10 border border-destructive/20">
              <p className="text-sm font-mono text-destructive">The problem</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Incident response is slow
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Even at Google, internal tooling for post-deployment analysis is slow
              and provides almost no context. Smaller teams are flying completely blind. We automate it.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-primary/10 border border-primary/20">
              <p className="text-sm font-mono text-foreground">With Arga</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Instant root cause analysis
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Automated workflows analyze your deployment timeline, correlate failures with PRs, 
              and suggest targeted rollbacks—all within seconds of an incident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
