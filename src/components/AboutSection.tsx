import { Award, BookOpen, Heart, Scale } from "lucide-react";
import nicolePortrait from "@/assets/nicole-portrait.jpg";

const AboutSection = () => {
  const credentials = [
    { icon: Scale, label: "OAB/SP", value: "123.456" },
    { icon: BookOpen, label: "Formação", value: "USP - Direito" },
    { icon: Award, label: "Experiência", value: "+10 Anos" },
    { icon: Heart, label: "Clientes", value: "+500" },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:max-w-lg lg:mx-0">
              {/* Decorative elements - smaller on mobile */}
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-24 sm:h-24 border-l-2 border-t-2 border-champagne" />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-12 h-12 sm:w-24 sm:h-24 border-r-2 border-b-2 border-champagne" />
              
              <img
                src={nicolePortrait}
                alt="Nicole Almeida"
                className="w-full rounded-lg shadow-card"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-champagne-dark mb-3 sm:mb-4">
              Sobre
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
              Nicole Almeida
            </h2>
            
            <div className="gold-divider lg:!mx-0 mb-6 sm:mb-8" />
            
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Com mais de uma década dedicada ao Direito, construí minha carreira sobre pilares 
              sólidos de ética, competência e, acima de tudo, empatia. Acredito que cada cliente 
              merece não apenas um advogado, mas um aliado comprometido com sua causa.
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Minha abordagem combina expertise técnica com atendimento humanizado, entendendo 
              que por trás de cada processo existe uma história, uma família, um sonho.
            </p>

            {/* Quote */}
            <blockquote className="relative pl-4 sm:pl-6 my-6 sm:my-10 text-left">
              <div className="gold-line" />
              <p className="font-serif text-lg sm:text-xl italic text-foreground">
                "O Direito existe para proteger pessoas. É assim que eu encaro cada caso."
              </p>
            </blockquote>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-8 sm:mt-10">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-3 sm:p-4 rounded-lg bg-blush-light/50 hover-gold hover-lift border border-transparent"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2 text-champagne" />
                  <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">
                    {item.label}
                  </p>
                  <p className="font-serif text-base sm:text-lg text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
