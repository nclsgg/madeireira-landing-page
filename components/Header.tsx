'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-8'
      }`}
    >
      <nav className="flex mx-auto px-6 lg:px-12 items-center justify-between">
        <div className="font-playfair text-2xl lg:text-3xl font-light tracking-wider text-white">
          MADEIREIRA
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          <a
            href="#produtos"
            className="font-inter text-sm font-light text-white hover:text-[#8B6F47] transition-colors duration-300"
          >
            Produtos
          </a>
          <a
            href="#sobre"
            className="font-inter text-sm font-light text-white hover:text-[#8B6F47] transition-colors duration-300"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="font-inter text-sm font-light border text-white border-white px-8 py-2 hover:bg-white hover:text-[#8B6F47] transition-all duration-300"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}
