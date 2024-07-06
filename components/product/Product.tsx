import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
};

const Product = ({ image }: Props) => {
  return (
    <div>
      <div className=" h-80 rounded-sm overflow-hidden max-md:h-[60vh]">
        <Image
          src={image}
          height={260}
          width={260}
          alt="product"
          className="w-full h-full"
        />
      </div>
      <div className="mt-3">
        <p className="heading-6-lg text-shade-120 font-semibold">Description</p>
        <p className=" text-primary-100 mt-1 mb-3 font-bold">₦10,000</p>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full border border-neutral-50 bg-white"></div>
          <div className="h-4 w-4 rounded-full border border-[#1F1F1F] bg-[#1F1F1F]"></div>
          <div className="h-4 w-4 rounded-full border border-[#EBA9CD] bg-[#EBA9CD]"></div>
        </div>
      </div>
    </div>
  );
};
export default Product;
