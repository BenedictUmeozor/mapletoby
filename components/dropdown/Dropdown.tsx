"use client";

import MaginifyinGlass from "@/assets/icons/MaginifyinGlass";
import NigeraIcon from "@/assets/icons/Nigera";

type Props = {
  action: () => void;
};

const Dropdown = ({ action }: Props) => {
  return (
    <div
      className="absolute z-10 top-[120%] left-0 bg-white shadow w-[250px] rounded"
      onMouseLeave={action}
    >
      <div className="px-2 h-10 relative my-4">
        <input
          type="text"
          className="h-full w-full focus:outline-none border border-neutral-50 text-[0.85rem] rounded-md pl-8 pr-2"
          placeholder="Search"
        />
        <MaginifyinGlass className="absolute top-1/2 left-2 transform -translate-y-1/2 w-8" />
      </div>
      <div
        className="flex items-center py-1 gap-1 px-4 mb-2 cursor-pointer hover:bg-neutral-30"
        onClick={action}
      >
        <NigeraIcon className="w-5" />
        <span className="heading-6-lg text-neutral-150">NGN</span>
      </div>
      <div
        className="flex items-center py-1 gap-1 px-4 mb-2 cursor-pointer hover:bg-neutral-30"
        onClick={action}
      >
        <NigeraIcon className="w-5" />
        <span className="heading-6-lg text-neutral-150">NGN</span>
      </div>
      <div
        className="flex items-center py-1 gap-1 px-4 cursor-pointer hover:bg-neutral-30"
        onClick={action}
      >
        <NigeraIcon className="w-5" />
        <span className="heading-6-lg text-neutral-150">NGN</span>
      </div>
      <div
        className="flex items-center py-1 gap-1 px-4 cursor-pointer hover:bg-neutral-30"
        onClick={action}
      >
        <NigeraIcon className="w-5" />
        <span className="heading-6-lg text-neutral-150">NGN</span>
      </div>
      <div
        className="flex items-center py-1 gap-1 px-4 cursor-pointer hover:bg-neutral-30"
        onClick={action}
      >
        <NigeraIcon className="w-5" />
        <span className="heading-6-lg text-neutral-150">NGN</span>
      </div>
    </div>
  );
};
export default Dropdown;
