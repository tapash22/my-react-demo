import { createContext } from "react";

export interface CartItem {
  id: number;
  name: string;
  count: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: { id: number; name: string }) => void;
}

// Only export the context object here
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
