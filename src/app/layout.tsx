import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { NavbarWrapper } from "@/components/features/layout/NavbarWrapper";
import { Footer } from "@/components/features/layout/Footer";
import { WhatsAppCTA } from "@/components/features/layout/WhatsAppCTA";
import { LenisProvider } from "@/components/features/home/LenisProvider";
import { CustomCursor } from "@/components/features/home/CustomCursor";

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
  title: "SENSO — Inspired парфюмерия и K-beauty в Астане",
  description:
    "SENSO — парфюмерные кураторы в Астане. Ароматы и K-beauty, подобранные под ваш характер. Коллекция AUMEKA, корейская косметика, подарочные наборы.",
  keywords:
    "парфюмерные кураторы Астана, подбор аромата Астана, AUMEKA, корейская косметика, K-beauty Казахстан, духи 4500 тенге, бесплатная доставка Астана",
  openGraph: {
    title: "SENSO — Inspired парфюмерия и K-beauty в Астане",
    description:
      "SENSO — парфюмерные кураторы в Астане. Ароматы и K-beauty, подобранные под ваш характер. Акция 2+1 на все ароматы.",
    type: "website",
    locale: "ru_KZ",
    siteName: "SENSO",
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
        <LenisProvider>
          <CustomCursor />
          <NavbarWrapper />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppCTA />
        </LenisProvider>
      </body>
    </html>
  );
}
