"use client";

import ShoppingBagIcon from "@/assets/icons/ShoppingBagIcon";
import { useCartContext } from "@/providers/cart-provider/CartProvider";

const CartAction = () => {
  const { openCart } = useCartContext();

  return (
    <div
      className="bg-white h-6 w-6 rounded-full flex items-center justify-center absolute top-[5%] right-[7.5%] cursor-pointer transition-all duration-200 ease-linear hover:bg-primary-50 z-40 md:hidden"
      onClick={openCart}
    >
      <ShoppingBagIcon />
    </div>
  );
};
export default CartAction;
