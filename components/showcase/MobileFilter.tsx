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

  const hideFilters = () => {
    removeFilters();
    setShow(false);
  };

  const sortFromHighToLow = () => {
    sortHighToLow();
    setShow(true);
  };

  const sortFromLowToHigh = () => {
    sortLowToHigh();
    setShow(true);
  };

  return (
    <div className="md:hidden flex items-center justify-between p-2 border border-neutral-40 rounded gap-4">
      {show && (
        <button
          className="flex-1 text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
          onClick={hideFilters}
        >
          Remove Filters
        </button>
      )}
      <button
        className="flex-1 flex items-center justify-center text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
        onClick={sortFromLowToHigh}
      >
        Price: Low to High
      </button>
      <button
        className="flex-1 flex items-center justify-center text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
        onClick={sortFromHighToLow}
      >
        Price: High to Low
      </button>
    </div>
  );
};
export default MobileFilter;
