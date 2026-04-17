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
  title: "SENSO — Inspired парфюмерия и K-beauty в Астане",
  description:
    "Inspired парфюмерия AUMEKA от 4500₸ и корейская косметика в Астане. Те же ноты, что у люксовых брендов — честная цена. Акция 2+1 на все ароматы. Заказ через WhatsApp.",
  keywords:
    "парфюмерия Астана, купить духи Астана, inspired парфюмерия, AUMEKA, корейская косметика, K-beauty Казахстан, духи 4500 тенге, бесплатная доставка Астана",
  openGraph: {
    title: "SENSO — Inspired парфюмерия и K-beauty в Астане",
    description:
      "Inspired парфюмерия от 4500₸ и корейская косметика. Акция 2+1 на все ароматы. Заказ через WhatsApp.",
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
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}
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
