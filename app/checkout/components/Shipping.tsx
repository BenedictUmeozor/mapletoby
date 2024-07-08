"use client";

import Container from "@/components/container/Container";
import { useBillingContext } from "@/providers/billing-provider/BillingProvider";
import { formatNumberWithCommas } from "@/utils/functions";

export interface ShippingOptions {
  label: string;
  price: number;
  description: string;
}

const options: ShippingOptions[] = [
  {
    label: "ACE Logistics",
    price: 15000,
    description: "Same Day - Home Delivery",
  },
  {
    label: "DEA Logistics",
    price: 5800,
    description: "3 -4 Working Days",
  },
  {
    label: "GIG Logistics",
    price: 5800,
    description: "5 -7 Working Days",
  },
];

const Shipping = () => {
  const { updateInfo, billingInfo } = useBillingContext();

  const updateBillingInfo = (shippingMethod: ShippingOptions) => {
    updateInfo({ ...billingInfo, shippingMethod });
  };

  return (
    <Container className="px-6">
      <h4 className="heading-4-sm font-bold">
        Shipping Method (Same-day delivery available)
      </h4>
      <div
        className={"mt-4 rounded-md overflow-hidden border border-shade-40 "}
      >
        {options.map((option) => (
          <label
            htmlFor={option.label}
            key={option.label}
            className={
              "shipping-option border-t border-l border-r flex items-start justify-between py-4 border-b px-4 border-shade-40 cursor-pointer " +
              (billingInfo.shippingMethod.label === option.label
                ? "bg-[#F6F6F6]"
                : "")
            }
          >
            <div className="flex items-center gap-2">
              <label className="custom-radio">
                <input
                  type="radio"
                  name="shipping"
                  id={option.label}
                  defaultChecked={option.price === 15000}
                  onChange={(e) =>
                    e.target.checked && updateBillingInfo(option)
                  }
                />
                <span className="radio-button"></span>
              </label>
              <div className="flex flex-col justify-between">
                <span className="heading-6-lg font-bold">{option.label}</span>
                <span className="heading-6-lg text-shade-40">
                  {option.description}
                </span>
              </div>
            </div>
            <p className="heading-6-lg font-bold">
              ₦{formatNumberWithCommas(option.price)}
            </p>
          </label>
        ))}
      </div>
    </Container>
  );
};
export default Shipping;
