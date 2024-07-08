"use client";

import Container from "@/components/container/Container";

const BillingAddress = () => {
  return (
    <div>
      <Container className="px-6">
        <h4 className="heading-4-sm font-bold">Billing Address</h4>
        <div className="mt-4">
          <label
            htmlFor="same"
            className="flex items-center gap-2 round-top border border-shade-40 p-4"
          >
            <label className="custom-radio">
              <input type="radio" name="billing" id="same" defaultChecked />
              <span className="radio-button"></span>
            </label>
            <span className="heading-6-lg font-semibold">
              Same as shipping address
            </span>
          </label>
          <label
            htmlFor="different"
            className="flex items-center gap-2 round-bottom border-b border-l border-r border-shade-40 p-4"
          >
            <label className="custom-radio">
              <input type="radio" name="billing" id="different" />
              <span className="radio-button"></span>
            </label>
            <span className="heading-6-lg font-semibold">
              Use a different address
            </span>
          </label>
        </div>
      </Container>
    </div>
  );
};
export default BillingAddress;
