import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const areas = [
    "Direito Civil",
    "Contratos",
    "Societário",
    "Tributário",
    "Trabalhista",
  ];

  return (
    <section 
      className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/85 to-cream/70 lg:bg-gradient-to-r lg:from-cream/85 lg:via-cream/50 lg:to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 lg:pt-0 lg:pb-0 relative z-10">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-medium text-foreground leading-[1.15] mb-5 sm:mb-6 animate-fade-up">
              Soluções jurídicas para empresas,
              <br />
              com estratégia e clareza.
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-6 sm:mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
              Atuação consultiva e contenciosa com foco em prevenção de riscos, 
              contratos bem estruturados e segurança para decisões empresariais.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/5511992501991", "_blank")}
              >
                Falar no WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-foreground/30 bg-background/50 hover:bg-background/80"
                onClick={() => document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conheça minhas áreas
              </Button>
            </div>

            {/* Areas tags */}
            <div className="flex flex-wrap items-center gap-1 mt-8 sm:mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {areas.map((area, index) => (
                <span key={area} className="text-xs sm:text-sm text-foreground/80 font-medium">
                  {area}
                  {index < areas.length - 1 && (
                    <span className="mx-2 text-champagne-dark">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;