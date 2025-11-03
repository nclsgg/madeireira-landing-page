'use client';

import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="contato" className="py-16 md:py-24 lg:py-32 bg-[#3D5941] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 tracking-tight leading-[1.15] px-4">
            Vamos criar algo<br />
            <span className="italic">extraordinário</span>
          </h2>
          
          <p className="font-inter text-base md:text-lg font-light mb-10 md:mb-12 text-white/80 leading-relaxed px-6">
            Entre em contato para discutir seu projeto.<br />
            Transformamos visões em realidade.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-4">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  required
                  className="flex-1 bg-transparent border border-white/30 px-5 md:px-6 py-3 md:py-4 font-inter text-sm font-light text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="bg-white text-[#3D5941] px-6 md:px-8 py-3 md:py-4 font-inter text-xs md:text-sm font-light hover:bg-white/90 transition-all duration-300 whitespace-nowrap uppercase tracking-wider"
                >
                  Entrar em Contato
                </button>
              </div>
            </form>
          ) : (
            <div className="font-inter text-sm font-light text-white/80 py-4 animate-fade-in">
              Obrigado! Entraremos em contato em breve.
            </div>
          )}

          <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
              <div className="animate-on-scroll space-y-2">
                <div className="font-playfair text-xl md:text-2xl lg:text-3xl font-light">+55 11 9999-9999</div>
                <div className="font-inter text-xs font-light text-white/60 uppercase tracking-wider">Telefone</div>
              </div>
              <div className="animate-on-scroll space-y-2" style={{ animationDelay: '100ms' }}>
                <div className="font-playfair text-lg md:text-xl lg:text-2xl font-light break-all md:break-normal">contato@madeireira.com</div>
                <div className="font-inter text-xs font-light text-white/60 uppercase tracking-wider">E-mail</div>
              </div>
              <div className="animate-on-scroll space-y-2" style={{ animationDelay: '200ms' }}>
                <div className="font-playfair text-xl md:text-2xl lg:text-3xl font-light">São Paulo, SP</div>
                <div className="font-inter text-xs font-light text-white/60 uppercase tracking-wider">Localização</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
