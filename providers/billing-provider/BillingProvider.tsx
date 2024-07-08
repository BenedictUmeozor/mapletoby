"use client";

import { ShippingOptions } from "@/app/checkout/components/Shipping";
import {
  createContext,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type BillingInfo = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  phoneNumber: string;
  shippingMethod: ShippingOptions;
  paymentMethod: string;
};

type Context = {
  billingInfo: BillingInfo;
  updateInfo: (info: BillingInfo) => void;
};

const BillingContext = createContext<Context>({
  billingInfo: {
    address: "",
    city: "",
    email: "",
    firstName: "",
    lastName: "",
    paymentMethod: "",
    phoneNumber: "",
    shippingMethod: {
      description: "",
      label: "",
      price: 0,
    },
    state: "",
  },
  updateInfo: (info: BillingInfo) => {},
});

export const useBillingContext = () => {
  return useContext(BillingContext);
};

const BillingProvider = ({ children }: { children: ReactNode }) => {
  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    address: "",
    city: "",
    email: "",
    firstName: "",
    lastName: "",
    paymentMethod: "Paystack",
    phoneNumber: "",
    shippingMethod: {
      label: "ACE Logistics",
      price: 15000,
      description: "Same Day - Home Delivery",
    },
    state: "",
  });

  const updateInfo = useCallback((info: BillingInfo) => {
    setBillingInfo(info);
  }, []);

  return (
    <BillingContext.Provider value={{ billingInfo, updateInfo }}>
      {children}
    </BillingContext.Provider>
  );
};
export default BillingProvider;
