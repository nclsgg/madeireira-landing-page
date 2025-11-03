import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madeireira Premium | Madeira de Qualidade Excepcional",
  description: "Madeira nobre de primeira linha. Sustentabilidade, artesanato e design atemporal. Descubra a excelência em cada peça.",
  keywords: ["madeireira", "madeira premium", "madeira nobre", "madeira de qualidade", "sustentabilidade", "artesanato"],
  openGraph: {
    title: "Madeireira Premium | Madeira de Qualidade Excepcional",
    description: "Madeira nobre de primeira linha. Sustentabilidade, artesanato e design atemporal.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madeireira Premium | Madeira de Qualidade Excepcional",
    description: "Madeira nobre de primeira linha. Sustentabilidade, artesanato e design atemporal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
