import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511992501991";
  const message = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre os serviços jurídicos."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-champagne to-champagne-dark shadow-gold flex items-center justify-center text-white hover:scale-110 transition-transform group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale comigo no WhatsApp
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-champagne animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
