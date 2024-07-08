"use client";

import Container from "../container/Container";
import { products } from "./productData";
import Product from "../product/Product";
import MobileFilter from "./MobileFilter";
import DesktopFilter from "./DesktopFilter";
import { useCallback, useEffect, useState } from "react";
import { sortByPriceHighToLow, sortByPriceLowToHigh } from "@/utils/functions";
import { Flipped, Flipper } from "react-flip-toolkit";

const Showcase = () => {
  const [items, setItems] = useState([...products]);

  const removeFilters = useCallback(() => setItems([...products]), []);
  const sortLowToHigh = useCallback(
    () => setItems(sortByPriceLowToHigh([...products])),
    []
  );
  const sortHighToLow = useCallback(
    () => setItems(sortByPriceHighToLow([...products])),
    []
  );

  useEffect(() => {
    items;
  }, [items]);
  return (
    <section>
      <Container>
        <div className="md:hidden mt-8 mb-4">
          <p className="text-shade-120 text-[0.85rem] font-semibold">
            <span className="text-neutral-130">SHOP</span> / ALL
          </p>
        </div>
        <MobileFilter
          removeFilters={() => removeFilters()}
          sortHighToLow={() => sortHighToLow()}
          sortLowToHigh={() => sortLowToHigh()}
        />
        <DesktopFilter
          removeFilters={() => removeFilters()}
          sortHighToLow={() => sortHighToLow()}
          sortLowToHigh={() => sortLowToHigh()}
        />
        <Flipper flipKey={items.map((item) => item.id).join("")}>
          <div className="my-10 grid grid-cols-5 gap-8 showcase max-md:grid-cols-2 max-lg:grid-cols-3">
            {items.map((product) => (
              <Flipped key={product.id} flipId={product.id}>
                <div>
                  <Product key={product.id} product={product} />
                </div>
              </Flipped>
            ))}
          </div>
        </Flipper>
      </Container>
    </section>
  );
};
export default Showcase;
