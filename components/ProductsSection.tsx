import PremiumPlanks from "@/public/premium-planks.png";
import Image from "next/image";

const products = [
  {
    title: "Tábuas Premium",
    description: "Seleção rigorosa de madeiras nobres",
    category: "Essencial",
    image: PremiumPlanks
  },
  {
    title: "Painéis Artesanais",
    description: "Feitos à mão com precisão",
    category: "Exclusivo",
    image: PremiumPlanks
  },
  {
    title: "Estruturas",
    description: "Resistência e beleza natural",
    category: "Profissional",
    image: PremiumPlanks
  },
  {
    title: "Acabamentos",
    description: "Detalhes que fazem a diferença",
    category: "Premium",
    image: PremiumPlanks
  }
];

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-16 md:py-24 lg:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-on-scroll max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2C2C] mb-4 md:mb-6 tracking-tight leading-[1.15]">
            Nossa Coleção
          </h2>
          <p className="font-inter text-base md:text-lg font-light text-[#2C2C2C]/70 max-w-xl mx-auto">
            Cada peça conta uma história de qualidade e dedicação
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
              <Image
                src={product.image}
                alt={product.title}
                layout="responsive"
                width={400}
                height={300}
                className="relative mb-5 md:mb-6 overflow-hidden bg-[#E8E4DE]"
              />
              
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
