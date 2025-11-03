# 🌳 Landing Page Madeireira Premium

Landing page moderna e minimalista para madeireira, inspirada no estilo editorial da revista Vogue. Design sofisticado que transmite qualidade, sustentabilidade e conexão com a natureza.

## ✨ Características

- **Design Minimalista Editorial**: Muito espaço em branco, tipografia elegante e hierarquia visual clara
- **Tipografia Sofisticada**: Playfair Display (serifada) para títulos e Inter (sans-serif) para corpo
- **Paleta de Cores Premium**:
  - Marrom madeira: `#8B6F47`, `#A0826D`
  - Verde floresta: `#3D5941`, `#6B8E6B`
  - Neutros: `#FAF9F6` (fundo), `#2C2C2C` (texto)
- **Animações Sutis**: Fade-in suave no scroll, hover effects elegantes
- **SEO Otimizado**: Metadata completa, sitemap.xml, robots.txt
- **Mobile-First**: Design responsivo com foco em experiência móvel
- **Performance**: Otimizado para Core Web Vitals

## 🚀 Tecnologias

- **Next.js 16+** com App Router
- **TypeScript**
- **Tailwind CSS** (mobile-first)
- **Google Fonts** (Playfair Display + Inter)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar produção
npm start
```

## 📁 Estrutura

```
madeireira-padrao/
├── app/
│   ├── layout.tsx          # Layout com SEO e fontes
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Estilos globais e animações
│   ├── sitemap.ts          # Sitemap para SEO
│   ├── robots.ts           # Robots.txt
│   └── manifest.json       # PWA manifest
├── components/
│   ├── Header.tsx          # Header com navegação
│   ├── HeroSection.tsx     # Hero com imagem full-width
│   ├── ProductsSection.tsx # Grid de produtos
│   ├── AboutSection.tsx    # Sobre a empresa
│   ├── CTASection.tsx      # Call-to-action + contato
│   ├── Footer.tsx          # Footer com links
│   └── ui/
│       └── button.tsx      # Componente de botão
└── lib/
    └── utils.ts            # Funções utilitárias
```

## 🎨 Seções da Landing Page

1. **Header** - Navegação minimalista com logo e links
2. **Hero Section** - Imagem impactante com headline elegante
3. **Products Section** - Grid de produtos com categorias
4. **About Section** - História e valores da empresa
5. **CTA Section** - Formulário de contato com informações
6. **Footer** - Links, redes sociais e copyright

## 🖼️ Imagens Recomendadas

Para melhor resultado visual, adicione imagens de alta qualidade na pasta `/public`:

- **Hero**: Textura detalhada de madeira premium (1920x1080px ou maior)
- **Produtos**: Fotos de tábuas, painéis, estruturas (mínimo 800x1000px)
- **Sobre**: Foto da oficina, madeiras ou equipe (1200x1500px)

### Dicas de Fotografia:
- Use iluminação natural sempre que possível
- Capture texturas e detalhes da madeira
- Mantenha composições clean e minimalistas
- Aplique filtro sutil (ligeiramente dessaturado) para manter o tom editorial

## 🎯 Personalização

### Cores
Edite as variáveis CSS em `app/globals.css`:
```css
:root {
  --wood-primary: #8B6F47;
  --wood-secondary: #A0826D;
  --forest-dark: #3D5941;
  --forest-light: #6B8E6B;
}
```

### Conteúdo
- **Produtos**: Edite o array `products` em `components/ProductsSection.tsx`
- **Contato**: Atualize informações em `components/CTASection.tsx`
- **SEO**: Modifique metadata em `app/layout.tsx`

### Fontes
Para trocar as fontes, edite `app/layout.tsx` e importe do Google Fonts.

## 🔍 SEO

A landing page está otimizada para SEO com:
- ✅ Metadata completa (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ HTML semântico
- ✅ Estrutura de headings (h1 → h6)
- ✅ Alt text em imagens (adicione nas suas imagens)

### Próximos Passos de SEO:
1. Adicione Google Analytics / Search Console
2. Configure schema.org (JSON-LD) para rich snippets
3. Otimize imagens (WebP format, lazy loading)
4. Adicione blog para conteúdo

## 📱 Responsividade

Breakpoints do Tailwind CSS:
- `sm`: 640px (celular grande)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (desktop grande)
- `2xl`: 1536px (desktop extra)

## ⚡ Performance

Para melhor performance:
- Use o componente `next/image` para todas as imagens
- Otimize imagens antes do upload (WebP, compressão)
- Lazy load de componentes pesados
- Minimize uso de JavaScript do lado do cliente

## 📝 Checklist de Lançamento

- [ ] Adicionar imagens reais de alta qualidade
- [ ] Atualizar informações de contato reais
- [ ] Configurar domínio personalizado
- [ ] Adicionar Google Analytics
- [ ] Testar em dispositivos móveis reais
- [ ] Verificar Core Web Vitals (Lighthouse)
- [ ] Configurar HTTPS
- [ ] Testar formulário de contato
- [ ] Adicionar links de redes sociais reais
- [ ] Revisar todo o conteúdo textual

## 🎨 Inspiração

Este design é inspirado em:
- **Vogue Magazine** - Editorial minimalista e sofisticado
- **Kinfolk** - Estética clean e lifestyle
- **Cereal Magazine** - Fotografia e espaçamento generoso

## 📄 Licença

Este projeto está sob licença MIT.

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS**

