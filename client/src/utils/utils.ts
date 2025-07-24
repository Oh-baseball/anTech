import { dummyMenuItems } from "../features/products/StoreMenuBox";

export function addToCart(productId: number | null) {
    if (productId === null) return;
    const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const idx = cart.findIndex(item => item.id === productId);
    if (idx !== -1) {
      cart[idx].count += 1;
    } else {
      cart.push({ id: productId, count: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }

export function getCartDetails() {
  const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
  return cart.map((cartItem) => {
    const product = dummyMenuItems.find(p => p.id === cartItem.id);
    return product
      ? { ...product, count: cartItem.count }
      : null;
  }).filter(Boolean);
}