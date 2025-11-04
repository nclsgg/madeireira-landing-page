import PremiumPlanks from "@/public/premium-planks.png";
import Acabamentos from "@/public/acabamentos.jpg";
import Estruturas from "@/public/estruturas.jpg";
import PaineisRipados from "@/public/paineis-ripados.webp";
import Image from "next/image";

const products = [
  {
    title: "Madeiras Seleccionadas",
    description: "Tábuas e pranchas de madeiras nobres nacionais e importadas",
    category: "Essencial",
    image: PremiumPlanks
  },
  {
    title: "Painéis Decorativos",
    description: "Painéis ripados e revestimentos artesanais à medida",
    category: "Exclusivo",
    image: PaineisRipados
  },
  {
    title: "Estruturas e Vigas",
    description: "Peças estruturais de alta resistência para construção",
    category: "Profissional",
    image: Estruturas
  },
  {
    title: "Acabamentos Finos",
    description: "Molduras, rodapés e detalhes que valorizam o seu projecto",
    category: "Premium",
    image: Acabamentos
  }
];

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-16 md:py-24 lg:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-on-scroll max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2C2C] mb-4 md:mb-6 tracking-tight leading-[1.15]">
            Os Nossos Produtos
          </h2>
          <p className="font-inter text-base md:text-lg font-light text-[#2C2C2C]/70 max-w-xl mx-auto">
            Soluções completas em carpintaria para residências e empresas
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image Placeholder */}
              <div className="relative w-full aspect-4/3 mb-5 md:mb-6 overflow-hidden bg-[#E8E4DE] rounded-sm">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Product Info */}
              <div className="space-y-2 md:space-y-3 text-center px-4">
                <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl font-light text-[#2C2C2C] group-hover:text-[#8B6F47] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="font-inter text-sm md:text-base font-light text-[#2C2C2C]/60 leading-relaxed max-w-md mx-auto">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
