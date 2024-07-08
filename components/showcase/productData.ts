import productOne from "@/assets/images/product.jpg";
import productTwo from "@/assets/images/product2.jpg";
import productThree from "@/assets/images/product3.jpg";
import productFour from "@/assets/images/product4.jpg";
import productFive from "@/assets/images/product5.jpg";
import productSix from "@/assets/images/product6.jpg";
import productSeven from "@/assets/images/product7.jpg";
import productEight from "@/assets/images/product8.jpg";
import productNine from "@/assets/images/product9.jpg";
import productTen from "@/assets/images/product10.jpg";
import productEleven from "@/assets/images/product11.jpg";
import productTwelve from "@/assets/images/product12.jpg";
import productThirteen from "@/assets/images/product13.jpg";
import productFourteen from "@/assets/images/product14.jpg";
import productFifteen from "@/assets/images/product15.jpg";
import { StaticImageData } from "next/image";
import { v4 as uuidV4 } from "uuid";

export interface ProductInterface {
  id: string;
  image: StaticImageData;
  description: string;
  price: number;
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
    id: uuidV4(),
    image: productOne,
    description: "Fashionnova Body Con",
    price: 32000,
    colors: [
      {
        color: white,
        highlighted: true,
        colorHighlightedIsWhite: true,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productTwo,
    description: "Fashionnova Cut Out Top",
    price: 14500,
    colors: [],
  },
  {
    id: uuidV4(),
    image: productThree,
    description: "Fashionnova Lace Top",
    price: 39000,
    colors: [
      {
        color: black,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productFour,
    description: "Fashionova Flare Pant",
    price: 45000,
    colors: [
      {
        color: brown,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productFive,
    description: "Fashionnova Fringed Satin Midi Dress",
    price: 76000,
    colors: [
      {
        color: faded,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productSix,
    description: "Fashionnova Washed Pant Set",
    price: 78000,
    colors: [
      {
        color: brown,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productSeven,
    description: "PLT Frill Hem Mini Dress",
    price: 19000,
    colors: [
      {
        color: purple,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productEight,
    description: "Two Piece Yoga Skirt Set",
    price: 40000,
    colors: [
      {
        color: black,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productNine,
    description: "Fashionnova Maxi Dress",
    price: 88000,
    colors: [
      {
        color: cream,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productTen,
    description: "Embellished Heart Cup Mini Dresse",
    price: 36000,
    colors: [
      {
        color: pink,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productEleven,
    description: "Backless Halter Top",
    price: 28000,
    colors: [
      {
        color: black,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productTwelve,
    description: "PLT Frill Hem Maxi Dress",
    price: 29000,
    colors: [
      {
        color: pink,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productThirteen,
    description: "Fashionnova Linen Pant Set",
    price: 68000,
    colors: [
      {
        color: faded,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productFourteen,
    description: "Fashionnova Snake Print Pant Se",
    price: 69000,
    colors: [
      {
        color: black,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
  {
    id: uuidV4(),
    image: productFifteen,
    description: "Oversized Hoodie",
    price: 32000,
    colors: [
      {
        color: faded,
        highlighted: true,
        colorHighlightedIsWhite: false,
      },
    ],
  },
];
