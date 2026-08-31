"use client";

import Link from "next/link";
import { calculateEstimatedTax, calculateShipping, calculateSubtotal, calculateTotal, formatCurrency } from "@/lib/pricing";
import { useStore } from "./store-provider";

export function CartSummary({ checkout = false, shippingMethod = "Standard" }: { checkout?: boolean; shippingMethod?: "Standard" | "Express" }) { const { cart } = useStore(); const subtotal = calculateSubtotal(cart.map(i=>({price:i.product.price,quantity:i.quantity}))); const shipping = shippingMethod === "Express" ? 18 : calculateShipping(subtotal); const tax = calculateEstimatedTax(subtotal); const total = subtotal + shipping + tax; return <aside className="cart-summary"><h2>Order Summary</h2><div className="summary-row"><span>Subtotal</span><b>{formatCurrency(subtotal)}</b></div><div className="summary-row"><span>Shipping</span><b>{shipping ? formatCurrency(shipping) : "Complimentary"}</b></div><div className="summary-row"><span>Estimated tax</span><b>{formatCurrency(tax)}</b></div><div className="summary-total"><span>Total</span><b>{formatCurrency(total)}</b></div>{!checkout && <Link className="button checkout-button" href="/checkout">Proceed to checkout</Link>}<small>Taxes and shipping are estimates for this portfolio demonstration.</small></aside>; }
