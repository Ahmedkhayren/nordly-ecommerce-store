"use client";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { useStore } from "@/components/store-provider";

export default function WishlistPage() { const { wishlist, addItem } = useStore(); const saved = products.filter(p=>wishlist.includes(p.id)); if(!saved.length) return <section className="empty-page page"><Heart size={36}/><p className="eyebrow">Saved for later</p><h1>Your wishlist is waiting.</h1><p>Keep a considered collection of things you’ll love living with.</p><Link href="/shop" className="button">Explore products</Link></section>; return <section className="wishlist-page page"><div className="wishlist-heading"><div><p className="eyebrow">Saved pieces</p><h1>My Wishlist</h1><p>{saved.length} pieces to come back to.</p></div><button className="button" onClick={()=>saved.forEach(p=>addItem(p))}><ShoppingBag size={16}/> Add all to cart</button></div><div className="product-grid">{saved.map(p=><ProductCard product={p} key={p.id}/>)}</div></section>; }
