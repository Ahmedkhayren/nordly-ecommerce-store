import type { Metadata } from "next";
import "./globals.css";
import "./enhancements.css";
import { StoreProvider } from "@/components/store-provider";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = { title: "NORDLY | Thoughtful Objects for Modern Living", description: "Explore furniture, lighting, textiles, and home accessories in the NORDLY demonstration store." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><StoreProvider><SiteChrome>{children}</SiteChrome></StoreProvider></body></html>;
}
