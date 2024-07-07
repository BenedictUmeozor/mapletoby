import Image from "next/image";
import product16 from "@/assets/images/product16.jpg";
import product17 from "@/assets/images/product17.jpg";
import product18 from "@/assets/images/product18.jpg";
import Link from "next/link";
import ShoppingBag from "./ShoppingBag";
import WalletIcon from "./Wallet";

const ProductImages = () => {
  return (
    <>
      <div className="md:hidden">
        <p className="text-shade-120 caption font-semibold mb-4">
          <span className="text-neutral-130">SHOP / ALL</span> / ACTIVE WEAR
        </p>
        <div className="mb-4">
          <p className="heading-6-sm font-bold mb-1">
            Two Piece Yoga Skirt Set
          </p>
          <p className="heading-5-lg font-bold mb-1 text-primary-100">
            ₦40,000
          </p>
          <p className="caption">FASHIONNOVA</p>
        </div>
        <div className="h-[21.875rem] w-[21.875] rounded overflow-hidden mb-4 relative">
          <Image
            src={product16}
            alt="product"
            height={350}
            width={350}
            className="w-full h-full"
          />
          <div className="absolute caption bg-critical_red-90 py-1 px-3 top-4 text-critical_red-50 right-2">
            <span className="font-semibold text-white">8</span> pieces left
          </div>
        </div>
        <div className="mb-4">
          <p className="heading-6-sm text-neutral-140 font-semibold mb-1">
            Colour
          </p>
          <div className="flex items-center gap-4">
            <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
              <div className="flex items-center justify-center h-5 w-5 rounded-full border border-[#1F1F1F] cursor-pointer">
                <div className="h-3 w-3 rounded-full border bg-[#1F1F1F] border-[#1F1F1F]"></div>
              </div>
            </button>
            <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
              <div className="h-3 w-3 rounded-full border bg-[#AEA4C6] border-[#AEA4C6]"></div>
            </button>
            <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
              <div className="h-3 w-3 rounded-full border bg-[#EBA9CD] border-[#EBA9CD]"></div>
            </button>
            <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
              <div className="h-3 w-3 rounded-full border bg-[#684A33] border-[#684A33]"></div>
            </button>
            <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
              <div className="h-3 w-3 rounded-full border bg-[#729DDC] border-[#729DDC]"></div>
            </button>
            <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
              <div className="h-3 w-3 rounded-full border bg-[#1F1F1F] border-[#1F1F1F]"></div>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <p className="heading-6-sm text-neutral-140 font-semibold">Sizes</p>
            <Link
              href="#"
              className="heading-6-sm text-custom_blue-60 underline"
            >
              View Size Guide
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
              XS
            </button>
            <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
              S
            </button>
            <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
              M
            </button>
            <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
              L
            </button>
            <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
              XL
            </button>
            <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
              XXL
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex-1 flex items-center gap-1 justify-center py-2 text-white bg-shade-120 border border-shade-120 rounded font-semibold heading-6-sm">
            <ShoppingBag className="w-5" />
            Add To Bag
          </button>
          <button className="flex-1 flex items-center gap-1 justify-center py-2 text-shade-120 border border-neutral-40 bg-neutral-40 rounded font-semibold heading-6-sm">
            <WalletIcon className="w-5" />
            Buy Now
          </button>
        </div>
      </div>

      <div className="max-md:hidden grid grid-cols-12 mb-8 gap-[5%]">
        <div className="col-span-2 flex flex-col items-center gap-4 h-[35.15rem] overflow-y-auto no-scrollbar">
          <div className="h-[11.69rem] w-[9.32rem] max-w-[97%] mx-auto cursor-pointer border border-primary-100">
            <Image
              src={product16}
              alt="product"
              height={197}
              width={157}
              className="w-full h-full"
            />
          </div>
          <div className="h-[12.3rem] w-[9.8rem] max-w-[97%] mx-auto cursor-pointer border border-transparent hover:border-primary-100">
            <Image
              src={product17}
              alt="product"
              height={197}
              width={157}
              className="w-full h-full"
            />
          </div>
          <div className="h-[12.3rem] w-[9.8rem] max-w-[97%] mx-auto cursor-pointer border border-transparent hover:border-primary-100">
            <Image
              src={product18}
              alt="product"
              height={197}
              width={157}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="col-span-10 flex items-center gap-8 h-full">
          <div className="flex-1 h-full relative">
            <Image
              src={product16}
              alt="product"
              height={592}
              width={544}
              className="w-full h-full"
            />
            <div className="absolute heading-6-lg bg-critical_red-90 py-1 px-3 top-4 text-critical_red-50 right-2">
              <span className="font-semibold text-white">8</span> pieces left
            </div>
          </div>
          <div className="flex-1 h-full flex flex-col justify-between p-10 rounded-sm border border-neutral-50">
            <div>
              <p className="text-shade-120 caption font-semibold">
                <span className="text-neutral-130">SHOP / ALL</span> / ACTIVE
                WEAR
              </p>
            </div>
            <div>
              <p className="heading-4-lg font-bold mb-1">
                Two Piece Yoga Skirt Set
              </p>
              <p className="heading-2-lg font-bold mb-1 text-primary-100">
                ₦40,000
              </p>
              <p className="heading-6-lg">FASHIONNOVA</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <p className="heading-6-lg text-neutral-140 font-semibold">
                  Sizes
                </p>
                <Link
                  href="#"
                  className="heading-5-lg text-custom_blue-60 underline"
                >
                  View Size Guide
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
                  XS
                </button>
                <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
                  S
                </button>
                <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
                  M
                </button>
                <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
                  L
                </button>
                <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
                  XL
                </button>
                <button className="text-shade-120 heading-5-lg py-1 border border-neutral-40 rounded flex-1">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <p className="heading-6-lg text-neutral-140 font-semibold mb-1">
                Colour
              </p>
              <div className="flex items-center gap-4">
                <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full border border-[#1F1F1F] cursor-pointer">
                    <div className="h-4 w-4 rounded-full border bg-[#1F1F1F] border-[#1F1F1F]"></div>
                  </div>
                </button>
                <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
                  <div className="h-4 w-4 rounded-full border bg-[#AEA4C6] border-[#AEA4C6]"></div>
                </button>
                <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
                  <div className="h-4 w-4 rounded-full border bg-[#EBA9CD] border-[#EBA9CD]"></div>
                </button>
                <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
                  <div className="h-4 w-4 rounded-full border bg-[#684A33] border-[#684A33]"></div>
                </button>
                <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
                  <div className="h-4 w-4 rounded-full border bg-[#729DDC] border-[#729DDC]"></div>
                </button>
                <button className="flex-1 py-2 flex items-center justify-center border border-neutral-40 rounded">
                  <div className="h-4 w-4 rounded-full border bg-[#1F1F1F] border-[#1F1F1F]"></div>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex-1 flex items-center gap-1 justify-center py-3 text-white bg-shade-120 border border-shade-120 rounded font-semibold heading-5-lg">
                <ShoppingBag className="w-5" />
                Add To Bag
              </button>
              <button className="flex-1 flex items-center gap-1 justify-center py-3 text-shade-120 border border-neutral-40 bg-neutral-40 rounded font-semibold heading-5-lg">
                <WalletIcon className="w-5" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductImages;
