"use client";

import Container from "@/components/container/Container";
import mastercard from "@/assets/images/mastercard.png";
import visa from "@/assets/images/visa.png";
import Image from "next/image";
import CheckoutIcon from "@/assets/icons/CheckoutIcon";
import { useBillingContext } from "@/providers/billing-provider/BillingProvider";

const Payment = () => {
  const { updateInfo, billingInfo } = useBillingContext();

  const updatePaymentMethod = (method: string) => {
    updateInfo({ ...billingInfo, paymentMethod: method });
  };

  return (
    <div className="py-4 bg-white">
      <Container className="px-6">
        <h4 className="heading-4-sm font-bold">Payment</h4>
        <div className="mt-4">
          <label
            htmlFor="paystack"
            className="paystack py-4 flex items-center justify-between border border-shade-40 px-4"
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                id="paystack"
                defaultChecked
                onChange={(e) =>
                  e.target.checked && updatePaymentMethod("Paystack")
                }
              />
              <span className="heading-6-lg font-semibold">Paystack</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={mastercard}
                alt="mastercard"
                width={56}
                height={40}
                className=" h-10 w-14"
              />
              <Image
                src={visa}
                alt="mastercard"
                width={56}
                height={40}
                className=" h-10 w-14"
              />
            </div>
          </label>
          <div className="h-60 flex flex-col items-center justify-center border-l border-r border-shade-40 gap-4">
            <CheckoutIcon />
            <p className="text-center heading-6-lg">
              After clicking “Pay Now”, you will be redirected to{" "}
              {billingInfo.paymentMethod ?? "Paystack"} to complete your payment
              secruely
            </p>
          </div>
          <label
            htmlFor="flutterwave"
            className="flutterwave py-4 flex items-center justify-between border border-shade-40 px-4"
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                id="flutterwave"
                onChange={(e) =>
                  e.target.checked && updatePaymentMethod("Flutterwave")
                }
              />
              <span className="heading-6-lg font-semibold">Flutterwave</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={mastercard}
                alt="mastercard"
                width={56}
                height={40}
                className=" h-10 w-14"
              />
              <Image
                src={visa}
                alt="mastercard"
                width={56}
                height={40}
                className=" h-10 w-14"
              />
            </div>
          </label>
        </div>
      </Container>
    </div>
  );
};
export default Payment;