import ChevronDownIcon from "@/assets/icons/ChevronDown";

const MobileFilter = () => {
  return (
    <div className="md:hidden flex items-center mt-8 justify-between p-2 border border-neutral-40 rounded gap-4">
      <div className="flex-1 flex items-center justify-between text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer">
        <span>Filter</span>
        <ChevronDownIcon className="w-4" />
      </div>
      <div className="flex-1 flex items-center justify-between text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded cursor-pointer">
        <span>Sort</span>
        <ChevronDownIcon className="w-4" />
      </div>
    </div>
  );
};
export default MobileFilter;
