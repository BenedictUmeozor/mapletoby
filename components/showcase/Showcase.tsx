import Container from "../container/Container";
import { v4 as uuidV4 } from "uuid";
import { products } from "./productData";
import Product from "../product/Product";

const Showcase = () => {
  return (
    <section>
      <Container>
        <div className="flex items-center gap-32 mt-8 ">
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
        <div className="my-10 grid grid-cols-5 gap-8 showcase max-md:grid-cols-1 max-lg:grid-cols-3">
          {products.map((product) => (
            <Product key={uuidV4()} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Showcase;
