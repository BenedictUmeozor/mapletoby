"use client";

import { useState } from "react";

type Props = {
  sortHighToLow: () => void;
  sortLowToHigh: () => void;
  removeFilters: () => void;
};

const DesktopFilter = ({
  removeFilters,
  sortHighToLow,
  sortLowToHigh,
}: Props) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState<"HtoL" | "LtoH" | "">("");

  const hideFilters = () => {
    setActive("")
    removeFilters();
    setShow(false);
  };

  const sortFromHighToLow = () => {
    setActive("HtoL")
    sortHighToLow();
    setShow(true);
  };

  const sortFromLowToHigh = () => {
    setActive("LtoH")
    sortLowToHigh();
    setShow(true);
  };

  return (
    <div className="flex max-md:hidden items-center justify-center mt-8">
      <div className="flex items-center gap-4 p-2 border border-neutral-40 rounded">
        {show && (
          <button
          className={" heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45 " + (active === "" ? " text-white bg-shade-120" : "text-neutral-110 bg-transparent")}
            onClick={hideFilters}
          >
            Remove Filters
          </button>
        )}
        <button
          className={
            " heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45 " +
            (active === "LtoH"
              ? " text-white bg-shade-120"
              : "text-neutral-110 bg-transparent")
          }
          onClick={sortFromLowToHigh}
        >
          Price: Low to High
        </button>
        <button
          className={
            " heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45 " +
            (active === "HtoL"
              ? " text-white bg-shade-120"
              : "text-neutral-110 bg-transparent")
          }
          onClick={sortFromHighToLow}
        >
          Price: High to Low
        </button>
      </div>
    </div>
  );
};
export default DesktopFilter;
