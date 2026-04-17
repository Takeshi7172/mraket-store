"use client";

import dynamic from "next/dynamic";

const NavbarClient = dynamic(
  () => import("@/components/features/layout/Navbar").then((m) => m.Navbar),
  {
    ssr: false,
    loading: () => (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent h-16 lg:h-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
          <span className="font-heading text-xl lg:text-2xl tracking-[0.3em] font-light text-[#F5F5F0]">
            MRAKET
          </span>
        </div>
      </header>
    ),
  }
);

export function NavbarWrapper() {
  return <NavbarClient />;
}
