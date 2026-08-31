import type { Metadata } from "next";
import { CuratedProductGrid, EditorialBreak, EditorialListingHero } from "@/components/curated-listing";
import { products } from "@/data/products";
export const metadata: Metadata = { title: "New Arrivals | NORDLY" };
export default function NewArrivalsPage() { const arrivals = products.filter(product=>product.newArrival); return <><EditorialListingHero eyebrow="Just in" title="New Arrivals" copy="Fresh additions selected for thoughtful spaces and everyday rituals." image="/images/nordly-interiors.png" position="51% 53%"/><CuratedProductGrid items={arrivals} heading="Fresh for the season"/><EditorialBreak title="New shapes for a new season" copy="A considered mix of tactile materials, easy forms, and small details that make the everyday feel quietly new." image="/images/collections/natural-materials.png"/></>; }
