const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo_white.png" alt="ArgaLabs" className="h-6 w-auto" />
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="https://www.linkedin.com/company/arga-labs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#cta" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Arga Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
