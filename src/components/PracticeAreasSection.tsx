import { Scale, FileText, Users, Calculator, Award, Home, Heart, BookOpen } from "lucide-react";

const PracticeAreasSection = () => {
  const areas = [
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Atuação em demandas cíveis de forma ampla, envolvendo relações contratuais, responsabilidade civil e questões patrimoniais, com foco na prevenção de conflitos e na segurança jurídica.",
    },
    {
      icon: FileText,
      title: "Contratos",
      description: "Assessoria na elaboração, revisão e negociação de contratos, com atenção à clareza das cláusulas, à prevenção de litígios e à segurança das relações jurídicas.",
    },
    {
      icon: Users,
      title: "Societário",
      description: "Assessoria jurídica na constituição de sociedades, reorganizações empresariais e resolução de disputas entre sócios, com suporte às decisões estruturais e estratégicas da vida societária.",
    },
    {
      icon: Calculator,
      title: "Tributário",
      description: "Atuação no consultivo e no contencioso tributário, com foco na análise de riscos, na conformidade fiscal e no suporte às decisões estratégicas.",
    },
    {
      icon: Award,
      title: "Propriedade Industrial",
      description: "Assessoria na proteção de ativos intangíveis, com foco no registro de marcas, estratégias de proteção e defesa dos direitos de propriedade industrial.",
    },
    {
      icon: Home,
      title: "Sucessões e Inventário",
      description: "Atuação em processos de inventário e planejamento sucessório, com orientação jurídica voltada à organização patrimonial e à adequada transmissão de bens.",
    },
    {
      icon: Heart,
      title: "Direito de Família",
      description: "Assessoria jurídica em demandas de direito de família, com foco na condução técnica e responsável de questões pessoais e patrimoniais, respeitando as particularidades de cada caso.",
    },
    {
      icon: BookOpen,
      title: "Consultoria Jurídica e Pareceres",
      description: "Atuação consultiva e elaboração de pareceres jurídicos voltados à análise de riscos, interpretação normativa e apoio à tomada de decisões.",
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group bg-card p-3 sm:p-6 rounded-xl border border-transparent hover-gold hover-lift cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-blush flex items-center justify-center mb-2 sm:mb-4 group-hover:bg-champagne/20 transition-colors">
                <area.icon className="w-4 h-4 sm:w-6 sm:h-6 text-champagne-dark" />
              </div>
              
              <h3 className="font-serif text-sm sm:text-xl text-foreground mb-1 sm:mb-3 group-hover:text-champagne-dark transition-colors leading-tight">
                {area.title}
              </h3>
              
              <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
