import logo from "@/assets/logo-nicole.png";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    quick: [
      { label: "Sobre", href: "#sobre" },
      { label: "Áreas de Atuação", href: "#areas" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
    ],
    legal: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
    ],
  };

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-cream border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main footer */}
        <div className="py-10 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <img
              src={logo}
              alt="Nicole Almeida - Advogada"
              className="h-10 sm:h-12 w-auto mb-4 sm:mb-6 opacity-80"
            />
            <p className="text-sm text-muted-foreground max-w-md mb-4 sm:mb-6 leading-relaxed">
              Advocacia com excelência e humanidade. Comprometida em oferecer 
              soluções jurídicas personalizadas.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-champagne/30 flex items-center justify-center text-foreground/70 hover:bg-champagne hover:text-white hover:border-champagne transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base sm:text-lg text-foreground mb-4 sm:mb-6">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.quick.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-champagne-dark transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-base sm:text-lg text-foreground mb-4 sm:mb-6">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>
                <span className="block font-medium text-foreground/80">Telefone</span>
                (11) 99999-9999
              </li>
              <li>
                <span className="block font-medium text-foreground/80">E-mail</span>
                contato@nicolealmeida.adv.br
              </li>
              <li>
                <span className="block font-medium text-foreground/80">Endereço</span>
                Av. Paulista, 1000<br />
                São Paulo - SP
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 sm:py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p className="text-center sm:text-left">
            © {currentYear} Nicole Almeida. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6">
            {links.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-champagne-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
