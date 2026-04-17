import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { NavbarWrapper } from "@/components/features/layout/NavbarWrapper";
import { Footer } from "@/components/features/layout/Footer";
import { WhatsAppCTA } from "@/components/features/layout/WhatsAppCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SENZA — Ароматы, уход и подарки в Астане",
  description:
    "SENZA — кураторы чувств в Астане. Ароматы, уход за кожей и подарки, собранные со вкусом. Акция 2+1 на ароматы. Доставка по Астане.",
  keywords:
    "парфюмерия Астана, уход за кожей Астана, корейская косметика, подарки Астана, ароматы куратор, SENZA",
  openGraph: {
    title: "SENZA — Ароматы, уход и подарки в Астане",
    description:
      "SENZA — кураторы чувств. Отбираем ароматы, уход и подарки, которые раскрывают тебя. Акция 2+1 на ароматы.",
    type: "website",
    locale: "ru_KZ",
    siteName: "SENZA",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <NavbarWrapper />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
