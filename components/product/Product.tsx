import Image from "next/image";
import { ProductInterface, white } from "../showcase/productData";
import { v4 as uuidV4 } from "uuid";

type Props = {
  product: ProductInterface;
};

const Product = ({ product }: Props) => {
  return (
    <div className="max-w-[220px] mx-auto max-md:max-w-[163px]">
      <div className=" h-72 rounded-sm overflow-hidden max-md:h-64">
        <Image
          src={product.image}
          height={260}
          width={260}
          alt="product"
          className="w-full h-full"
        />
      </div>
      <div className="mt-3">
        <p className="heading-6-lg text-shade-120 font-semibold">
          {product.description.length > 25
            ? product.description.substring(0, 25) + "..."
            : product.description}
        </p>
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
