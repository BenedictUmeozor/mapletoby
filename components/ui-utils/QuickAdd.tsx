"use client";

import {
  CartItem,
  useCartContext,
} from "@/providers/cart-provider/CartProvider";
import { ProductInterface } from "../showcase/productData";
import { memo } from "react";

const QuickAdd = memo(({ product }: { product: ProductInterface }) => {
  const { openCart, addToCart } = useCartContext();

  const handleAddToCart = (size: string) => {
    const cart: CartItem = {
      id: product.id,
      image: product.image,
      title: product.description,
      price: product.price,
      sizes: [size],
      quantity: 1,
    };
    addToCart(cart, size);
    openCart();
  };

  return (
    <div className="quick-add w-full bg-neutral-10 py-2">
      <h4 className="caption font-bold text-primary-80 text-center mb-2">
        QUICK ADD
      </h4>
      <div className="flex gap-2 items-center flex-nowrap px-2">
        <button
          className="flex-1 hover:opacity-45 text-[0.85rem] max-md:text-xs rounded-sm border border-custom_blue-30"
          onClick={() => handleAddToCart("XS")}
        >
          XS
        </button>
        <button
          className="flex-1 hover:opacity-45 text-[0.85rem] max-md:text-xs rounded-sm border border-custom_blue-30"
          onClick={() => handleAddToCart("S")}
        >
          S
        </button>
        <button
          className="flex-1 hover:opacity-45 text-[0.85rem] max-md:text-xs rounded-sm border border-custom_blue-30"
          onClick={() => handleAddToCart("M")}
        >
          M
        </button>
        <button
          className="flex-1 hover:opacity-45 text-[0.85rem] max-md:text-xs rounded-sm border border-custom_blue-30"
          onClick={() => handleAddToCart("L")}
        >
          L
        </button>
        <button
          className="flex-1 hover:opacity-45 text-[0.85rem] max-md:text-xs rounded-sm border border-custom_blue-30"
          onClick={() => handleAddToCart("XL")}
        >
          XL
        </button>
      </div>
    </div>
  );
});

QuickAdd.displayName = "QuickAdd";
export default QuickAdd;
