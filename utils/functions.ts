import { ProductInterface } from "@/components/showcase/productData";

export function formatNumberWithCommas(number: number): string {
  return number.toLocaleString("en-US");
}

export function sortByPriceLowToHigh(
  products: ProductInterface[]
): ProductInterface[] {
  return products.sort((a, b) => a.price - b.price);
}

export function sortByPriceHighToLow(
  products: ProductInterface[]
): ProductInterface[] {
  return products.sort((a, b) => b.price - a.price);
}
