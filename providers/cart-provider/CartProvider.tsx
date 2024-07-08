"use client";

import { StaticImageData } from "next/image";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

export type CartItem = {
  image: StaticImageData;
  title: string;
  price: number;
  sizes: string[];
  id: string;
  quantity: number;
};

type Context = {
  cart: CartItem[];
  cartIsOpen: boolean;
  closeCart: () => void;
  openCart: () => void;
  addToCart: (c: CartItem, size?: string) => void;
  removeItemFromCart: (c: CartItem) => void;
  increaseQuantity: (c: CartItem) => void;
  decreaseQuantity: (c: CartItem) => void;
  total: number;
};

const CartContext = createContext<Context>({
  cart: [] as CartItem[],
  cartIsOpen: false,
  closeCart: () => {},
  openCart: () => {},
  addToCart: () => {},
  removeItemFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  total: 0,
});

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const openCart = useCallback(() => setCartIsOpen(true), []);
  const closeCart = useCallback(() => setCartIsOpen(false), []);

  const addToCart = useCallback(
    (c: CartItem, size?: string) => {
      const productExists = cart.find((item) => item.id === c.id);

      if (productExists) {
        const updatedCart = cart.map((item) => {
          if (item.id === c.id) {
            let updatedSizes = item.sizes;
            if (size && !item.sizes.includes(size)) {
              updatedSizes = [...item.sizes, size];
            }
            return {
              ...item,
              sizes: updatedSizes,
              quantity: item.quantity + c.quantity,
            };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        const newItem = {
          ...c,
          sizes: size && !c.sizes.includes(size) ? [...c.sizes, size] : c.sizes,
        };
        setCart([...cart, newItem]);
      }
    },
    [cart]
  );

  const removeItemFromCart = useCallback(
    (item: CartItem) => {
      const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(updatedCart);
    },
    [cart]
  );

  const increaseQuantity = useCallback(
    (item: CartItem) => {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    },
    [cart]
  );

  const decreaseQuantity = useCallback(
    (item: CartItem) => {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCart(updatedCart);
    },
    [cart]
  );

  useEffect(() => {
    if (cartIsOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  }, [cartIsOpen]);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(newTotal);
    };

    calculateTotal();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartIsOpen,
        openCart,
        closeCart,
        addToCart,
        removeItemFromCart,
        decreaseQuantity,
        increaseQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
