import { Star, Quote } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Clara S.",
      role: "Cliente - Direito de Família",
      text: "A Nicole foi fundamental durante meu processo de divórcio. Em um momento tão difícil, ela me acolheu com humanidade e profissionalismo.",
      rating: 5,
    },
    {
      name: "Roberto A.",
      role: "Cliente - Direito Trabalhista",
      text: "Finalmente encontrei alguém que realmente se importou com meu caso. A Dra. Nicole é uma profissional excepcional.",
      rating: 5,
    },
    {
      name: "Ana Paula M.",
      role: "Cliente - Direito Civil",
      text: "Transparência e competência. Ela me manteve informada em cada etapa e sempre explicou tudo de forma clara.",
      rating: 5,
    },
    {
      name: "Carlos Eduardo L.",
      role: "Cliente - Inventário",
      text: "Em um momento de luto, a Nicole conduziu o inventário com sensibilidade e eficiência. Uma profissional humana.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-16 sm:py-24 lg:py-32 bg-blush">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-champagne-dark mb-3 sm:mb-4">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            O Que Dizem Meus Clientes
          </h2>
          <div className="gold-divider mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            A satisfação dos meus clientes é minha maior conquista.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-card">
            {/* Quote icon */}
            <Quote className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 text-champagne/30" />

            <div className="relative pt-6 sm:pt-0">
              {/* Rating */}
              <div className="flex justify-center gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-champagne text-champagne" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-foreground text-center italic leading-relaxed mb-6 sm:mb-8">
                "{testimonials[activeIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-champagne to-champagne-dark flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white font-serif text-lg sm:text-xl">
                    {testimonials[activeIndex].name.charAt(0)}
                  </span>
                </div>
                <p className="font-medium text-sm sm:text-base text-foreground">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-champagne w-6 sm:w-8"
                    : "bg-champagne/30 hover:bg-champagne/50 w-2 sm:w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
