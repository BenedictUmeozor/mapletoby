const DesktopFilter = () => {
  return (
    <div className="flex items-center gap-32 mt-8 max-md:hidden">
      <div className="flex-1 flex items-center justify-between p-2 border border-neutral-40 rounded">
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Size
        </button>
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Colour
        </button>
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Fabric
        </button>
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Price
        </button>
      </div>
      <div className="flex-[3] flex items-center justify-between p-2 border border-neutral-40 rounded">
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Best Selling
        </button>
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Featured
        </button>
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Lowest Price
        </button>
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Alph A - Z
        </button>
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Alph Z - A
        </button>
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Date New - Old
        </button>
        <button className=" text-neutral-110 heading-6-sm p-1 px-2 border border-neutral-40 rounded">
          Date Old - New
        </button>
      </div>
    </div>
  );
};
export default DesktopFilter;
