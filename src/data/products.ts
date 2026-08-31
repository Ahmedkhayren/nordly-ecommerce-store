export type Category = "Furniture" | "Lighting" | "Textiles" | "Home Decor" | "Tableware" | "Accessories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  subcategory: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  shortDescription: string;
  colors: string[];
  materials: string[];
  dimensions: string;
  stockStatus: "In stock" | "Low stock";
  rating: number;
  reviewCount: number;
  newArrival?: boolean;
  bestSeller?: boolean;
  featured?: boolean;
  collection: "new" | "best" | "soft-neutrals";
  image: string;
  secondaryImage?: string;
  imagePosition: string;
};

const descriptions: Record<Category, string> = {
  Furniture: "A considered piece with tactile materials and an easy, lasting presence in everyday spaces.",
  Lighting: "Soft, useful illumination designed to bring a quiet glow to the moments at home.",
  Textiles: "Natural texture and gentle warmth, made for slow mornings and well-lived rooms.",
  "Home Decor": "A small sculptural accent that adds warmth and character without asking for attention.",
  Tableware: "A beautifully simple object for the daily rituals that make a home feel like yours.",
  Accessories: "Functional storage and thoughtful details for the practical corners of the home."
};

const secondaryByCategory: Record<Category, string> = {
  Furniture: "/images/products/fjord-lounge-chair.png",
  Lighting: "/images/products/freja-pendant-light.png",
  Textiles: "/images/products/sage-wool-blanket.png",
  "Home Decor": "/images/products/havn-ceramic-vase.png",
  Tableware: "/images/products/alba-tableware-set.png",
  Accessories: "/images/products/kora-storage-basket.png"
};

const product = (id: number, name: string, category: Category, subcategory: string, price: number, opts: Partial<Product> = {}): Product => ({
  id: String(id), slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""), name, category, subcategory, price,
  description: descriptions[category] + " Crafted as a fictional NORDLY portfolio collection for thoughtful modern living.",
  shortDescription: descriptions[category], colors: ["Natural", "Warm White", "Sage"], materials: ["Oak", "Linen"], dimensions: "W 42 cm × D 38 cm × H 56 cm", stockStatus: "In stock", rating: 4.8, reviewCount: 24, collection: "soft-neutrals", image: `/images/products/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}.png`, secondaryImage: secondaryByCategory[category], imagePosition: "50% 50%", ...opts
});

export const products: Product[] = [
  product(1, "Copenhagen Table Lamp", "Lighting", "Table Lamps", 129, { compareAtPrice: 159, newArrival: true, bestSeller: true, featured: true, collection: "new", imagePosition: "50% 51%", materials: ["Ceramic", "Linen"], dimensions: "Ø 28 cm × H 46 cm", reviewCount: 48 }),
  product(2, "Luna Throw Pillow", "Textiles", "Cushions", 48, { newArrival: true, collection: "new", imagePosition: "76% 57%", materials: ["Linen", "Down"], dimensions: "50 cm × 50 cm" }),
  product(3, "Oakwood Dining Chair", "Furniture", "Chairs", 289, { bestSeller: true, collection: "best", imagePosition: "80% 55%", materials: ["Oak", "Wool"], dimensions: "W 50 cm × D 54 cm × H 78 cm", reviewCount: 69 }),
  product(4, "Rattan Storage Basket", "Accessories", "Storage Baskets", 68, { featured: true, collection: "soft-neutrals", imagePosition: "55% 56%", materials: ["Rattan"], dimensions: "Ø 38 cm × H 35 cm" }),
  product(5, "Linen Duvet Cover", "Textiles", "Blankets", 149, { collection: "soft-neutrals", imagePosition: "22% 63%", materials: ["Linen"], dimensions: "Queen / 230 cm × 220 cm" }),
  product(6, "Nordic Floor Lamp", "Lighting", "Floor Lamps", 349, { bestSeller: true, collection: "best", imagePosition: "47% 48%", materials: ["Metal", "Linen"], dimensions: "Ø 30 cm × H 148 cm" }),
  product(7, "Stoneware Mug Set", "Tableware", "Mugs", 54, { newArrival: true, collection: "new", imagePosition: "48% 58%", materials: ["Ceramic"], dimensions: "Set of 4 / 320 ml" }),
  product(8, "Arne Lounge Chair", "Furniture", "Chairs", 895, { bestSeller: true, featured: true, collection: "best", imagePosition: "16% 61%", materials: ["Oak", "Linen"], dimensions: "W 76 cm × D 80 cm × H 75 cm", reviewCount: 42 }),
  product(9, "Sage Wool Blanket", "Textiles", "Blankets", 118, { collection: "soft-neutrals", imagePosition: "20% 62%", materials: ["Wool"], dimensions: "130 cm × 180 cm" }),
  product(10, "Lykke Side Table", "Furniture", "Tables", 239, { newArrival: true, collection: "new", imagePosition: "50% 54%", materials: ["Oak"], dimensions: "Ø 42 cm × H 48 cm" }),
  product(11, "Havn Ceramic Vase", "Home Decor", "Vases", 72, { featured: true, collection: "soft-neutrals", imagePosition: "48% 59%", materials: ["Ceramic"], dimensions: "Ø 16 cm × H 27 cm" }),
  product(12, "Freja Pendant Light", "Lighting", "Pendant Lights", 215, { collection: "best", bestSeller: true, imagePosition: "50% 45%", materials: ["Glass", "Metal"], dimensions: "Ø 38 cm × H 28 cm" }),
  product(13, "Oslo Oak Bench", "Furniture", "Tables", 425, { collection: "soft-neutrals", imagePosition: "15% 67%", materials: ["Oak"], dimensions: "W 120 cm × D 36 cm × H 45 cm" }),
  product(14, "Mira Linen Cushion", "Textiles", "Cushions", 52, { compareAtPrice: 65, collection: "new", newArrival: true, imagePosition: "76% 63%", materials: ["Linen", "Down"], dimensions: "45 cm × 45 cm" }),
  product(15, "Kora Storage Basket", "Accessories", "Storage Baskets", 84, { collection: "soft-neutrals", imagePosition: "56% 63%", materials: ["Rattan"], dimensions: "Ø 42 cm × H 38 cm" }),
  product(16, "Aalto Desk Lamp", "Lighting", "Table Lamps", 188, { collection: "best", bestSeller: true, imagePosition: "53% 54%", materials: ["Metal", "Ceramic"], dimensions: "W 21 cm × H 42 cm" }),
  product(17, "Soren Coffee Table", "Furniture", "Tables", 489, { collection: "soft-neutrals", imagePosition: "14% 66%", materials: ["Oak"], dimensions: "W 110 cm × D 60 cm × H 38 cm" }),
  product(18, "Moss Glass Carafe", "Tableware", "Serving Pieces", 39, { collection: "new", newArrival: true, imagePosition: "54% 61%", materials: ["Glass"], dimensions: "1.2 L" }),
  product(19, "Birch Wall Shelf", "Furniture", "Storage", 119, { collection: "soft-neutrals", imagePosition: "14% 43%", materials: ["Oak"], dimensions: "W 70 cm × D 20 cm × H 18 cm" }),
  product(20, "Alba Tableware Set", "Tableware", "Bowls", 165, { bestSeller: true, collection: "best", imagePosition: "51% 62%", materials: ["Ceramic"], dimensions: "12 piece setting" }),
  product(21, "Nord Wool Rug", "Textiles", "Rugs", 325, { collection: "soft-neutrals", imagePosition: "24% 70%", materials: ["Wool"], dimensions: "160 cm × 230 cm" }),
  product(22, "Sol Ceramic Bowl", "Tableware", "Bowls", 44, { collection: "new", newArrival: true, imagePosition: "51% 60%", materials: ["Ceramic"], dimensions: "Ø 22 cm × H 8 cm" }),
  product(23, "Elva Reading Lamp", "Lighting", "Floor Lamps", 269, { stockStatus: "Low stock", collection: "best", bestSeller: true, imagePosition: "51% 47%", materials: ["Metal", "Linen"], dimensions: "Ø 25 cm × H 136 cm" }),
  product(24, "Fjord Lounge Chair", "Furniture", "Chairs", 775, { stockStatus: "Low stock", collection: "soft-neutrals", imagePosition: "16% 60%", materials: ["Oak", "Wool"], dimensions: "W 79 cm × D 82 cm × H 76 cm" })
];

export const categories = [
  { name: "Furniture", slug: "furniture", description: "Furniture made for slow mornings, lively dinners, and every considered moment in between.", image: "/images/categories/furniture.png" },
  { name: "Lighting", slug: "lighting", description: "Warm light, sculptural forms, and practical pieces designed to shape the atmosphere of a room.", image: "/images/categories/lighting.png" },
  { name: "Textiles", slug: "textiles", description: "Relaxed layers, softly woven and made to bring a little more comfort to every room.", image: "/images/categories/textiles.png" },
  { name: "Home Decor", slug: "home-decor", description: "Quiet objects with texture, form, and a gentle sense of place.", image: "/images/categories/home-decor.png" },
  { name: "Tableware", slug: "tableware", description: "Pieces to hold the daily rituals around the table with understated beauty.", image: "/images/categories/tableware.png" },
  { name: "Accessories", slug: "accessories", description: "Useful finishing pieces for homes that value both order and character.", image: "/images/categories/accessories.png" }
];

export const getProduct = (slug: string) => products.find((item) => item.slug === slug);
