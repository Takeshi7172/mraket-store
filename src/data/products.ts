export interface ProductNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: "perfume" | "skincare";
  price: number;
  volume: string;
  description: string;
  notes?: ProductNotes;
  image: string;
  featured?: boolean;
}

export const PROMO_1_PLUS_1 =
  "1+1 — купи 1 аромат за 9 900 ₸, получи второй в подарок. Два за 14 990 ₸";
// backwards-compat alias
export const PROMO_2_PLUS_1 = PROMO_1_PLUS_1;
export const FREE_DELIVERY_THRESHOLD = 5000;
export const FREE_DELIVERY_TEXT = "Бесплатная доставка по Астане от 5 000 ₸";

export const products: Product[] = [
  // ── Парфюмерия ──────────────────────────────────────────────────────────
  {
    id: "p-01",
    slug: "barakkat-rouge-540",
    name: "Barakkat Rouge 540",
    brand: "AUMEKA",
    category: "perfume",
    price: 9900,
    volume: "60 мл",
    description:
      "Шафран, жасмин и амбра. Аромат, который запоминают с первого раза. Комплименты гарантированы — проверено на себе.",
    notes: {
      top: ["Шафран", "Жасмин"],
      heart: ["Амариллис", "Кедр"],
      base: ["Амбра", "Мускус", "Ладан"],
    },
    image: "/products/barakkat-rouge-540.png",
    featured: true,
  },
  {
    id: "p-02",
    slug: "lost-cherry",
    name: "Lost Cherry",
    brand: "AUMEKA",
    category: "perfume",
    price: 9900,
    volume: "60 мл",
    description:
      "Тёмная вишня и ваниль. Сладкий, дерзкий, цепляет. Один из самых популярных ароматов у наших клиентов.",
    notes: {
      top: ["Вишня", "Горький миндаль"],
      heart: ["Турецкая роза", "Хорватская роза"],
      base: ["Бензоин", "Ваниль", "Перу бальзам"],
    },
    image: "/products/lost-cherry.png",
    featured: true,
  },
  {
    id: "p-03",
    slug: "tobacco-vanille",
    name: "Tobacco Vanille",
    brand: "AUMEKA",
    category: "perfume",
    price: 9900,
    volume: "60 мл",
    description:
      "Табак, ваниль, какао. Тёплый как вечер с хорошей компанией. Унисекс — нравится и девушкам, и парням.",
    notes: {
      top: ["Табак", "Пряности"],
      heart: ["Ваниль", "Какао"],
      base: ["Тонка", "Сухофрукты", "Смолы"],
    },
    image: "/products/tobacco-vanille.png",
  },
  {
    id: "p-04",
    slug: "bleu-for-men",
    name: "BLEU for Men",
    brand: "AUMEKA",
    category: "perfume",
    price: 9900,
    volume: "65 мл",
    description:
      "Мята, кедр и сандал. Свежий, но не банальный. Классика мужского аромата без лишнего.",
    notes: {
      top: ["Мята", "Цитрус", "Пинк пеппер"],
      heart: ["Кедр", "Имбирь", "Изо Е Супер"],
      base: ["Сандал", "Пачули", "Лабданум"],
    },
    image: "/products/bleu-for-men.png",
    featured: true,
  },
  {
    id: "p-05",
    slug: "cread-1790",
    name: "CREAD 1790",
    brand: "AUMEKA",
    category: "perfume",
    price: 9900,
    volume: "60 мл",
    description:
      "Ананас, берёза и мускус. Аромат-подпись — надел один раз, и все спрашивают 'чем пахнешь?'",
    notes: {
      top: ["Ананас", "Бергамот", "Яблоко"],
      heart: ["Берёза", "Патчули", "Роза"],
      base: ["Мускус", "Окмосс", "Амбра", "Ваниль"],
    },
    image: "/products/cread-1790.png",
  },
  {
    id: "p-07",
    slug: "le-fleur-narcotique",
    name: "Le Fleur Narcotique",
    brand: "AUMEKA",
    category: "perfume",
    price: 9900,
    volume: "60 мл",
    description:
      "Пион, роза и белый мускус. Лёгкий цветочный — идеален на каждый день. Не перебивает, а дополняет.",
    notes: {
      top: ["Пион", "Яблоко", "Личи"],
      heart: ["Роза", "Жасмин", "Мускус"],
      base: ["Белый мускус", "Древесные ноты", "Амбра"],
    },
    image: "/products/le-fleur-narcotique.png",
  },
  // ── Уход за кожей ────────────────────────────────────────────────────────
  {
    id: "s-02",
    slug: "lancome-blanc-expert",
    name: "Lancome Blanc Expert Cream",
    brand: "Lancome",
    category: "skincare",
    price: 2500,
    volume: "80 мл",
    description:
      "Осветляющий крем Lancome. Выравнивает тон, убирает тусклость. 80 мл хватает надолго.",
    image: "/products/lancome-blanc-expert.png",
  },
  {
    id: "s-03",
    slug: "kiko-milano-liquid-skin",
    name: "KIKO Milano Liquid Skin",
    brand: "KIKO Milano",
    category: "skincare",
    price: 2500,
    volume: "30 мл",
    description:
      "Тональный флюид с натуральным финишем. Не забивает поры, держится весь день. 30 мл.",
    image: "/products/kiko-milano-liquid-skin.png",
  },
  {
    id: "s-04",
    slug: "pusy-brow-gel",
    name: "PUSY Brow Gel",
    brand: "PUSY",
    category: "skincare",
    price: 2000,
    volume: "10 мл",
    description:
      "Фиксирует брови на весь день. Без утяжеления, без белых хлопьев. Просто работает.",
    image: "/products/pusy-brow-gel.png",
  },
  {
    id: "s-05",
    slug: "gold-retinol-mask",
    name: "Gold Retinol Snake Venom Mask",
    brand: "SENZA Beauty",
    category: "skincare",
    price: 3500,
    volume: "1 шт",
    description:
      "Золотая маска с ретинолом. Лифтинг-эффект за 20 минут. Идеальна перед важным событием.",
    image: "/products/gold-retinol-mask.png",
  },
];

export const WHATSAPP_NUMBERS = [
  { number: "87086659517", label: "WhatsApp 1" },
  { number: "87712222245", label: "WhatsApp 2" },
  { number: "87054443231", label: "WhatsApp 3" },
] as const;

// Primary number for single-link contexts (order buttons, etc.)
export const WHATSAPP_NUMBER = WHATSAPP_NUMBERS[0].number;
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildOrderMessage(productName: string, price: number): string {
  return encodeURIComponent(
    `Здравствуйте! Хочу заказать "${productName}" за ${price.toLocaleString("ru-KZ")}₸. Расскажите об оплате и доставке.`
  );
}

export function getWhatsAppOrderUrl(
  productName: string,
  price: number
): string {
  return `${WHATSAPP_URL}?text=${buildOrderMessage(productName, price)}`;
}

export function getProductsByCategory(
  category: Product["category"]
): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(
  product: Product,
  limit = 3
): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export const CATEGORY_LABELS: Record<Product["category"], string> = {
  perfume: "Парфюмерия",
  skincare: "Уход за кожей",
};
