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
  title: "MRAKET — Inspired парфюмерия и K-beauty в Астане",
  description:
    "Inspired парфюмерия от 1000₸ и корейская косметика в Астане. AUMEKA-вдохновлённые ароматы, уход за кожей, подарочные наборы. Заказ через WhatsApp.",
  keywords:
    "парфюмерия Астана, купить духи Астана, inspired парфюмерия, AUMEKA, корейская косметика, K-beauty Казахстан, духи 1000 тенге",
  openGraph: {
    title: "MRAKET — Inspired парфюмерия и K-beauty в Астане",
    description:
      "Inspired парфюмерия от 1000₸ и корейская косметика. Заказ через WhatsApp.",
    type: "website",
    locale: "ru_KZ",
    siteName: "MRAKET",
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
