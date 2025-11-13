import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const problemItems = [

    {
      problemTitle: "Lack of execution-aware validation",
      problemDescription:
        "AI can write code, but it can't verify what is written. That's why one-click fixes don't work. You're still accountable if the code agents suggests breaks production.",
      solutionTitle: "Pre-deployment testing pipeline",
      solutionDescription:
        "Arga spins up an isolated environment with read-only Kubernetes and log access, enabling real integration tests, traces, and rollback procedures before code merges to production.",
    },
    {
      problemTitle: "Context limitations lead to hallucinations",
      problemDescription:
        "AI agents operate with fragmented context—limited windows and no sense of priority, causing hallucinations and incomplete reasoning across large codebases.",
      solutionTitle: "Dynamic, prioritized context graph",
      solutionDescription:
        "Arga constructs a change-aware graph that continuously filters the most relevant files, diffs, and runtime signals for each service, grounding agents in real context.",
    },
    {
      problemTitle: "Devops is dynamic, traditional tools are linear",
      problemDescription:
        "Traditional AI observability tools stop at logs and prompt traces - snapshots after failure. DevOps is a continuous process, requiring context into the entire pipeline to diagnose and fix issues.",
      solutionTitle: "Real-time observability updates",
      solutionDescription:
        "Arga's agents operate inside the CI/CD pipelines, dynamically tracing every commit across time. This gives them live situational awareness, enabling real-time root-cause analysis and validation context within the codebase itself.",
    },
    {
      problemTitle: "Slow incident triage, high cognitive load",
      problemDescription:
        "Oncall must have a holistic view of the system to react to incidents quickly. Without a unified view, they must identify all possible paths of the alerts to pinpoint the root cause.",
      solutionTitle: "Change-aware incident timelines",
      solutionDescription:
        "Arga links alerts, logs, metrics, and recent PRs into a single timeline, tracks down the root cause using context gathered from the dynamic context graph, proposes fixes, and validates them before deployment.",
    },
  ];
  return (
    <div className="dark min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Problem items={problemItems} autoAdvanceMs={4000} />
        <Testimonials />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
