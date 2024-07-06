import Container from "../container/Container";
import { v4 as uuidV4 } from "uuid";
import { products } from "./productData";
import Product from "../product/Product";
import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";

const Showcase = () => {
  return (
    <section>
      <Container>
        <div className="md:hidden mt-8 mb-4">
          <p className="text-shade-120 text-[0.85rem] font-semibold"><span className="text-neutral-130">SHOP</span> / ALL</p>
        </div>
        <DesktopFilter />
        <MobileFilter />
        <div className="my-10 grid grid-cols-5 gap-8 showcase max-md:grid-cols-2 max-lg:grid-cols-3">
          {products.map((product) => (
            <Product key={uuidV4()} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Showcase;
