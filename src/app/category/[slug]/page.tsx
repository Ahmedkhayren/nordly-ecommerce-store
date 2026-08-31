import { notFound } from "next/navigation";
import Image from "next/image";
import { Catalog } from "@/components/catalog";
import { categories, products } from "@/data/products";
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const category = categories.find(c=>c.slug===slug); if(!category) notFound(); const items = products.filter(p=>p.category===category.name); return <><section className="category-hero page"><div><p className="crumb">Home / Categories / {category.name}</p><p className="eyebrow">NORDLY category</p><h1>{category.name}</h1><p>{category.description}</p></div><div><Image src={category.image} alt={`${category.name} interior`} fill sizes="(max-width: 800px) 100vw, 42vw" style={{objectFit:"cover"}}/></div></section><Catalog items={items} title={category.name}/></>; }
