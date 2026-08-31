export const formatCurrency = (amount: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
export const calculateSubtotal = (items: { price: number; quantity: number }[]) => items.reduce((sum, item) => sum + item.price * item.quantity, 0);
export const calculateShipping = (subtotal: number) => subtotal === 0 || subtotal >= 100 ? 0 : 12;
export const calculateEstimatedTax = (subtotal: number) => Math.round(subtotal * 0.08 * 100) / 100;
export const calculateTotal = (subtotal: number) => subtotal + calculateShipping(subtotal) + calculateEstimatedTax(subtotal);
