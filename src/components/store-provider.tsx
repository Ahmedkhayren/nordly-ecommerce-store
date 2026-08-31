"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products, type Product } from "@/data/products";

export type CartItem = { product: Product; quantity: number; color?: string };
type Store = {
  cart: CartItem[];
  wishlist: string[];
  hydrated: boolean;
  addItem: (product: Product, quantity?: number, color?: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  wishlistHas: (id: string) => boolean;
};
const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("nordly-cart") || "[]") as CartItem[];
      setCart(savedCart.map((item) => {
        const currentProduct = products.find((product) => product.id === item.product.id);
        return currentProduct ? { ...item, product: { ...currentProduct, ...item.product } } : item;
      }));
      setWishlist(JSON.parse(localStorage.getItem("nordly-wishlist") || "[]"));
    } finally { setHydrated(true); }
  }, []);
  useEffect(() => { if (hydrated) localStorage.setItem("nordly-cart", JSON.stringify(cart)); }, [cart, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem("nordly-wishlist", JSON.stringify(wishlist)); }, [wishlist, hydrated]);
  const value = useMemo<Store>(() => ({
    cart, wishlist, hydrated,
    addItem: (product, quantity = 1, color) => setCart((current) => {
      const found = current.find((item) => item.product.id === product.id && item.color === color);
      const next = found ? current.map((item) => item === found ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { product, quantity, color }];
      localStorage.setItem("nordly-cart", JSON.stringify(next));
      return next;
    }),
    updateQuantity: (id, quantity) => setCart((current) => { const next = quantity < 1 ? current.filter((item) => item.product.id !== id) : current.map((item) => item.product.id === id ? { ...item, quantity } : item); localStorage.setItem("nordly-cart", JSON.stringify(next)); return next; }),
    removeItem: (id) => setCart((current) => { const next = current.filter((item) => item.product.id !== id); localStorage.setItem("nordly-cart", JSON.stringify(next)); return next; }),
    clearCart: () => { localStorage.setItem("nordly-cart", "[]"); setCart([]); },
    toggleWishlist: (id) => setWishlist((current) => { const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id]; localStorage.setItem("nordly-wishlist", JSON.stringify(next)); return next; }),
    wishlistHas: (id) => wishlist.includes(id)
  }), [cart, wishlist, hydrated]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export const useStore = () => {
  const value = useContext(StoreContext);
  if (!value) throw new Error("useStore must be used within StoreProvider");
  return value;
};
