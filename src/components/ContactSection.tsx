import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entrarei em contato. Obrigada pelo interesse!",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      value: "(11) 99250-1991",
      href: "https://wa.me/5511992501991",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "nalmeidaadvogada@hotmail.com",
      href: "mailto:nalmeidaadvogada@hotmail.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@nalmeidaadvogada",
      href: "https://instagram.com/nalmeidaadvogada",
    },
  ];

  return (
    <section id="contato" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-champagne-dark mb-3 sm:mb-4">
            Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Vamos Conversar?
          </h2>
          <div className="gold-divider mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            Entre em contato para agendar uma consulta ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {contactInfo.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 sm:gap-4 group hover:bg-blush-light/50 p-2 -m-2 rounded-lg transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blush flex items-center justify-center group-hover:bg-champagne/20 transition-colors">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-champagne-dark" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base text-foreground mb-0.5 sm:mb-1">{item.title}</p>
                  <p className="text-muted-foreground whitespace-pre-line text-xs sm:text-sm group-hover:text-champagne-dark transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Nome Completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-blush-light/50 border-border focus:border-champagne focus:ring-champagne text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-blush-light/50 border-border focus:border-champagne focus:ring-champagne text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-blush-light/50 border-border focus:border-champagne focus:ring-champagne text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Assunto
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex: Direito de Família"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-blush-light/50 border-border focus:border-champagne focus:ring-champagne text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Conte-me brevemente sobre sua situação..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-blush-light/50 border-border focus:border-champagne focus:ring-champagne resize-none text-sm sm:text-base"
                  required
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
