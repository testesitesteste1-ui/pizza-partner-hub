import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo-nicole.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-cream to-blush-light overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blush/20 hidden lg:block" />
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-champagne/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-blush/30 blur-3xl" />
      
      {/* Gold decorative line - hidden on mobile */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-champagne to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-32 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-champagne-dark mb-4 sm:mb-6 animate-fade-up">
              Advocacia com Propósito
            </span>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-tight mb-4 sm:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Advocacia com{" "}
              <span className="italic text-champagne-dark">Excelência</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>e Humanidade
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Especialista em Direito de Família, Civil e Trabalhista. 
              Soluções jurídicas personalizadas com atendimento humanizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Agende sua Consulta
              </Button>
              <Button variant="blush" size="lg" className="w-full sm:w-auto">
                Conheça Meu Trabalho
              </Button>
            </div>

            {/* Credentials - improved mobile layout */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 mt-8 sm:mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne" />
                <span className="text-xs sm:text-sm text-muted-foreground">OAB/SP 123.456</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne" />
                <span className="text-xs sm:text-sm text-muted-foreground">+10 anos de experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne" />
                <span className="text-xs sm:text-sm text-muted-foreground">+500 clientes</span>
              </div>
            </div>
          </div>

          {/* Decorative Element instead of photo */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="w-80 h-80 xl:w-96 xl:h-96 relative">
                {/* Outer circle */}
                <div className="absolute inset-0 rounded-full border-2 border-champagne/30" />
                
                {/* Inner decorative circles */}
                <div className="absolute inset-8 rounded-full border border-champagne/20" />
                <div className="absolute inset-16 rounded-full bg-blush/50" />
                
                {/* Center logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Nicole Almeida"
                    className="w-48 xl:w-56 h-auto opacity-80"
                  />
                </div>
                
                {/* Decorative dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-champagne" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-champagne" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-champagne" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-champagne" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-champagne/20 animate-float" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-blush animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned better for mobile */}
      <a
        href="#sobre"
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="text-champagne sm:w-5 sm:h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
