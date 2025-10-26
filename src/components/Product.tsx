const productFeatures = [
  {
    category: "Trace & Debug",
    items: [
      "Agent graph visualization",
      "Prompt version control",
      "Trace explorer with full context",
      "Behavior drift detection",
    ],
  },
  {
    category: "Control & Safety",
    items: [
      "Cost caps per agent",
      "Tool allowlists",
      "Shared context management",
      "Behavior versioning",
    ],
  },
  {
    category: "Integration",
    items: [
      "Lightweight SDK",
      "Zero-config logging",
      "Git integration",
      "Deployment timeline correlation",
    ],
  },
];

const Product = () => {
  return (
    <section className="px-6 py-24 border-t border-border bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            The platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and monitor multi-agent systems in production
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {productFeatures.map((section, index) => (
            <div key={index} className="space-y-6">
              <div>
                <p className="font-mono text-sm text-muted-foreground mb-4">
                  {section.category}
                </p>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
