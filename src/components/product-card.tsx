"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, Star } from "lucide-react";
import { Product } from "@/data/products";
import { formatCurrency } from "@/lib/pricing";
import { useStore } from "./store-provider";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem, toggleWishlist, wishlistHas } = useStore(); const saved = wishlistHas(product.id);
  return <article className="product-card"><div className="product-image">
    <Link href={`/product/${product.slug}`} aria-label={`View ${product.name}`}><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" loading={priority ? "eager" : "lazy"} className="product-primary" style={{ objectFit: "cover" }} />{product.secondaryImage && <Image src={product.secondaryImage} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" loading="lazy" className="product-secondary" style={{ objectFit: "cover" }} />}</Link>
    <div className="badges">{product.newArrival && <span>New</span>}{product.compareAtPrice && <span>Sale</span>}{product.bestSeller && <span>Best Seller</span>}</div>
    <button className={`wishlist-button ${saved ? "saved" : ""}`} onClick={() => toggleWishlist(product.id)} aria-label={saved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}><Heart size={17} fill={saved ? "currentColor" : "none"}/></button>
    <button className="quick-add" onClick={() => addItem(product)}><Plus size={15}/> Quick add</button>
  </div><div className="product-copy"><Link href={`/product/${product.slug}`}><p>{product.category}</p><h3>{product.name}</h3></Link><div className="product-meta"><span className="price">{formatCurrency(product.price)}</span>{product.compareAtPrice && <del>{formatCurrency(product.compareAtPrice)}</del>}<span className="rating"><Star size={12} fill="currentColor"/> {product.rating} <small>({product.reviewCount})</small></span></div></div></article>;
}

export function ProductGrid({ items, title, viewAllHref }: { items: Product[]; title?: string; viewAllHref?: string }) {
  return <section className="product-section page">{title && <div className="section-heading"><div><p className="eyebrow">The collection</p><h2>{title}</h2></div>{viewAllHref && <Link href={viewAllHref} className="text-link">View all <span>→</span></Link>}</div>}<div className="product-grid">{items.map((item, index) => <ProductCard product={item} priority={index < 2} key={item.id}/>)}</div></section>;
}
