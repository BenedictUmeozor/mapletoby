"use client";

import Container from "@/components/container/Container";
import { Kantumruy_Pro } from "next/font/google";
import Link from "next/link";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import BillingAddress from "./components/BillingAddress";
import CheckoutItem from "./components/CheckoutItem";
import { createPortal } from "react-dom";
import LoadingIndicator from "@/components/ui-utils/LoadingIndicator";
import Lock from "@/assets/icons/Lock";
import Verified from "@/assets/icons/Verified";
import { useCartContext } from "@/providers/cart-provider/CartProvider";
import { formatNumberWithCommas } from "@/utils/functions";
import Shppinginfo from "./components/Shppinginfo";
import { useBillingContext } from "@/providers/billing-provider/BillingProvider";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const kantumruy = Kantumruy_Pro({ subsets: ["latin"] });

const Page = () => {
  const { cart, total } = useCartContext();
  const { updateInfo, billingInfo } = useBillingContext();
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("Loading");
  const router = useRouter();

  const delay = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
    setText("Loading");
    setShowLoading(true);
    await delay(2000);
    setText("Redirecting");
    await delay(2000);
    setShowLoading(false);
    setShowSuccess(true);
  };

  const submit = async () => {
    setShowModal(true);
    setText("Loading");
    setShowLoading(true);
    await delay(2000);
    setText("Redirecting");
    await delay(2000);
    setShowLoading(false);
    setShowSuccess(true);
  };

  const removeSuccessModal = () => {
    if (showSuccess) {
      setShowSuccess(false);
      setShowLoading(false);
      router.push("/success");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  }, [showModal]);

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/");
    }
  }, [cart, router]);

  return (
    <>
      {mounted &&
        createPortal(
          <>
            {showModal && (
              <div
                className="fixed top-0 left-0 h-screen w-full bg-white z-50 flex items-center justify-center"
                onClick={removeSuccessModal}
              >
                {showLoading && <LoadingIndicator text={text} />}
                {showSuccess && (
                  <div
                    className="mx-auto cursor-pointer w-[80%] max-w-[500px]"
                    onClick={removeSuccessModal}
                  >
                    <div className="shadow-md rounded mb-4 h-72 flex flex-col items-center justify-center gap-2">
                      <Verified />
                      <p>Payment Successful</p>
                      <p className="text-neutral-120">
                        You paid ₦
                        {formatNumberWithCommas(
                          total + billingInfo.shippingMethod.price
                        )}{" "}
                        to MAPLETOBY
                      </p>
                    </div>
                    <p className="flex items-center justify-center gap-2 heading-6-sm">
                      <Lock /> secured by{" "}
                      <span className="text-[#011B33]">
                        {billingInfo.paymentMethod}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            )}
          </>,
          document.body
        )}
      <section className="grid grid-cols-12 max-md:grid-cols-1 bg-[#F5F5F5] h-full w-full md:h-screen">
        <form
          onSubmit={onSubmit}
          className="col-span-7 block no-scrollbar md:overflow-y-auto"
        >
          <div>
            <header className="bg-white">
              <Container className="flex items-center flex-col gap-2 py-4">
                <Link
                  href="/"
                  className={
                    kantumruy.className + " heading-2-sm font-extrabold"
                  }
                >
                  MAPLETOBY
                </Link>
                <div className="text-shade-120 caption font-bold">
                  <span className="text-neutral-140">Blog /</span> Checkout
                </div>
              </Container>
            </header>
          </div>
          <div className="bg-white pb-6">
            <Container className="px-6">
              <h4 className="heading-4-sm font-bold mb-4">Contact</h4>
              <div className="h-14">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full focus:placeholder:absolute focus:placeholder:top-1 focus:placeholder:left-4 transition-all duration-300 ease-linear focus:placeholder:text-[0.75rem]"
                  required
                  onChange={(e) =>
                    updateInfo({ ...billingInfo, email: e.target.value })
                  }
                />
              </div>
              <label className="custom-checkbox heading-6-sm mt-2">
                Email me with news and offers
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </Container>
          </div>
          <div className="bg-white mt-4 py-4">
            <Shppinginfo />
          </div>

          <div className="bg-white pt-8 pb-4">
            <Shipping />
          </div>

          <div className="mt-4">
            <Payment />
          </div>
          <div className="mt-6 bg-white pt-8 pb-4">
            <BillingAddress />
          </div>
          <div className="my-8 max-md:hidden">
            <Container>
              <button className="rounded hover:bg-neutral-50 bg-shade-120 text-white heading-6-lg text-center font-semibold py-2 w-full">
                Pay Now
              </button>
            </Container>
          </div>
        </form>
        <div className="col-span-5 md:overflow-y-auto md:h-screen no-scrollbar">
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
                <span>
                  ₦{formatNumberWithCommas(billingInfo.shippingMethod.price)}
                </span>
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
          <div className="my-8 md:hidden">
            <Container>
              <button
                onClick={submit}
                className="rounded hover:bg-neutral-50 bg-shade-120 text-white heading-6-lg text-center font-semibold py-2 w-full"
              >
                Pay Now
              </button>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
