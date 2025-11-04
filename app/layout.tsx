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
  title: "PAUS Carpintaria | Excelência em carpintaria e mobiliário desde 1991.",
  description: "Madeira nobre de primeira linha. Sustentabilidade, artesanato e design intemporal.",
  keywords: ["carpintaria", "paus carpintaria", "madeira nobre", "mobiliário", "sustentabilidade", "artesanato"],
  openGraph: {
    title: "PAUS Carpintaria | Excelência em carpintaria e mobiliário desde 1991.",
    description: "Madeira nobre de primeira linha. Sustentabilidade, artesanato e design intemporal.",
    type: "website",
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAUS Carpintaria | Excelência em carpintaria e mobiliário desde 1991.",
    description: "Madeira nobre de primeira linha. Sustentabilidade, artesanato e design intemporal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
