import Product from "@/components/product/Product";
import { products } from "@/components/showcase/productData";
import { v4 as uuidV4 } from "uuid";

const data = products.slice(0, 5);

const Recommendations = () => {
  return (
    <div className="mb-12">
      <h3 className="heading-6-lg font-bold text-center">YOU MAY ALSO LIKE</h3>
      <div className="my-10 grid grid-cols-5 gap-8 showcase max-md:grid-cols-2 max-lg:grid-cols-3">
        {data.map((product) => (
          <Product key={uuidV4()} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Recommendations;
