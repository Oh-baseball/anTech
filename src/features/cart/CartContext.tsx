// import React, { createContext, useContext, useEffect, useState } from "react";
// import { CartBoxItem } from "./CartBox";

// interface CartContextType {
//   cartItems: CartBoxItem[];
//   addToCart: (item: CartBoxItem) => void;
//   removeFromCart: (name: string) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartBoxItem[]>([]);

//   // 로컬스토리지에서 불러오기
//   useEffect(() => {
//     const data = localStorage.getItem("cartItems");
//     if (data) setCartItems(JSON.parse(data));
//   }, []);

//   // cartItems가 바뀔 때마다 저장
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (item: CartBoxItem) => {
//     setCartItems(prev => {
//       const idx = prev.findIndex(i => i.name === item.name);
//       if (idx !== -1) {
//         return prev.map((i, n) => n === idx ? { ...i, count: i.count + 1 } : i);
//       }
//       return [...prev, { ...item, count: 1 }];
//     });
//   };

//   const removeFromCart = (name: string) => {
//     setCartItems(prev => prev.filter(i => i.name !== name));
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const ctx = useContext(CartContext);
//   if (!ctx) throw new Error("useCart must be used within a CartProvider");
//   return ctx;
// };