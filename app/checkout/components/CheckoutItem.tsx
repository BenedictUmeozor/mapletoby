"use client";

import { CartItem } from "@/providers/cart-provider/CartProvider";
import { formatNumberWithCommas } from "@/utils/functions";
import Image from "next/image";

type Props = {
  cart: CartItem;
};

const CheckoutItem = ({ cart }: Props) => {
  return (
    <div className="flex items-center h-36">
      <div className="w-28 rounded relative">
        <Image
          src={cart.image}
          alt="product"
          width={100}
          height={100}
          className="w-28 h-28 rounded"
        />
        <div className="absolute top-[-3%] right-[-3%] h-6 w-6 rounded-full flex items-center justify-center bg-shade-80">
          {cart.quantity}
        </div>
      </div>
      <div className="flex-1 flex  items-center justify-between px-2">
        <div className="flex flex-col gap-1">
          <p className="heading-6-lg font-bold max-md:heading-6-sm">
            {cart.title}
          </p>
          <p className=" text-neutral-110 heading-6-lg">
            ({cart.sizes.join(",")})
          </p>
        </div>

        <p className="heading-6-lg text-primary-100 font-bold max-md:order-1">
          ₦{formatNumberWithCommas(cart.price * cart.quantity)}
        </p>
      </div>
    </div>
  );
};
export default CheckoutItem;
