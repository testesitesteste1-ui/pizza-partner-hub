import { Button } from "@/components/ui/button";
import heroFlowers from "@/assets/hero-flowers.jpg";

const HeroSection = () => {
  const areas = [
    "Direito Civil",
    "Contratos",
    "Societário",
    "Tributário",
    "Trabalhista",
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-gradient-to-br from-cream via-blush-light to-cream overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blush/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-4 sm:mb-6 animate-fade-up">
              Soluções jurídicas para empresas,
              <br />
              <span className="italic">com estratégia e clareza.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
              Atuação consultiva e contenciosa com foco em prevenção de riscos, 
              contratos bem estruturados e segurança para decisões empresariais.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.2s" }}>
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
                className="w-full sm:w-auto border-foreground/30 hover:bg-foreground/5"
                onClick={() => document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conheça minhas áreas
              </Button>
            </div>

            {/* Areas tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-8 sm:mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {areas.map((area, index) => (
                <span key={area} className="text-xs sm:text-sm text-muted-foreground">
                  {area}
                  {index < areas.length - 1 && (
                    <span className="mx-2 text-champagne">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative Image */}
          <div className="hidden lg:flex items-end justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img
                src={heroFlowers}
                alt="Decoração elegante"
                className="w-full max-w-md xl:max-w-lg h-auto object-contain opacity-90"
              />
              {/* Soft gradient overlay to blend with background */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cream/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;