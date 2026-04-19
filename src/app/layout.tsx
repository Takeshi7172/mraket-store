import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { NavbarWrapper } from "@/components/features/layout/NavbarWrapper";
import { Footer } from "@/components/features/layout/Footer";
import { WhatsAppCTA } from "@/components/features/layout/WhatsAppCTA";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SENZA — Ароматы, уход и подарки в Астане",
  description:
    "SENZA — кураторы чувств в Астане. Подбираем ароматы, уход и подарки под твоё настроение. Акция 1+1. Доставка по Астане.",
  keywords:
    "парфюмерия Астана, уход за кожей Астана, корейская косметика, подарки Астана, ароматы, SENZA",
  openGraph: {
    title: "SENZA — Ароматы, уход и подарки в Астане",
    description:
      "SENZA — кураторы чувств. Отбираем ароматы, уход и подарки, которые раскрывают тебя. Акция 1+1 на ароматы.",
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
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
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
