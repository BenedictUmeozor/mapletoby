import Divider from "../ui-utils/Divider";

const Banner = () => {
  return (
    <div className="flex items-center justify-center gap-4 bg-custom_blue-20 py-6 max-md:py-4">
      <p className="text-shade-120 heading-5-lg font-bold">SAME DAY DELIVERY</p>
      <Divider />
      <p className=" text-custom_blue-80 heading-5-lg font-semibold">
        ABUJA, LAGOS, PH
      </p>
    </div>
  );
};
export default Banner;
