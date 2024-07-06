import Container from "../container/Container";
import Product from "../product/Product";
import productOne from "@/assets/images/product.png";
import productTwo from "@/assets/images/product2.png";
import productThree from "@/assets/images/product3.png";
import productFour from "@/assets/images/product4.png";
import productFive from "@/assets/images/product5.png";
import productSix from "@/assets/images/product6.png";
import productSeven from "@/assets/images/product7.png";
import productEight from "@/assets/images/product8.png";
import productNine from "@/assets/images/product9.png";
import productTen from "@/assets/images/product10.png";

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
          <Product image={productOne} />
          <Product image={productTwo} />
          <Product image={productThree} />
          <Product image={productFour} />
          <Product image={productFive} />
          <Product image={productSix} />
          <Product image={productSeven} />
          <Product image={productEight} />
          <Product image={productNine} />
          <Product image={productTen} />
        </div>
      </Container>
    </section>
  );
};
export default Showcase;
