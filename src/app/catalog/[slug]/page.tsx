import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { ProductDetail } from "@/components/features/product/ProductDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Продукт не найден — SENSO" };
  }

  return {
    title: `${product.name} — SENSO | ${product.price.toLocaleString("ru-KZ")}₸`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ${product.price.toLocaleString("ru-KZ")}₸`,
      description: product.description,
      type: "website" as const,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
