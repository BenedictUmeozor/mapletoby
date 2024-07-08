"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Divider from "../ui-utils/Divider";

const texts = [
  {
    first: "SAME DAY DELIVERY",
    second: "ABUJA, LAGOS, PH",
  },
  {
    first: "NATIONWIDE SHIPPING",
    second: "DOORSTEP DELIVERY",
  },
];

const Banner = () => {
  const pathname = usePathname();
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const changeText = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(changeText);
  }, []);

  if (pathname === "/checkout" || pathname === "/success") return null;

  return (
    <div
      className={
        "items-center flex justify-center gap-4 bg-custom_blue-20 py-4 max-md:py-4"
      }
    >
      <div
        className={`text-container flex items-center gap-4 ${
          fade ? "fade-in" : "fade-out"
        }`}
      >
        <p className="text-shade-120 text-[0.85rem] max-md:text-xs font-bold">
          {texts[index].first}
        </p>
        <Divider />
        <p className="text-custom_blue-80 text-xs font-semibold">
          {texts[index].second}
        </p>
      </div>
    </div>
  );
};

export default Banner;
