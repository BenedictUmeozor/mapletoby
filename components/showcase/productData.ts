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
import productEleven from "@/assets/images/product11.png";
import productTwelve from "@/assets/images/product12.png";
import productThirteen from "@/assets/images/product13.png";
import productFourteen from "@/assets/images/product14.png";
import productFifteen from "@/assets/images/product15.png";
import { StaticImageData } from "next/image";

export interface ProductInterface {
  image: StaticImageData;
  description: string;
  price: string;
  colors: {
    color: string;
    highlighted: boolean;
    colorHighlightedIsWhite: boolean;
  }[];
}

const black = "#1F1F1F";
export const white = "#FFFFFF";
const pink = "#EBA9CD";
const brown = "#807653";
const purple = "#AEA4C6";
const cream = "#E3C380";
const faded = "#F0EEE2";

export const products: ProductInterface[] = [
  {
    image: productOne,
    description: "Fashionnova Body Con",
    price: "32,000",
    colors: [
      {
        color: white,
        highlighted: true,
        colorHighlightedIsWhite: true,
      },
      {
        color: black,
        highlighted: false,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productTwo,
    description: "Description",
    price: "14,500",
    colors: [],
  },
  {
    image: productThree,
    description: "Fashionnova Lace Top",
    price: "39,000",
    colors: [
      {
        color: black,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
      {
        color: white,
        highlighted: false,
        colorHighlightedIsWhite: false,
      },
      {
        color: pink,
        highlighted: false,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productFour,
    description: "Description",
    price: "21,000",
    colors: [
      {
        color: brown,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
      {
        color: black,
        highlighted: false,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productFive,
    description: "Description",
    price: "32,000",
    colors: [
      {
        color: faded,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productSix,
    description: "Fashionnova Washed Pant Set",
    price: "78,000",
    colors: [
      {
        color: brown,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productSeven,
    description: "PLT Frill Hem Mini Dress",
    price: "19,900",
    colors: [
      {
        color: purple,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productEight,
    description: "Two Piece Yoga Skirt Set",
    price: "40,000",
    colors: [
      {
        color: black,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
      {
        color: purple,
        highlighted: false,
        colorHighlightedIsWhite: false,
      },
      {
        color: pink,
        highlighted: false,
        colorHighlightedIsWhite: false,
      },
      {
        color: brown,
        highlighted: false,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productNine,
    description: "Fashionnova Maxi Dress",
    price: "88,000",
    colors: [
      {
        color: cream,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productTen,
    description: "Embellished Heart Cup Mini Dresse",
    price: "36,000",
    colors: [
      {
        color: pink,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productEleven,
    description: "Backless Halter Top",
    price: "28,000",
    colors: [
      {
        color: black,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
      {
        color: white,
        highlighted: false,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productTwelve,
    description: "PLT Frill Hem Maxi Dress",
    price: "29,900",
    colors: [
      {
        color: pink,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productThirteen,
    description: "Fashionnova Linen Pant Set",
    price: "68,000",
    colors: [
      {
        color: faded,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productFourteen,
    description: "Fashionnova Snake Print Pant Se",
    price: "69,000",
    colors: [
      {
        color: black,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    image: productFifteen,
    description: "Oversized Hoodie",
    price: "32,000",
    colors: [
      {
        color: faded,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
];
