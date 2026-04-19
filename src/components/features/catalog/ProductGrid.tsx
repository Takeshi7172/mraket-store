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
        className="flex flex-wrap items-center gap-2 mb-16"
        role="tablist"
        aria-label="Фильтр по категории"
      >
        {FILTER_TABS.map((tab) => {
          const isActive = active === tab.value;
          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.value)}
              className="relative px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase transition-all duration-300 overflow-hidden"
              style={{
                background: isActive ? "#0B0A08" : "transparent",
                color: isActive ? "#E8E2D8" : "rgba(26,24,20,0.4)",
                border: isActive ? "1px solid #0B0A08" : "1px solid rgba(26,24,20,0.12)",
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0"
                  style={{ background: "#0B0A08" }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}

        <span className="ml-auto self-center text-[11px] text-[#1A1814]/30">
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-14"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="py-28 text-center text-[#1A1814]/30">
          <p className="font-heading text-xl font-light">Ничего не найдено</p>
        </div>
      )}
    </div>
  );
}
