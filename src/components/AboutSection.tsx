import { Scale, BookOpen } from "lucide-react";

const AboutSection = () => {
  const credentials = [
    { icon: Scale, label: "OAB/SP", value: "540.009" },
    { icon: BookOpen, label: "Formação", value: "Direito Mackenzie" },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-champagne-dark mb-3 sm:mb-4">
            Sobre
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Nicole Almeida
          </h2>
          
          <div className="gold-divider mb-6 sm:mb-8" />
          
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            Atuo na advocacia com foco no direito empresarial, auxiliando empresas na organização 
            jurídica, prevenção de riscos e estruturação estratégica para a tomada de decisões.
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            Minha atuação é predominantemente consultiva, com atendimento direto e personalizado, 
            buscando compreender a realidade de cada negócio para oferecer soluções jurídicas 
            claras, eficientes e alinhadas aos seus objetivos.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            Acredito que o Direito vai além da resolução de conflitos. Ele deve atuar de forma 
            preventiva, proporcionando segurança jurídica, clareza contratual e estrutura adequada 
            para o crescimento sustentável das empresas.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Meu trabalho é pautado pela responsabilidade técnica, comunicação transparente e pela 
            construção de relações profissionais baseadas na confiança.
          </p>

          {/* Credentials Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-8 sm:mt-10 max-w-md mx-auto">
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
    </section>
  );
};

export default AboutSection;
