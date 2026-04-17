"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "@/components/features/catalog/ProductCard";
import { products, CATEGORY_LABELS } from "@/data/products";
import type { Product } from "@/data/products";

type CategoryFilter = Product["category"] | "all";

interface FilterTab {
  value: CategoryFilter;
  label: string;
}

const FILTER_TABS: FilterTab[] = [
  { value: "all", label: "Все" },
  { value: "perfume", label: CATEGORY_LABELS.perfume },
  { value: "skincare", label: CATEGORY_LABELS.skincare },
  { value: "set", label: CATEGORY_LABELS.set },
];

interface ProductGridProps {
  initialCategory?: CategoryFilter;
}

export function ProductGrid({ initialCategory = "all" }: ProductGridProps) {
  const [active, setActive] = useState<CategoryFilter>(initialCategory);

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div
        className="flex flex-wrap items-center gap-2 mb-14"
        role="tablist"
        aria-label="Фильтр по категории"
      >
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active === tab.value}
            onClick={() => setActive(tab.value)}
            className="relative px-5 py-2 text-xs tracking-widest uppercase transition-all duration-250 rounded-full overflow-hidden"
            style={{
              background:
                active === tab.value
                  ? "#0A0A0A"
                  : "transparent",
              color:
                active === tab.value
                  ? "#F5F5F0"
                  : "rgba(10,10,10,0.45)",
              border:
                active === tab.value
                  ? "1px solid #0A0A0A"
                  : "1px solid rgba(10,10,10,0.18)",
            }}
          >
            {active === tab.value && (
              <motion.span
                layoutId="filter-pill-bg"
                className="absolute inset-0 rounded-full"
                style={{ background: "#0A0A0A" }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}

        <span className="ml-auto self-center text-sm text-[#0A0A0A]/35 font-light">
          {filtered.length}{" "}
          {filtered.length === 1
            ? "позиция"
            : filtered.length < 5
            ? "позиции"
            : "позиций"}
        </span>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="py-28 text-center text-[#0A0A0A]/35">
          <p className="text-lg font-heading">Ничего не найдено</p>
        </div>
      )}
    </div>
  );
}
