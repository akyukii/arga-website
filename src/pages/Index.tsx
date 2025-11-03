import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const problemItems = [
    {
      problemTitle: "Context limitations lead to hallucinations",
      problemDescription:
        "AI agents operate with fragmented context—limited windows and no sense of priority, causing hallucinations and incomplete reasoning across large codebases.",
      solutionTitle: "Dynamic, prioritized context graph",
      solutionDescription:
        "Arga constructs a change-aware graph that continuously filters the most relevant files, diffs, and runtime signals for each service, grounding agents in real context.",
    },
    {
      problemTitle: "Lack of execution-aware validation",
      problemDescription:
        "AI can write code, but it can't verify what is written. Without isolated environments, end-to-end tests, or live browser access, it guesses instead of proving.",
      solutionTitle: "Isolated pre-deployment environments",
      solutionDescription:
        "For every PR, Arga spins up an isolated environment with read-only Kubernetes and log access, enabling real tests, traces, and synthetic checks before code merges to production.",
    },
    {
      problemTitle: "Manual CI/CD pipelines are tedious",
      problemDescription:
        "Pipelines lack agentic orchestration; dependency drift across stages forces many unnecessary reverts when prod breaks.",
      solutionTitle: "Agentic pipeline with targeted rollbacks",
      solutionDescription:
        "Arga validates dependency sync across various stages of the CI/CD pipeline, correlates culprit PRs, and proposes minimal, reversible changes.",
    },
    {
      problemTitle: "Slow incident triage, high cognitive load",
      problemDescription:
        "Oncall must have a holistic view of the system to react to incidents quickly. Without a unified view, they must identify all possible paths of the alerts to pinpoint the root cause.",
      solutionTitle: "Change-aware incident timelines",
      solutionDescription:
        "Arga links alerts, logs, metrics, and recent PRs into a single timeline, tracks down the root cause using context gathered from the dynamic context graph, and proposes minimal rollbacks.",
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
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
