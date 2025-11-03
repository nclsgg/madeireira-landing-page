'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Substitua pelo número de telefone no formato internacional (sem + e sem espaços)
  // Exemplo: 5511999999999 para Brasil (21) 97687-8566
  const phoneNumber = '5521976878566';
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre seus produtos.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 md:w-16 md:h-16"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle 
        className={`w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 ${
          isHovered ? 'rotate-12' : ''
        }`}
      />
      
      {/* Efeito de pulso */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </a>
  );
}
