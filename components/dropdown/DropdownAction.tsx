"use client";

import ChevronDownIcon from "@/assets/icons/ChevronDown";
import NigeraIcon from "@/assets/icons/Nigera";
import Divider from "../ui-utils/Divider";
import Dropdown from "./Dropdown";
import { useCallback, useState } from "react";

const DropdownAction = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const removeDropdown = useCallback(() => setShowDropdown(false), []);

  return (
    <div className="flex items-center gap-6 relative max-md:hidden">
      <div
        className="flex items-center gap-2 bg-white p-2 rounded-md cursor-pointer"
        onMouseEnter={() => setShowDropdown(true)}
      >
        <div className="flex items-center gap-1 r">
          <NigeraIcon className="w-5" />
          <span className="heading-6-lg text-neutral-150">NGN</span>
        </div>
        <ChevronDownIcon className={"w-5 transition-all duration-100 ease-linear " + (showDropdown ? "rotate" : "")} />
      </div>
      <Divider />
      <button className="font-bold heading-6-lg bg-neutral-50 text-white w-20 py-2 rounded-md">
        Shop
      </button>
      {showDropdown && <Dropdown action={removeDropdown} />}
    </div>
  );
};
export default DropdownAction;
