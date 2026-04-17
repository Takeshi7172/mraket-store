import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена — MRAKET",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase">404</p>
        <h1 className="font-heading text-5xl lg:text-7xl text-[#F5F5F0]">
          Страница
          <br />не найдена
        </h1>
        <p className="text-[#F5F5F0]/40 max-w-sm mx-auto">
          Возможно, страница была перемещена или адрес указан неверно.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#C9A96E] text-[#0A0A0A] px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-[#e0c080] transition-colors"
          >
            На главную
          </Link>
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center border border-[#F5F5F0]/20 text-[#F5F5F0] px-8 py-3.5 text-sm tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
          >
            Каталог
          </Link>
        </div>
      </div>
    </div>
  );
}
