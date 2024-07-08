"use client";
import { usePathname } from "next/navigation";
import Divider from "../ui-utils/Divider";

const Banner = () => {
  const pathname = usePathname();

  if (pathname === "/checkout" || pathname === "/success") return null;

  return (
    <div
      className={
        " items-center flex justify-center gap-4 bg-custom_blue-20 py-4 max-md:py-4 "
      }
    >
      <p className="text-shade-120 text-[0.85rem] max-md:text-xs font-bold">
        SAME DAY DELIVERY
      </p>
      <Divider />
      <p className=" text-custom_blue-80 text-[0.85rem] max-md:text-xs font-semibold">
        ABUJA, LAGOS, PH
      </p>
    </div>
  );
};
export default Banner;
