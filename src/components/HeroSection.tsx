import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "Soluções jurídicas para empresas,",
    titleHighlight: "com estratégia e clareza.",
    description: "Atuação consultiva e contenciosa com foco em prevenção de riscos, contratos bem estruturados e segurança para decisões empresariais.",
    tags: ["Cível Empresarial", "Contratos", "Societário", "Tributário", "Propriedade Industrial"]
  },
  {
    title: "Advocacia com",
    titleHighlight: "Excelência e Humanidade.",
    description: "Especialista em Direito de Família, Civil e Trabalhista. Soluções jurídicas personalizadas com atendimento humanizado.",
    tags: ["Direito de Família", "Direito Civil", "Direito Trabalhista", "Consultoria"]
  },
  {
    title: "Proteção jurídica",
    titleHighlight: "para você e sua família.",
    description: "Assessoria completa em questões familiares, sucessórias e patrimoniais com sensibilidade e profissionalismo.",
    tags: ["Divórcio", "Inventário", "Guarda", "Pensão", "União Estável"]
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-cream via-blush-light to-cream overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blush/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-champagne/10 blur-3xl" />
      </div>

      {/* Right side decorative image */}
      <div className="absolute right-0 bottom-0 w-1/3 h-4/5 hidden lg:block">
        <div className="relative w-full h-full">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-champagne/40 bg-background/80 backdrop-blur-sm flex items-center justify-center text-champagne-dark hover:bg-champagne hover:text-white hover:border-champagne transition-all duration-300"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-champagne/40 bg-background/80 backdrop-blur-sm flex items-center justify-center text-champagne-dark hover:bg-champagne hover:text-white hover:border-champagne transition-all duration-300"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Slide content with animation */}
          <div
            key={currentSlide}
            className="animate-fade-up"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
              {slide.title}
              <br />
              <span className="italic text-champagne-dark">{slide.titleHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {slide.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm text-muted-foreground"
                >
                  {tag}
                  {index < slide.tags.length - 1 && (
                    <span className="ml-2 md:ml-3 text-champagne">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-champagne"
                : "bg-champagne/30 hover:bg-champagne/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
