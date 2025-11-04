export default function CTASection() {
  const email = "info@pauscarpintaria.com";
  const subject = "Orçamento - Projecto de Carpintaria";
  const body = "Olá, gostaria de solicitar um orçamento para o meu projecto.\n\nDescrição do projecto:\n\n";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contato" className="py-16 md:py-24 lg:py-32 bg-[#3D5941] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 tracking-tight leading-[1.15] px-4">
            Pronto para dar vida<br />
            <span className="italic">ao seu projecto?</span>
          </h2>
          
          <p className="font-inter text-base md:text-lg font-light mb-10 md:mb-12 text-white/80 leading-relaxed px-6">
            Entre em contacto e descubra como podemos transformar<br />
            as suas ideias em peças únicas de carpintaria.
          </p>

          <div className="max-w-lg mx-auto px-4">
            <a
              href={mailtoLink}
              className="inline-block w-full sm:w-auto bg-white text-[#3D5941] px-8 md:px-12 py-4 md:py-5 font-inter text-sm md:text-base font-light hover:bg-white/90 transition-all duration-300 uppercase tracking-wider"
            >
              Entrar em Contacto
            </a>
          </div>

          <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10 px-4">
            <div className="flex flex-col md:flex-row gap-8 md:justify-between text-center">
              {/* <div className="animate-on-scroll space-y-2">
                <div className="font-playfair text-xl md:text-2xl lg:text-3xl font-light">+55 11 9999-9999</div>
                <div className="font-inter text-xs font-light text-white/60 uppercase tracking-wider">Telefone</div>
              </div> */}
              <div className="animate-on-scroll space-y-2" style={{ animationDelay: '100ms' }}>
                <div className="font-playfair text-lg md:text-xl lg:text-2xl font-light break-all md:break-normal">info@pauscarpintaria.com</div>
                <div className="font-inter text-xs font-light text-white/60 uppercase tracking-wider">E-mail</div>
              </div>
              <div className="animate-on-scroll space-y-2" style={{ animationDelay: '200ms' }}>
                <div className="font-playfair text-xl md:text-2xl lg:text-3xl font-light">Matosinhos, PT</div>
                <div className="font-inter text-xs font-light text-white/60 uppercase tracking-wider">Localização</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
