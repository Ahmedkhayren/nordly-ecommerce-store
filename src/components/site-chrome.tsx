"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, UserRound, X, ChevronDown } from "lucide-react";
import { useStore } from "./store-provider";
import { categories } from "@/data/products";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); const router = useRouter(); const { cart, wishlist } = useStore();
  const [menu, setMenu] = useState(false); const [search, setSearch] = useState(false); const [account, setAccount] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => { setMenu(false); setSearch(false); setAccount(false); }, [pathname]);
  const submitSearch = (event: FormEvent) => { event.preventDefault(); if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`); };
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return <>
    <div className="announcement">Complimentary shipping on orders over $100</div>
    <header className="header"><div className="page header-inner">
      <button className="icon mobile-only" onClick={() => setMenu(true)} aria-label="Open navigation"><Menu size={21} /></button>
      <Link href="/" className="wordmark">NORDLY</Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link className={pathname === "/shop" ? "active" : ""} href="/shop">Shop</Link>
        <div className="nav-dropdown"><button>Categories <ChevronDown size={13}/></button><div className="mega-menu">{categories.map(c => <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}<span>{c.description.slice(0, 42)}...</span></Link>)}</div></div>
        <Link className={pathname === "/new-arrivals" ? "active" : ""} href="/new-arrivals">New Arrivals</Link><Link className={pathname === "/best-sellers" ? "active" : ""} href="/best-sellers">Best Sellers</Link><Link className={pathname.startsWith("/collections") ? "active" : ""} href="/collections">Collections</Link><Link className={pathname === "/about" ? "active" : ""} href="/about">About</Link>
      </nav>
      <div className="header-actions"><button className="icon" onClick={() => setSearch(true)} aria-label="Search"><Search size={18}/></button><button className="icon desktop-only" onClick={() => setAccount(!account)} aria-label="Account"><UserRound size={18}/></button><Link href="/wishlist" className="icon desktop-only" aria-label="Wishlist"><Heart size={18}/>{wishlist.length > 0 && <em>{wishlist.length}</em>}</Link><Link href="/cart" className="icon" aria-label="Shopping cart"><ShoppingBag size={18}/>{cartCount > 0 && <em>{cartCount}</em>}</Link></div>
      {account && <div className="account-menu"><strong>Account</strong><span>Account features are part of this demonstration.</span><Link href="/wishlist">Saved Items</Link></div>}
    </div></header>
    {search && <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search products"><button className="overlay-close" onClick={() => setSearch(false)} aria-label="Close search"><X /></button><form onSubmit={submitSearch}><p className="eyebrow">Find something considered</p><label htmlFor="site-search">Search the collection</label><div><Search /><input id="site-search" autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try “table lamp” or “linen”"/><button type="submit">Search</button></div><p>Search by product, category, material, or collection.</p></form></div>}
    {menu && <div className="mobile-drawer" role="dialog" aria-modal="true"><div><button className="icon" onClick={() => setMenu(false)} aria-label="Close navigation"><X /></button><Link href="/" className="wordmark">NORDLY</Link></div><nav><Link href="/shop">Shop all</Link><Link href="/new-arrivals">New arrivals</Link><Link href="/best-sellers">Best sellers</Link><Link href="/collections">Collections</Link>{categories.map(c => <Link href={`/category/${c.slug}`} key={c.slug}>{c.name}</Link>)}<Link href="/about">Our story</Link><Link href="/contact">Contact</Link></nav></div>}
    <main>{children}</main><Footer />
  </>;
}

function Footer() { return <footer className="footer"><div className="page footer-grid"><div><Link href="/" className="wordmark">NORDLY</Link><p>Thoughtful objects for modern living.</p><div className="socials"><span>IG</span><span className="pinterest">P</span><span>f</span></div></div><div><h3>Shop</h3><Link href="/shop">All Products</Link><Link href="/new-arrivals">New Arrivals</Link><Link href="/best-sellers">Best Sellers</Link><Link href="/collections">Collections</Link></div><div><h3>Categories</h3>{categories.slice(0,5).map(c=><Link href={`/category/${c.slug}`} key={c.slug}>{c.name}</Link>)}</div><div><h3>Customer Care</h3><Link href="/contact">Contact</Link><a href="#shipping">Shipping & Delivery</a><a href="#returns">Returns</a><a href="#faq">FAQ</a></div><div><h3>Company</h3><Link href="/about">About NORDLY</Link><a href="#journal">Journal</a><a href="#careers">Careers</a></div></div><div className="page footer-base"><span>© 2026 NORDLY — Portfolio Store</span><span>Portfolio demonstration — products, checkout, orders, and contact information are sample content.</span></div></footer>; }
