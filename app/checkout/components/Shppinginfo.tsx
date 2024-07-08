"use client";

import ChevronDownIcon from "@/assets/icons/ChevronDown";
import Container from "@/components/container/Container";
import { useBillingContext } from "@/providers/billing-provider/BillingProvider";
import { memo, useState } from "react";

const statesInNigeria = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT (Federal Capital Territory)",
];

const Shppinginfo = memo(() => {
  const { updateInfo, billingInfo } = useBillingContext();
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);

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
        <div className="h-14 flex-1 relative">
          <div
            className="cursor-pointer flex items-center border border-neutral-50 justify-between px-4 text-neutral-140 rounded h-full"
            onClick={() => setShow((prev) => !prev)}
          >
            <span className="text-neutral-100">
              {state.length ? state : "State"}
            </span>
            <ChevronDownIcon className={"w-5 transition-all duration-200 ease-linear " + (show ? "rotate" : "")} />
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
                      setShow(false)
                    }}
                  >
                    {state}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* <input
            type="text"
            required
            placeholder="State"
            className="px-4 heading-6-lg text-neutral-120 border border-neutral-50 rounded focus:outline-none h-full w-full"
            onChange={(e) =>
              updateInfo({ ...billingInfo, state: e.target.value })
            }
          /> */}
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
