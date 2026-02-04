import { Heart, Target, Eye, Shield } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cada cliente é único. Escuto e acolho suas necessidades antes de propor soluções.",
    },
    {
      icon: Target,
      title: "Estratégias Personalizadas",
      description: "Cada caso é analisado para desenvolver a melhor estratégia possível.",
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Você sempre saberá o que está acontecendo no seu processo.",
    },
    {
      icon: Shield,
      title: "Compromisso com Resultados",
      description: "Resolvo seu problema da forma mais eficiente, dentro da ética e da lei.",
    },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blush/30 to-transparent hidden lg:block" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-champagne-dark mb-3 sm:mb-4">
            Por Que Me Escolher
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Meus Diferenciais
          </h2>
          <div className="gold-divider mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            O que faz do meu trabalho uma experiência diferente no mundo jurídico.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-card border border-border hover-gold hover-lift group"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-champagne/20 to-blush flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-champagne-dark" strokeWidth={1.5} />
              </div>
              
              <div>
                <h3 className="font-serif text-lg sm:text-2xl text-foreground mb-1.5 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
