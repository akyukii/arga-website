import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Features />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
