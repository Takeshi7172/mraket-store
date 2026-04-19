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
  inspiration?: string;
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
      "Восточно-цветочный аромат с шафраном и жасмином — богатый, тёплый, незабываемый. Вдохновлён Maison Francis Kurkdjian Baccarat Rouge 540.",
    inspiration: "MFK Baccarat Rouge 540",
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
      "Соблазнительный сладкий аромат с тёмной вишней и ванилью. Дерзкий, чувственный, гипнотизирующий. Вдохновлён Tom Ford.",
    inspiration: "Tom Ford Lost Cherry",
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
      "Культовый тёплый аромат с табаком и ванилью. Пряный, обволакивающий, уютный как вечер у камина. Вдохновлён Tom Ford.",
    inspiration: "Tom Ford Tobacco Vanille",
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
      "Свежий дровяной аромат для современного мужчины. Мятная свежесть открывается тёплым кедром и сандалом. Вдохновлён Chanel.",
    inspiration: "Chanel Bleu de Chanel",
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
      "Легендарный фруктово-дровяной аромат. Ананас, берёза и мускус создают подпись, которую узнают по всему миру. Вдохновлён Creed Aventus.",
    inspiration: "Creed Aventus",
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
      "Пленительный белый цветочный аромат с пионом, мускусом и древесными нотами. Парижская чувственность в каждом флаконе. Вдохновлён Ex Nihilo.",
    inspiration: "Ex Nihilo Fleur Narcotique",
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
      "Осветляющий крем Lancome для сияния и выравнивания тона кожи. Флагманская формула — Advanced Génifique Brightening Technology.",
    image: "/products/lancome-blanc-expert.png",
  },
  {
    id: "s-03",
    slug: "kiko-milano-liquid-skin",
    name: "KIKO Milano Liquid Skin",
    brand: "KIKO Milano",
    category: "skincare",
    price: 2000,
    volume: "30 мл",
    description:
      "Лёгкий тональный флюид с натуральным финишем. Идеально выравнивает тон, не забивает поры, держится весь день.",
    image: "/products/kiko-milano-liquid-skin.png",
  },
  {
    id: "s-04",
    slug: "pusy-brow-gel",
    name: "PUSY Brow Gel",
    brand: "PUSY",
    category: "skincare",
    price: 1500,
    volume: "10 мл",
    description:
      "Фиксирующий гель для бровей. Надёжная фиксация на весь день, естественный объём и ухоженный вид без утяжеления.",
    image: "/products/pusy-brow-gel.png",
  },
  {
    id: "s-05",
    slug: "gold-retinol-mask",
    name: "Gold Retinol Snake Venom Mask",
    brand: "SENZA Beauty",
    category: "skincare",
    price: 1200,
    volume: "1 шт",
    description:
      "Золотая маска с ретинолом и пептидом змеиного яда. Лифтинг-эффект, разглаживание морщин, сияние за 20 минут.",
    image: "/products/gold-retinol-mask.png",
  },
];

export const WHATSAPP_NUMBER = "77XXXXXXXXX";
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
