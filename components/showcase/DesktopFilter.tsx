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

  const hideFilters = () => {
    removeFilters();
    setShow(false)
  }

  const sortFromHighToLow = () => {
    sortHighToLow();
    setShow(true)
  }

  const sortFromLowToHigh = () => {
    sortLowToHigh();
    setShow(true)
  }

  return (
    <div className="flex max-md:hidden items-center justify-center mt-8">
      <div className="flex items-center gap-4 p-2 border border-neutral-40 rounded">
        {show && (
          <button
            className="text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
            onClick={hideFilters}
          >
            Remove Filters
          </button>
        )}
        <button
          className="text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
          onClick={sortFromLowToHigh}
        >
          Price: Low to High
        </button>
        <button
          className="text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
          onClick={sortFromHighToLow}
        >
          Price: High to Low
        </button>
      </div>
    </div>
  );
};
export default DesktopFilter;
