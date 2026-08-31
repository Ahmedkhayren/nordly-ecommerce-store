export type Collection = {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  featuredImage: string;
  imagePosition: string;
  productIds: string[];
};

export const collections: Collection[] = [
  { slug: "soft-neutrals", name: "Soft Neutrals", description: "Warm textures, natural materials, and an understated palette.", heroImage: "/images/collections/soft-neutrals.png", featuredImage: "/images/products/arne-lounge-chair.png", imagePosition: "16% 58%", productIds: ["4","5","8","9","10","11","13","15","17","19","21","24"] },
  { slug: "modern-living", name: "Modern Living", description: "Clean forms and useful pieces for contemporary spaces.", heroImage: "/images/collections/modern-living.png", featuredImage: "/images/products/soren-coffee-table.png", imagePosition: "82% 60%", productIds: ["3","6","10","12","16","17","18","19","23"] },
  { slug: "natural-materials", name: "Natural Materials", description: "Oak, linen, ceramic, wool, and tactile finishes.", heroImage: "/images/collections/natural-materials.png", featuredImage: "/images/products/havn-ceramic-vase.png", imagePosition: "48% 56%", productIds: ["2","4","5","7","9","11","13","14","20","21","22"] },
  { slug: "quiet-lighting", name: "Quiet Lighting", description: "Sculptural lighting designed to soften the room.", heroImage: "/images/collections/quiet-lighting.png", featuredImage: "/images/products/copenhagen-table-lamp.png", imagePosition: "51% 53%", productIds: ["1","6","12","16","23"] }
];

export const getCollection = (slug: string) => collections.find((collection) => collection.slug === slug);
