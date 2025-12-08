import { useState, type ReactNode } from "react";
import { CartContext, type CartItem } from "../hooks/useContext/CartContext";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: { id: number; name: string }) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        // Corrected map with implicit return
        return prev.map((p) =>
          p.id === item.id ? { ...p, count: p.count + 1 } : p
        );
      }

      return [...prev, { ...item, count: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
