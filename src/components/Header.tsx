import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Página Inicial" },
    { href: "#sobre", label: "Sobre" },
    { href: "#areas", label: "Área de atuação" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1612]">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between py-4 lg:py-5">
          {/* Text Logo */}
          <a href="#" className="flex flex-col items-center">
            <span className="font-serif text-xl md:text-2xl tracking-[0.15em] text-white font-medium">
              NICOLE ALMEIDA
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#c9a86c] mt-0.5">
              ADVOGADA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#c9a86c] hover:text-[#e0c590] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#c9a86c]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-[#c9a86c]/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#c9a86c] hover:text-[#e0c590] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;