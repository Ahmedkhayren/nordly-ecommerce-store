import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import { ProductDetail } from "@/components/product-detail";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = getProduct(slug); return { title: product ? `${product.name} | NORDLY` : "Product not found | NORDLY", description: product?.shortDescription }; }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProduct(slug); if(!product) notFound(); const related = products.filter(p=>p.category===product.category && p.id!==product.id); return <ProductDetail product={product} related={related}/>; }
