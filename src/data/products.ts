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
  category: "perfume" | "skincare" | "set";
  price: number;
  volume: string;
  description: string;
  inspiration?: string;
  notes?: ProductNotes;
  image: string;
  featured?: boolean;
}

export const PROMO_2_PLUS_1 = "2+1 — купи 2 аромата, получи третий в подарок";
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
    price: 4500,
    volume: "60 мл",
    description:
      "Восточно-цветочный аромат с шафраном и жасмином — богатый, тёплый, незабываемый. Вдохновлён Maison Francis Kurkdjian Baccarat Rouge 540.",
    inspiration: "MFK Baccarat Rouge 540",
    notes: {
      top: ["Шафран", "Жасмин"],
      heart: ["Амариллис", "Кедр"],
      base: ["Амбра", "Мускус", "Ладан"],
    },
    image: "/products/photo_10.jpg",
    featured: true,
  },
  {
    id: "p-02",
    slug: "lost-cherry",
    name: "Lost Cherry",
    brand: "AUMEKA",
    category: "perfume",
    price: 4500,
    volume: "60 мл",
    description:
      "Соблазнительный сладкий аромат с тёмной вишней и ванилью. Дерзкий, чувственный, гипнотизирующий. Вдохновлён Tom Ford.",
    inspiration: "Tom Ford Lost Cherry",
    notes: {
      top: ["Вишня", "Горький миндаль"],
      heart: ["Турецкая роза", "Хорватская роза"],
      base: ["Бензоин", "Ваниль", "Перу бальзам"],
    },
    image: "/products/photo_9.jpg",
    featured: true,
  },
  {
    id: "p-03",
    slug: "tobacco-vanille",
    name: "Tobacco Vanille",
    brand: "AUMEKA",
    category: "perfume",
    price: 4500,
    volume: "60 мл",
    description:
      "Культовый тёплый аромат с табаком и ванилью. Пряный, обволакивающий, уютный как вечер у камина. Вдохновлён Tom Ford.",
    inspiration: "Tom Ford Tobacco Vanille",
    notes: {
      top: ["Табак", "Пряности"],
      heart: ["Ваниль", "Какао"],
      base: ["Тонка", "Сухофрукты", "Смолы"],
    },
    image: "/products/photo_11.jpg",
  },
  {
    id: "p-04",
    slug: "bleu-for-men",
    name: "BLEU for Men",
    brand: "AUMEKA",
    category: "perfume",
    price: 4500,
    volume: "65 мл",
    description:
      "Свежий дровяной аромат для современного мужчины. Мятная свежесть открывается тёплым кедром и сандалом. Вдохновлён Chanel.",
    inspiration: "Chanel Bleu de Chanel",
    notes: {
      top: ["Мята", "Цитрус", "Пинк пеппер"],
      heart: ["Кедр", "Имбирь", "Изо Е Супер"],
      base: ["Сандал", "Пачули", "Лабданум"],
    },
    image: "/products/photo_4.jpg",
    featured: true,
  },
  {
    id: "p-05",
    slug: "cread-1790",
    name: "CREAD 1790",
    brand: "AUMEKA",
    category: "perfume",
    price: 4500,
    volume: "60 мл",
    description:
      "Легендарный фруктово-дровяной аромат. Ананас, берёза и мускус создают подпись, которую узнают по всему миру. Вдохновлён Creed Aventus.",
    inspiration: "Creed Aventus",
    notes: {
      top: ["Ананас", "Бергамот", "Яблоко"],
      heart: ["Берёза", "Патчули", "Роза"],
      base: ["Мускус", "Окмосс", "Амбра", "Ваниль"],
    },
    image: "/products/photo_7.jpg",
  },
  {
    id: "p-06",
    slug: "bright-crystal",
    name: "Bright Crystal",
    brand: "AUMEKA",
    category: "perfume",
    price: 4500,
    volume: "60 мл",
    description:
      "Лёгкий цветочный аромат с магнолией, лотосом и мускусом. Нежный, женственный, чистый как хрусталь. Вдохновлён Versace.",
    inspiration: "Versace Bright Crystal",
    notes: {
      top: ["Гранат", "Лотос", "Юзу"],
      heart: ["Магнолия", "Пион", "Роза"],
      base: ["Мускус", "Амбра", "Акцент"],
    },
    image: "/products/photo_20.jpg",
  },
  {
    id: "p-07",
    slug: "le-fleur-narcotique",
    name: "Le Fleur Narcotique",
    brand: "AUMEKA",
    category: "perfume",
    price: 4500,
    volume: "60 мл",
    description:
      "Пленительный белый цветочный аромат с пионом, мускусом и древесными нотами. Парижская чувственность в каждом флаконе. Вдохновлён Ex Nihilo.",
    inspiration: "Ex Nihilo Fleur Narcotique",
    notes: {
      top: ["Пион", "Яблоко", "Личи"],
      heart: ["Роза", "Жасмин", "Мускус"],
      base: ["Белый мускус", "Древесные ноты", "Амбра"],
    },
    image: "/products/photo_2.jpg",
  },
  {
    id: "p-08",
    slug: "j20",
    name: "J20",
    brand: "AUMEKA",
    category: "perfume",
    price: 4500,
    volume: "60 мл",
    description:
      "Минималистичный молекулярный аромат, построенный на Iso E Super и амброксане. Становится вашей второй кожей. Вдохновлён Escentric Molecules.",
    inspiration: "Escentric Molecules Molecule 02",
    notes: {
      top: ["Амброксан"],
      heart: ["Iso E Super", "Амбра"],
      base: ["Белый мускус"],
    },
    image: "/products/photo_5.jpg",
  },
  // ── Уход за кожей ────────────────────────────────────────────────────────
  {
    id: "s-01",
    slug: "k-beauty-4in1-cream",
    name: "4-in-1 K-beauty Cream",
    brand: "K-beauty",
    category: "skincare",
    price: 1500,
    volume: "50 мл",
    description:
      "Многофункциональный крем-ампула — 4 шага в 1 продукте: ампула, эссенция, крем и церамиды. Интенсивное увлажнение и восстановление барьера кожи.",
    image: "/products/photo_8.jpg",
    featured: true,
  },
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
    image: "/products/photo_6.jpg",
  },
  {
    id: "s-03",
    slug: "miss-lara-lip",
    name: "Miss Lara Lip",
    brand: "Miss Lara",
    category: "skincare",
    price: 800,
    volume: "10 мл",
    description:
      "Интенсивно увлажняющий продукт для губ. Нежная текстура восстанавливает мягкость и цвет, дарит ощущение ухоженных губ.",
    image: "/products/photo_15.jpg",
  },
  // ── Наборы ───────────────────────────────────────────────────────────────
  {
    id: "g-01",
    slug: "first-date-set",
    name: "Набор «First Date»",
    brand: "SENSO",
    category: "set",
    price: 8000,
    volume: "2 × 60 мл",
    description:
      "Два аромата на выбор из нашей парфюмерной коллекции. Идеальный способ открыть для себя AUMEKA или подарить близкому человеку.",
    image: "/products/photo_1.jpg",
  },
  {
    id: "g-02",
    slug: "gift-set",
    name: "Набор «Gift»",
    brand: "SENSO",
    category: "set",
    price: 5500,
    volume: "60 мл + маска",
    description:
      "Парфюм на выбор + маска для лица в подарочной упаковке. Забота о себе или идеальный подарок к любому поводу.",
    image: "/products/photo_26.jpg",
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
  set: "Наборы",
};
