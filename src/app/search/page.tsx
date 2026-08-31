import { Catalog } from "@/components/catalog";
import { products } from "@/data/products";
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) { const { q = "" } = await searchParams; const query = q.trim(); const terms = query.toLowerCase(); const items = products.filter(p => [p.name,p.category,p.subcategory,p.description,...p.materials,...p.colors].join(" ").toLowerCase().includes(terms)); return <Catalog items={items} query={query || "…"}/>; }
