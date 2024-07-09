"use client";

import Container from "@/components/container/Container";
import { useBillingContext } from "@/providers/billing-provider/BillingProvider";
import { useState } from "react";
import { statesInNigeria } from "./Shppinginfo";
import ChevronDownIcon from "@/assets/icons/ChevronDown";

const BillingAddress = () => {
  const { billingInfo, updateInfo } = useBillingContext();
  const [address, setAddress] = useState(billingInfo.address);
  const [showForm, setShowForm] = useState(false);
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);

  const switchAddress = () => {
    setAddress("");
    setShowForm(true);
  };

  const switchToSameAddress = () => {
    setAddress(billingInfo.address);
    setShowForm(false);
  };

  return (
    <div>
      <Container className="px-6">
        <h4 className="heading-4-sm font-bold">Billing Address</h4>
        <div className="mt-4">
          <label
            htmlFor="same"
            className={
              "flex items-center gap-2 round-top border p-4 " +
              (!showForm ? "bg-[#F6F6F6] border-[#1b1b1b]" : "")
            }
          >
            <label className="custom-radio">
              <input
                type="radio"
                name="billing"
                id="same"
                defaultChecked
                onChange={switchToSameAddress}
              />
              <span className="radio-button"></span>
            </label>
            <span className="heading-6-lg font-semibold">
              Same as shipping address
            </span>
          </label>
          <div>
            <label
              htmlFor="different"
              className={
                "flex items-center gap-2 round-bottom border-b border-t border-l border-r border-shade-40 p-4 " +
                (showForm ? "bg-[#F6F6F6] border-[#1b1b1b]" : "")
              }
            >
              <label className="custom-radio">
                <input
                  type="radio"
                  name="billing"
                  id="different"
                  onChange={switchAddress}
                />
                <span className="radio-button"></span>
              </label>
              <span className="heading-6-lg font-semibold">
                Use a different address
              </span>
            </label>
            {showForm && (
              <form className="bg-[#F6F6F6] p-4">
                <div className="my-4">
                  <div className="flex items-center gap-4 max-md:block">
                    <div className="h-14 flex-1 max-md:mb-4">
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        className="px-4 focus:placeholder:absolute focus:placeholder:top-1 focus:placeholder:left-4 transition-all duration-300 ease-linear focus:placeholder:text-[0.75rem] heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
                        onChange={(e) =>
                          updateInfo({
                            ...billingInfo,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="h-14 flex-1">
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        onChange={(e) =>
                          updateInfo({
                            ...billingInfo,
                            lastName: e.target.value,
                          })
                        }
                        className="px-4 focus:placeholder:absolute focus:placeholder:top-1 focus:placeholder:left-4 transition-all duration-300 ease-linear focus:placeholder:text-[0.75rem] heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
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
                      onChange={(e) =>
                        updateInfo({ ...billingInfo, address: e.target.value })
                      }
                      className="px-4 focus:placeholder:absolute focus:placeholder:top-1 focus:placeholder:left-4 transition-all duration-300 ease-linear focus:placeholder:text-[0.75rem] heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 max-md:block">
                  <div className="h-14 flex-1 max-md:mb-4">
                    <input
                      type="text"
                      required
                      placeholder="City"
                      onChange={(e) =>
                        updateInfo({ ...billingInfo, city: e.target.value })
                      }
                      className="px-4 focus:placeholder:absolute focus:placeholder:top-1 focus:placeholder:left-4 transition-all duration-300 ease-linear focus:placeholder:text-[0.75rem] heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
                    />
                  </div>
                  <div className="h-14 flex-1 relative">
                    <div
                      className="cursor-pointer bg-white flex items-center border border-neutral-50 justify-between px-4 text-neutral-140 rounded h-full"
                      onClick={() => setShow((prev) => !prev)}
                    >
                      <span className="text-neutral-100">
                        {state.length ? state : "State"}
                      </span>
                      <ChevronDownIcon
                        className={
                          "w-5 transition-all duration-200 ease-linear " +
                          (show ? "rotate" : "")
                        }
                      />
                    </div>
                    {show && (
                      <div className="absolute top-[105%] left-0 w-full h-64 shadow-md rounded-md z-20 overflow-y-auto no-scrollbar bg-white">
                        <ul>
                          {statesInNigeria.map((state) => (
                            <li
                              key={state}
                              className="cursor-pointer px-4 py-2 hover:bg-neutral-30 border-b border-neutral-10"
                              onClick={() => {
                                setState(state);
                                updateInfo({ ...billingInfo, state });
                                setShow(false);
                              }}
                            >
                              {state}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="my-4">
                  <div className="h-14">
                    <input
                      type="text"
                      required
                      placeholder="Phone Number (Optional)"
                      className="px-4 focus:placeholder:absolute focus:placeholder:top-1 focus:placeholder:left-4 transition-all duration-300 ease-linear focus:placeholder:text-[0.75rem] heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
                      onChange={(e) =>
                        updateInfo({
                          ...billingInfo,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default BillingAddress;
