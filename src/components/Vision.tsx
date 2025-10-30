const Vision = () => {
  return (
    <section id="vision" className="scroll-mt-20 px-6 py-24 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          The Next Wave
          <br />
          of AI-Centric Software
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          As multi-agent workflows mature, Arga becomes the control plane that versions behavior, 
          shares context, and helps agents monitor, and heal production safely.
        </p>
        
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-2">
            <p className="font-mono text-sm text-muted-foreground">Version</p>
            <p className="text-base">
              Every code change from an agent is version tracked and revertible
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-sm text-muted-foreground">Orchestrate</p>
            <p className="text-base">
              Coordinate agents with shared context to automate info sharing
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-sm text-muted-foreground">Fix</p>
            <p className="text-base">
              Autonomous detection, diagnosis, and rollback of production issues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
