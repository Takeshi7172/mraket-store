"use client";

import dynamic from "next/dynamic";

const NavbarClient = dynamic(
  () => import("@/components/features/layout/Navbar").then((m) => m.Navbar),
  {
    ssr: false,
    loading: () => (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent h-16 lg:h-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex items-center">
          <span className="font-heading text-[22px] lg:text-[26px] tracking-[0.4em] font-light text-[#E8E2D8]">
            SENZA
          </span>
        </div>
      </header>
    ),
  }
);

export function NavbarWrapper() {
  return <NavbarClient />;
}
