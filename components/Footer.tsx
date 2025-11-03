export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <div className="font-playfair text-2xl font-light tracking-wider text-[#2C2C2C] mb-4">
              MADEIREIRA
            </div>
            <p className="font-inter text-sm font-light text-[#2C2C2C]/60 leading-relaxed">
              Excelência em madeira.<br />
              Compromisso com a natureza.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-inter text-xs font-light text-[#2C2C2C] uppercase tracking-widest mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#produtos"
                  className="font-inter text-sm font-light text-[#2C2C2C]/70 hover:text-[#8B6F47] transition-colors duration-300"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="font-inter text-sm font-light text-[#2C2C2C]/70 hover:text-[#8B6F47] transition-colors duration-300"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="font-inter text-sm font-light text-[#2C2C2C]/70 hover:text-[#8B6F47] transition-colors duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-inter text-xs font-light text-[#2C2C2C] uppercase tracking-widest mb-4">
              Redes Sociais
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-inter text-sm font-light text-[#2C2C2C]/70 hover:text-[#8B6F47] transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-sm font-light text-[#2C2C2C]/70 hover:text-[#8B6F47] transition-colors duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-sm font-light text-[#2C2C2C]/70 hover:text-[#8B6F47] transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 md:pt-8 border-t border-[#2C2C2C]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="font-inter text-xs font-light text-[#2C2C2C]/50">
              © {currentYear} Madeireira. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="#"
                className="font-inter text-xs font-light text-[#2C2C2C]/50 hover:text-[#8B6F47] transition-colors duration-300 whitespace-nowrap"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="font-inter text-xs font-light text-[#2C2C2C]/50 hover:text-[#8B6F47] transition-colors duration-300 whitespace-nowrap"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
