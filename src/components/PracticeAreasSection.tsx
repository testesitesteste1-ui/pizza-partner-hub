import { Scale, FileText, Users, Calculator } from "lucide-react";

const PracticeAreasSection = () => {
  const areas = [
    {
      icon: Scale,
      title: "Cível Empresarial",
      description: "Atuação em litígios envolvendo contratos, responsabilidade civil e patrimônio, com foco na condução estratégica das disputas e na mitigação de riscos que impactam os negócios.",
    },
    {
      icon: FileText,
      title: "Contratos",
      description: "Assessoria na elaboração, revisão e negociação de contratos empresariais, com atenção à prevenção de conflitos e à segurança jurídica das relações comerciais.",
    },
    {
      icon: Users,
      title: "Societário",
      description: "Assessoria jurídica na constituição de sociedades, reorganizações empresariais e resolução de disputas entre sócios, com suporte às decisões estruturais e estratégicas da vida societária.",
    },
    {
      icon: Calculator,
      title: "Tributário",
      description: "Atuação no contencioso e no consultivo tributário, com foco na análise de riscos, na conformidade fiscal e no suporte às decisões estratégicas das empresas.",
    },
  ];

  return (
    <section id="areas" className="py-16 sm:py-24 lg:py-32 bg-blush-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-champagne-dark mb-3 sm:mb-4">
            Especialidades
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Áreas de Atuação
          </h2>
          <div className="gold-divider mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            Atuação especializada em Direito Empresarial e Tributário, atuando nos âmbitos 
            contencioso, consultivo e na elaboração de pareceres.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group bg-card p-5 sm:p-8 rounded-xl border border-transparent hover-gold hover-lift cursor-pointer"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-blush flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-champagne/20 transition-colors">
                <area.icon className="w-6 h-6 sm:w-7 sm:h-7 text-champagne-dark" />
              </div>
              
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2 sm:mb-4 group-hover:text-champagne-dark transition-colors">
                {area.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {area.description}
              </p>

              <div className="mt-4 sm:mt-6 flex items-center text-champagne-dark font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Saiba mais
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
