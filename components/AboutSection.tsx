import Image from "next/image";
import AboutUsImage from "@/public/about-us.png";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-on-scroll">
            {/* <div className="relative aspect-4/5 bg-[#E8E4DE]">
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="text-center space-y-3">
                  <div className="w-48 h-48 mx-auto border border-[#8B6F47] flex items-center justify-center">
                    <span className="font-playfair text-[#8B6F47] text-sm">Imagem</span>
                  </div>
                  <p className="font-inter text-xs text-[#8B6F47]">Adicione imagem sobre a empresa</p>
                  <p className="font-inter text-xs text-[#8B6F47]/60">(oficina, madeiras, equipe)</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-[#2C2C2C]/5" />
            </div> */}
            <Image
              src={AboutUsImage}
              alt="Descrição da imagem"
              layout="responsive"
              className="relative aspect-[4/5] mb-5 md:mb-6 overflow-hidden bg-[#E8E4DE]"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-on-scroll space-y-6 md:space-y-8 max-w-xl mx-auto lg:mx-0 lg:max-w-none text-center lg:text-left px-4 lg:px-0">
            <div className="space-y-4 md:space-y-6">
              <span className="font-inter text-xs font-light text-[#8B6F47] tracking-widest uppercase block">
                Nossa História
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2C2C] leading-[1.15]">
                Três décadas de<br />
                <span className="italic">maestria</span>
              </h2>
            </div>

            <div className="space-y-5 md:space-y-6 font-inter text-base md:text-lg font-light text-[#2C2C2C]/80 leading-relaxed">
              <p>
                Desde 1991, especializados em carpintaria de alto padrão,
                unindo técnicas tradicionais e tecnologia moderna.
              </p>
              <p>
                Trabalhamos exclusivamente com madeiras certificadas,
                respeitando o meio ambiente e garantindo procedência.
              </p>
              <p>
                Da seleção da matéria-prima ao acabamento final,
                cada projeto recebe atenção artesanal e expertise profissional.
              </p>
            </div>

            <div className="pt-4 md:pt-6">
              <a
                href="#contato"
                className="inline-block font-inter text-sm font-light text-[#2C2C2C] border-b border-[#2C2C2C] pb-1 hover:text-[#8B6F47] hover:border-[#8B6F47] transition-all duration-300"
              >
                Saiba mais sobre nós
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
