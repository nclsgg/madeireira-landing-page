export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full bg-[#A0826D]/10">
          {/* Hero Video */}
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/30" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-8">
        <div className="max-w-7xl mx-auto w-full animate-fade-in">
          <div className="max-w-4xl flex flex-col items-start gap-5">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-white  tracking-tighter leading-[0.95]">
              Madeira que<br />
              <span className="italic font-light">transcende</span>
            </h1>
            <div className="space-y-2">
              <p className="font-inter text-sm md:text-base lg:text-lg font-light text-white/90 max-w-md leading-relaxed tracking-wide">
                Artesanato excepcional
              </p>
              <p className="font-inter text-sm md:text-base lg:text-lg font-light text-white/90 max-w-md leading-relaxed tracking-wide">
                Sustentabilidade atemporal
              </p>
            </div>
            <a
              href="#produtos"
              className="inline-flex items-center font-inter text-sm md:text-base font-normal text-white border border-white/40 px-12 md:px-16 py-4 md:py-5 hover:bg-white hover:text-[#2C2C2C] hover:border-white transition-all duration-500 uppercase tracking-[0.2em] backdrop-blur-sm"
            >
              Explorar Coleção
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-[#2C2C2C]/30" />
      </div>
    </section>
  );
}
