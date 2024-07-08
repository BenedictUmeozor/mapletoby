"use client";

import Container from "@/components/container/Container";
import { useBillingContext } from "@/providers/billing-provider/BillingProvider";
import { useCartContext } from "@/providers/cart-provider/CartProvider";
import { formatNumberWithCommas } from "@/utils/functions";
import { Kantumruy_Pro } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CheckoutItem from "../checkout/components/CheckoutItem";

const kantumruy = Kantumruy_Pro({ subsets: ["latin"] });

const Page = () => {
  const { cart, total, clearCart } = useCartContext();
  const { billingInfo } = useBillingContext();

  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/");
    }
  }, [cart, router]);

  return (
    <section className="grid grid-cols-12 max-md:grid-cols-1 bg-[#F5F5F5] h-full w-full md:h-screen">
      <div className="col-span-7 no-scrollbar overflow-y-auto h-screen">
        <header className="bg-white">
          <Container className="flex items-center justify-center py-4">
            <Link
              href="/"
              className={kantumruy.className + " heading-2-sm font-extrabold"}
            >
              MAPLETOBY
            </Link>
          </Container>
        </header>
        <div className="mt-4 bg-white pb-4">
          <Container className="px-6 pt-6">
            <h4 className="heading-4-lg mb-1 font-semibold">
              Congratulations {billingInfo.firstName}!
            </h4>
            <p className=" text-neutral-140 heading-6-lg">
              You order has been confirmed and your confirmation email is on its
              way to you.
            </p>
          </Container>
          <Container className="px-6 max-md:hidden">
            <p className="heading-6-lg text-neutral-140 my-2">
              Order #MPA67872
            </p>
            <p className="heading-6-lg text-neutral-140 my-2">
              Delivery Information: {billingInfo.shippingMethod.description}{" "}
              <span className=" text-shade-120 font-semibold">
                {billingInfo.shippingMethod.label}
              </span>
            </p>
          </Container>
        </div>
        <div className="bg-white md:hidden my-4">
          <Container className="px-6">
            <p className="heading-6-lg text-neutral-140 my-2">
              Order #MPA67872
            </p>
            <p className="heading-6-lg text-neutral-140 my-2">
              Delivery Information: {billingInfo.shippingMethod.description}{" "}
              <span className=" text-shade-120 font-semibold">
                {billingInfo.shippingMethod.label}
              </span>
            </p>
          </Container>
        </div>
        <div className="mt-4 bg-white py-6">
          <Container className="px-6">
            <h4 className="heading-4-lg mb-1 font-semibold">Order Details</h4>
            <div className="mt-4 grid grid-cols-4 max-md:grid-cols-2">
              <div>
                <h6 className="heading-6-sm text-shade-120 font-semibold mb-1">
                  Shipping Address
                </h6>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.firstName + " " + billingInfo.lastName}
                </p>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.address}
                </p>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.city}
                </p>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.state}
                </p>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.phoneNumber}
                </p>
              </div>
              <div>
                <h6 className="heading-6-sm text-shade-120 font-semibold mb-1">
                  Billing Address
                </h6>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.firstName + " " + billingInfo.lastName}
                </p>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.address}
                </p>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.city}
                </p>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.state}
                </p>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.phoneNumber}
                </p>
              </div>
              <div>
                <h6 className="heading-6-sm text-shade-120 font-semibold mb-1">
                  Shipping Method
                </h6>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  {billingInfo.shippingMethod.label}
                </p>
              </div>
              <div>
                <h6 className="heading-6-sm text-shade-120 font-semibold mb-1">
                  Payment Method
                </h6>
                <p className="heading-6-sm text-neutral-140 mb-1">
                  Card- ₦
                  {formatNumberWithCommas(
                    total + billingInfo.shippingMethod.price
                  )}
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-white mt-4">
          <div className="py-8">
            <Container>
              <button
                onClick={() => {
                  clearCart();
                  router.push("/");
                }}
                className="rounded hover:bg-neutral-50 bg-shade-120 text-white heading-6-lg text-center font-semibold py-2 w-full"
              >
                Continue Shopping
              </button>
            </Container>
          </div>
        </div>
      </div>
      <div className="col-span-5 no-scrollbar md:overflow-y-auto max-md:hidden">
        <Container className="p-8 px-12">
          <div>
            {cart.map((item) => (
              <CheckoutItem key={item.id} cart={item} />
            ))}
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between font-semibold heading-6-lg mb-1">
              <span>Subtotal</span>
              <span>₦{formatNumberWithCommas(total)}</span>
            </div>
            <div className="flex items-center justify-between font-semibold heading-6-lg mb-1">
              <span>Shipping</span>
              <span>₦{billingInfo.shippingMethod.price}</span>
            </div>
            <div className="flex items-center justify-between font-bold heading-5-lg">
              <span>Total</span>
              <span>
                ₦
                {formatNumberWithCommas(
                  total + billingInfo.shippingMethod.price
                )}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Page;
