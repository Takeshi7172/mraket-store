"use client";

import { useState } from "react";
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
        className="flex flex-wrap gap-2 mb-12"
        role="tablist"
        aria-label="Фильтр по категории"
      >
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active === tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200 ${
              active === tab.value
                ? "bg-[#0A0A0A] text-[#F5F5F0]"
                : "border border-[#0A0A0A]/20 text-[#0A0A0A]/60 hover:border-[#0A0A0A]/50 hover:text-[#0A0A0A]"
            }`}
          >
            {tab.label}
          </button>
        ))}
        <span className="ml-auto self-center text-sm text-[#0A0A0A]/40">
          {filtered.length}{" "}
          {filtered.length === 1
            ? "позиция"
            : filtered.length < 5
            ? "позиции"
            : "позиций"}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center text-[#0A0A0A]/40">
          <p className="text-lg">Ничего не найдено</p>
        </div>
      )}
    </div>
  );
}
