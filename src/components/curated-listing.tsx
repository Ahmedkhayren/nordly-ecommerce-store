"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { formatCurrency } from "@/lib/pricing";
import { ProductCard } from "./product-card";

export function EditorialListingHero({ eyebrow, title, copy, image, position = "50% 50%", children }: { eyebrow: string; title: string; copy: string; image: string; position?: string; children?: React.ReactNode }) {
  return <section className="listing-hero page"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p>{children}</div><div className="listing-hero-image"><Image src={image} alt="Warm Scandinavian interior styling" fill loading="eager" sizes="(max-width: 800px) 100vw, 48vw" style={{objectFit:"cover",objectPosition:position}}/></div></section>;
}

export function CuratedProductGrid({ items, heading = "Shop the collection" }: { items: Product[]; heading?: string }) {
  const [category, setCategory] = useState("All"); const [sort, setSort] = useState("newest");
  const visible = useMemo(() => items.filter(item => category === "All" || item.category === category).sort((a,b) => sort === "low" ? a.price-b.price : sort === "high" ? b.price-a.price : Number(!!b.newArrival)-Number(!!a.newArrival)), [items, category, sort]);
  return <section className="curated-products page"><div className="curated-toolbar"><div><p className="eyebrow">NORDLY selection</p><h2>{heading}</h2></div><div className="curated-selects"><label>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option>All</option>{["Furniture","Lighting","Textiles","Home Decor","Tableware","Accessories"].map(option=><option key={option}>{option}</option>)}</select></label><label>Sort<select value={sort} onChange={e=>setSort(e.target.value)}><option value="newest">Newest</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option></select></label></div></div><p className="curated-count">{visible.length} considered {visible.length === 1 ? "piece" : "pieces"}</p><div className="product-grid">{visible.map((product,index)=><ProductCard product={product} priority={index < 2} key={product.id}/>)}</div></section>;
}

export function FeaturedProduct({ product }: { product: Product }) { return <section className="featured-product page"><div className="featured-product-image"><Image src={product.image} alt={product.name} fill loading="eager" sizes="(max-width: 800px) 100vw, 54vw" style={{objectFit:"cover"}}/></div><div className="featured-product-copy"><p className="eyebrow">Featured favourite</p><p className="featured-category">{product.category}</p><h2>{product.name}</h2><div className="featured-rating"><Star size={14} fill="currentColor"/> {product.rating} <span>{product.reviewCount} reviews</span></div><strong>{formatCurrency(product.price)}</strong><p>{product.shortDescription}</p><Link href={`/product/${product.slug}`} className="button">View product <ArrowUpRight size={15}/></Link></div></section>; }

export function EditorialBreak({ title, copy, image, reverse = false }: { title: string; copy: string; image: string; reverse?: boolean }) { return <section className={`curated-break ${reverse ? "reverse" : ""}`}><div className="curated-break-image"><Image src={image} alt="NORDLY editorial interior" fill sizes="(max-width: 800px) 100vw, 50vw" style={{objectFit:"cover"}}/></div><div><p className="eyebrow">The NORDLY edit</p><h2>{title}</h2><p>{copy}</p></div></section>; }
