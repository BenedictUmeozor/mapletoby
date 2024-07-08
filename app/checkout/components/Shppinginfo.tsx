"use client";

import Container from "@/components/container/Container";
import { useBillingContext } from "@/providers/billing-provider/BillingProvider";
import { memo } from "react";

const Shppinginfo = memo(() => {
  const { updateInfo, billingInfo } = useBillingContext();

  return (
    <Container className="px-6">
      <h4 className="heading-4-sm font-bold">Shipping Address</h4>
      <div className="my-4">
        <div className="flex items-center gap-4 max-md:block">
          <div className="h-14 flex-1 max-md:mb-4">
            <input
              type="text"
              required
              placeholder="First Name"
              className="px-4 heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
              onChange={(e) =>
                updateInfo({ ...billingInfo, firstName: e.target.value })
              }
            />
          </div>
          <div className="h-14 flex-1">
            <input
              type="text"
              required
              placeholder="Last Name"
              className="px-4 heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
              onChange={(e) =>
                updateInfo({ ...billingInfo, lastName: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="h-14">
          <input
            type="text"
            required
            placeholder="Full Address (including city or town)"
            className="px-4 heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
            onChange={(e) =>
              updateInfo({ ...billingInfo, address: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex items-center gap-4 max-md:block">
        <div className="h-14 flex-1 max-md:mb-4">
          <input
            type="text"
            required
            placeholder="City"
            className="px-4 heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
            onChange={(e) =>
              updateInfo({ ...billingInfo, city: e.target.value })
            }
          />
        </div>
        <div className="h-14 flex-1">
          <input
            type="text"
            required
            placeholder="State"
            className="px-4 heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
            onChange={(e) =>
              updateInfo({ ...billingInfo, state: e.target.value })
            }
          />
        </div>
      </div>
      <div className="my-4">
        <div className="h-14">
          <input
            type="text"
            required
            placeholder="Phone Number"
            className="px-4 heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
            onChange={(e) =>
              updateInfo({ ...billingInfo, phoneNumber: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex items-center gap-2 my-4">
        <input type="checkbox" name="" id="" />
        <p className="heading-6-sm">Save this information for next time</p>
      </div>
    </Container>
  );
});

Shppinginfo.displayName = "Shppinginfo";
export default Shppinginfo;
