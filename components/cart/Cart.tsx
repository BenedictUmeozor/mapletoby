"use client";

import XIcon from "@/assets/icons/XIcon";
import CartItem from "./CartItem";
import WalletIcon from "@/assets/icons/WalletIcon";
import { useCartContext } from "@/providers/cart-provider/CartProvider";
import { createPortal } from "react-dom";
import { formatNumberWithCommas } from "@/utils/functions";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cartIsOpen, closeCart, cart, total } = useCartContext();
  const router = useRouter();

  const routeToCheckout = () => {
    router.push("/checkout");
    closeCart();
  };

  return (
    <>
      {cartIsOpen &&
        createPortal(
          <div
            className="overlay max-md:hidden"
            onClick={() => closeCart()}
          ></div>,
          document.body
        )}
      <div
        className={
          "cart bg-white max-w-[39rem] max-md:max-w-full w-full z-[100]" +
          (cartIsOpen ? " open" : "")
        }
      >
        <header className="border-b border-neutral-30">
          <div className=" h-11 bg-custom_blue-10"></div>
          <div className="p-4 flex items-center justify-between">
            <span className="heading-5-lg max-md:heading-6-lg font-extrabold">
              Shopping Bag
            </span>
            <div
              className=" h-10 hover:opacity-45 w-10 rounded-sm flex items-center justify-center bg-neutral-50 cursor-pointer"
              onClick={closeCart}
            >
              <XIcon />
            </div>
          </div>
        </header>
        <div className="overflow-y-auto no-scrollbar">
          {cart.length > 0 ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <div className="text-center heading-6-lg mt-4">Cart is empty</div>
          )}
        </div>
        <div>
          <div className="border-t border-b border-neutral-30 flex items-center justify-between p-4">
            <p className="heading-6-lg font-semibold">SUBTOTAL</p>
            <p className="heading-5-lg font-semibold text-primary-100">
              ₦{formatNumberWithCommas(total)}
            </p>
          </div>
          <div className="py-6 px-4">
            <button
              className="w-full hover:bg-neutral-50 bg-shade-120 text-white h-12 rounded flex items-center justify-center gap-2"
              onClick={routeToCheckout}
            >
              <WalletIcon />
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
