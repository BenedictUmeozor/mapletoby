"use client";

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
  return (
    <div className="flex max-md:hidden items-center justify-center mt-8">
      <div className="flex items-center gap-4 p-2 border border-neutral-40 rounded">
        <button
          className="text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
          onClick={removeFilters}
        >
          Remove Filters
        </button>
        <button
          className="text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
          onClick={sortLowToHigh}
        >
          Price: Low to High
        </button>
        <button
          className="text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
          onClick={sortHighToLow}
        >
          Price: High to Low
        </button>
      </div>
    </div>
  );
};
export default DesktopFilter;
