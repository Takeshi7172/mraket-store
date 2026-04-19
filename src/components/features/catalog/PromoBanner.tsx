"use client";

import { motion } from "framer-motion";

interface PromoBannerProps {
  heading: string;
  subtitle: string;
  badge?: string;
  priceCallout?: string;
}

export function PromoBanner({ heading, subtitle, badge, priceCallout }: PromoBannerProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "#0B0A08", minHeight: "260px" }}
    >
      {/* Copper glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(196,149,106,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Decorative lines */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(196,149,106,0.25), transparent)" }}
      />
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(196,149,106,0.25), transparent)" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 lg:py-20">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 text-[10px] tracking-[0.3em] uppercase text-[#C4956A]"
            style={{
              border: "1px solid rgba(196,149,106,0.25)",
              background: "rgba(196,149,106,0.06)",
            }}
          >
            <span aria-hidden="true" className="text-[8px]">&#9670;</span>
            {badge}
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-light text-[#E8E2D8] leading-none mb-4"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#E8E2D8]/40 text-[13px] lg:text-[15px] max-w-md leading-relaxed mb-4"
        >
          {subtitle}
        </motion.p>

        {priceCallout && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#C4956A] text-[11px] tracking-[0.2em] uppercase"
          >
            {priceCallout}
          </motion.p>
        )}
      </div>
    </div>
  );
}
