import type { Metadata } from "next";
import { Catalog } from "@/components/catalog";
import { products } from "@/data/products";
export const metadata: Metadata = { title: "Shop | NORDLY" };
export default function ShopPage() { return <Catalog items={products} eyebrow="The NORDLY catalogue" description="Explore furniture, lighting, textiles, tableware, and objects selected for calm, functional spaces."/>; }
