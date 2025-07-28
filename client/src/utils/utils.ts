import useMenuStore from '@/features/products/menuStore';
import { CartItem } from "@/types/store";

export function addToCart(productId: number | null) {
    if (productId === null) return;
    const cart: { id: number; count: number }[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const idx = cart.findIndex(item => item.id === productId);
    if (idx !== -1) {
      cart[idx].count += 1;
    } else {
      cart.push({ id: productId, count: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }

  export function getCartDetails(): CartItem[] {
    const menuItems = useMenuStore.getState().menuItems;
  
    const cart = JSON.parse(localStorage.getItem("cartItems") || "[]") as { id: number; count: number }[];
  
    return cart
      .map((cartItem) => {
        const product = menuItems.find((p) => p.id === cartItem.id);
        return product
          ? { ...product, count: cartItem.count }
          : null;
      })
      .filter(Boolean) as CartItem[];
  }