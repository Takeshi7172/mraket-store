"use client";

import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorPageProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase">
          Ошибка
        </p>
        <h1 className="font-heading text-4xl lg:text-5xl text-[#F5F5F0]">
          Что-то пошло не так
        </h1>
        <p className="text-[#F5F5F0]/40 max-w-sm mx-auto">
          Произошла неожиданная ошибка. Попробуйте ещё раз.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center bg-[#C9A96E] text-[#0A0A0A] px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-[#e0c080] transition-colors"
          >
            Повторить
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-[#F5F5F0]/20 text-[#F5F5F0] px-8 py-3.5 text-sm tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
