import Image from "next/image";
import { ProductInterface, white } from "../showcase/productData";
import { v4 as uuidV4 } from "uuid";
import ShoppingBagIcon from "@/assets/icons/ShoppingBagIcon";
import Link from "next/link";

type Props = {
  product: ProductInterface;
};

const Product = ({ product }: Props) => {
  return (
    <div className="max-w-[220px] mx-auto max-md:max-w-[170px] relative">
      <Link
        href="/products/1"
        className="product-link block h-72 rounded-sm overflow-hidden max-md:h-64 "
      >
        <Image
          src={product.image}
          height={260}
          width={260}
          alt="product"
          className="w-full h-full"
        />
      </Link>
      <div className="bg-white h-6 w-6 rounded-full flex items-center justify-center absolute top-[5%] right-[7.5%] cursor-pointer transition-all duration-200 ease-linear hover:bg-primary-50 z-40">
        <ShoppingBagIcon />
      </div>
      <div className="mt-3">
        <Link
          href="/products/1"
          className="heading-6-lg text-shade-120 font-semibold block hover:underline"
        >
          {product.description.length > 20
            ? product.description.substring(0, 20) + "..."
            : product.description}
        </Link>
        <p className=" text-primary-100 mt-1 mb-3 font-bold">
          ₦{product.price}
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
