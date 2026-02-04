import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg-new.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/70 via-cream/50 to-transparent" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-32 lg:pt-0 lg:pb-0">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6 animate-fade-up">
            Soluções jurídicas para empresas,
            <br />
            <span className="italic text-champagne-dark">com estratégia e clareza.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Atuação consultiva e contenciosa com foco em prevenção de riscos, 
            contratos bem estruturados e segurança para decisões empresariais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto"
            >
              Falar no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-champagne/50 text-foreground hover:bg-champagne/10"
            >
              Conheça minhas áreas
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {["Cível Empresarial", "Contratos", "Societário", "Tributário", "Propriedade Industrial"].map((tag, index, arr) => (
              <span key={index} className="text-xs md:text-sm text-muted-foreground">
                {tag}
                {index < arr.length - 1 && (
                  <span className="ml-2 md:ml-3 text-champagne">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors z-10"
      >
        <span className="text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="text-champagne sm:w-5 sm:h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
