"use client";

import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import XIcon from "@/assets/icons/XIcon";
import {
  CartItem as CartItemType,
  useCartContext,
} from "@/providers/cart-provider/CartProvider";
import { formatNumberWithCommas } from "@/utils/functions";
import Image from "next/image";
import { memo } from "react";

type Props = {
  item: CartItemType;
};

const CartItem = memo(({ item }: Props) => {
  const { removeItemFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  return (
    <div className="flex items-center h-36 px-4 border-b border-neutral-30 py-4">
      <div className="w-28 rounded overflow-hidden">
        <Image
          src={item.image}
          alt="product"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </div>
      <div className="flex-1 flex items-center h-full px-4">
        <div className="flex-1 flex flex-col gap-2 items-start">
          <div className="md:flex items-center gap-2">
            <p className="heading-6-lg font-bold max-md:heading-6-sm">{item.title}</p>
            <p className=" text-neutral-110 heading-6-lg">
              ({item.sizes.join(",")})
            </p>
          </div>
          <div className="flex max-md:flex-col items-center gap-8 max-md:gap-2 max-md:items-start">
            <div className=" w-28 flex items-center border border-neutral-30 rounded p-1 max-md:order-2">
              <div
                className="flex flex-1 items-center justify-center h-6 w-6 rounded-sm bg-neutral-40 cursor-pointer"
                onClick={() => decreaseQuantity(item)}
              >
                <MinusIcon />
              </div>
              <div className="heading-6-lg flex-[2] flex items-center justify-center">
                {item.quantity}
              </div>
              <div
                className="flex flex-1 items-center justify-center h-6 w-6 rounded-sm bg-neutral-40 cursor-pointer"
                onClick={() => increaseQuantity(item)}
              >
                <PlusIcon />
              </div>
            </div>
            <p className="heading-6-lg text-primary-100 font-bold max-md:order-1">
              ₦{formatNumberWithCommas(item.price * item.quantity)}
            </p>
          </div>
        </div>
        <div
          className="h-full flex items-center justify-center"
          onClick={() => removeItemFromCart(item)}
        >
          <XIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
});

CartItem.displayName = "CartItem";
export default CartItem;
