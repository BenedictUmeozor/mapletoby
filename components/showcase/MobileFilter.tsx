"use client"

type Props = {
  sortHighToLow: () => void;
  sortLowToHigh: () => void;
};

const MobileFilter = ({ sortHighToLow, sortLowToHigh }: Props) => {
  return (
    <div className="md:hidden flex items-center justify-between p-2 border border-neutral-40 rounded gap-4">
      <div
        className="flex-1 flex items-center justify-center text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
        onClick={sortLowToHigh}
      >
        Price: Low to High
      </div>
      <div
        className="flex-1 flex items-center justify-center text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer transition-all duration-300 hover:opacity-45"
        onClick={sortHighToLow}
      >
        Price: High to Low
      </div>
    </div>
  );
};
export default MobileFilter;
