"use client";

import { useState } from "react";

type Props = {
  sortHighToLow: () => void;
  sortLowToHigh: () => void;
  removeFilters: () => void;
};

const MobileFilter = ({
  sortHighToLow,
  sortLowToHigh,
  removeFilters,
}: Props) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState<"HtoL" | "LtoH" | "">("");

  const hideFilters = () => {
    setActive("");
    removeFilters();
    setShow(false);
  };

  const sortFromHighToLow = () => {
    setActive("HtoL");
    sortHighToLow();
    setShow(true);
  };

  const sortFromLowToHigh = () => {
    setActive("LtoH");
    sortLowToHigh();
    setShow(true);
  };

  return (
    <div className="md:hidden flex items-center justify-between p-2 border border-neutral-40 rounded gap-4">
      {show && (
        <button
          className={
            "flex-1 flex items-center justify-center heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45 " +
            (active === ""
              ? "text-white bg-shade-120"
              : "text-neutral-110 bg-transparent")
          }
          onClick={hideFilters}
        >
          Remove
        </button>
      )}
      <button
        className={
          "flex-1 flex items-center justify-center heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45 " +
          (active === "LtoH"
            ? "text-white bg-shade-120"
            : "text-neutral-110 bg-transparent")
        }
        onClick={sortFromLowToHigh}
      >
        Price: L → H
      </button>
      <button
        className={
          "flex-1 flex items-center justify-center heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45 " +
          (active === "HtoL"
            ? "text-white bg-shade-120"
            : "text-neutral-110 bg-transparent")
        }
        onClick={sortFromHighToLow}
      >
        Price: H → L
      </button>
    </div>
  );
};
export default MobileFilter;
