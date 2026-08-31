import type { Metadata } from "next";
import { CuratedProductGrid, EditorialListingHero, FeaturedProduct } from "@/components/curated-listing";
import { products } from "@/data/products";
export const metadata: Metadata = { title: "Best Sellers | NORDLY" };
export default function BestSellersPage() { const best = products.filter(product=>product.bestSeller); const [featured, ...remaining] = best; return <><EditorialListingHero eyebrow="Most loved" title="Best Sellers" copy="Enduring pieces that bring warmth, function, and quiet character to everyday spaces." image="/images/nordly-interiors.png" position="16% 57%"/><FeaturedProduct product={featured}/><CuratedProductGrid items={remaining} heading="Loved for good reason"/></>; }
