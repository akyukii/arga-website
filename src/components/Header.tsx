import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/black_header.jpg" alt="ArgaLabs" className="h-10 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-sm text-white/70 hover:text-white transition-colors">
            Product
          </a>
          <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">
            Features
          </a>
          <a href="#vision" className="text-sm text-white/70 hover:text-white transition-colors">
            Vision
          </a>
        </div>
        
        <a href="#cta">
          <Button size="sm" asChild={true}>
            <span>Request access</span>
          </Button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
