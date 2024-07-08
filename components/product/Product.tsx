"use client";

import Image from "next/image";
import { ProductInterface, white } from "../showcase/productData";
import { v4 as uuidV4 } from "uuid";
import CartAction from "./CartAction";
import QuickAdd from "../ui-utils/QuickAdd";
import { formatNumberWithCommas } from "@/utils/functions";
import { useEffect, useState } from "react";

type Props = {
  product: ProductInterface;
};

const Product = ({ product }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const formatDescription = (description: string) => {
    if (isMobile) {
      return description.length > 18
        ? description.substring(0, 18) + "..."
        : description;
    } else {
      return description.length > 25
        ? description.substring(0, 25) + "..."
        : description;
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="max-w-[220px] mx-auto max-md:max-w-[170px] relative">
      <div className="product-link block h-72 rounded-sm overflow-hidden max-md:h-64 cursor-pointer relative">
        <Image
          src={product.image}
          height={260}
          width={260}
          alt="product"
          className="w-full h-full"
        />
        <QuickAdd product={product} />
      </div>
      <CartAction />
      <div className="mt-3">
        <p className="heading-6-lg text-shade-120 font-semibold block hover:underline">
          {formatDescription(product.description)}
        </p>
        <p className=" text-primary-100 mt-1 mb-3 font-bold">
          ₦{formatNumberWithCommas(product.price)}
        </p>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              key={uuidV4()}
              style={{
                borderColor: color.highlighted
                  ? color.colorHighlightedIsWhite
                    ? "#E1E4EC"
                    : color.color
                  : "transparent",
              }}
              className="flex items-center justify-center h-6 w-6 rounded-full border cursor-pointer"
            >
              <div
                style={{
                  borderColor: color.color === white ? "#E1E4EC" : color.color,
                  backgroundColor: color.color,
                }}
                className="h-4 w-4 rounded-full border"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product;
