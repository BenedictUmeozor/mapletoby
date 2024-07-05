"use client";

import ChevronDownIcon from "@/assets/icons/ChevronDown";
import FacebookIcon from "@/assets/icons/Facebook";
import HeartIcon from "@/assets/icons/Heart";
import InstagramIcon from "@/assets/icons/Instagram";
import NigeraIcon from "@/assets/icons/Nigera";
import TwitterIcon from "@/assets/icons/Twitter";
import UserIcon from "@/assets/icons/User";
import { memo } from "react";

type Props = {
  open: boolean;
  action: () => void;
};

const categories = [
  "new in",
  "sale",
  "all",
  "tops",
  "dresses",
  "sets",
  "beach wear",
  "pants",
  "skirts",
  "rompers",
  "jumpsuits",
  "activewear",
  "accessories",
  "sweaters",
  "bodysuits",
  "denim",
  "luxe dresses",
  "bodysuits",
];

const Navbar = memo(({ open, action }: Props) => {
  return (
    <nav
      className={
        "md:hidden navbar fixed top-0 z-30 bg-white w-[75%] max-w-[500px] shadow-md " +
        (open ? "left-0" : "left-[-1000%]")
      }
    >
      <header className="flex items-center bg-neutral-30 py-3 px-3 gap-4">
        <div className="flex-[2] flex items-center gap-2 bg-white p-2 rounded-md cursor-pointer">
          <div className="flex items-center gap-1 r">
            <NigeraIcon className="w-5" />
            <span className="heading-6-lg text-neutral-150">NGN</span>
          </div>
          <ChevronDownIcon
            className={
              "w-5 transition-all duration-100 ease-linear " +
              (!true ? "rotate" : "")
            }
          />
        </div>
        <div className="flex-1 flex items-center gap-3">
          <div className="cursor-pointer">
            <UserIcon className="w-8" />
          </div>
          <div className="cursor-pointer">
            <HeartIcon className="w-8" />
          </div>
        </div>
      </header>
      <section className="overflow-y-scroll">
        {categories.map((category, index) => (
          <p
            key={category}
            className={
              "category-text py-4 cursor-pointer  uppercase text-base hover:text-primary-100 transition-all delay-200 ease-linear font-semibold border-b border-neutral-30 px-3 " +
              (index === 0 ? "text-primary-100" : "text-neutral-110")
            }
            onClick={action}
          >
            {category}
          </p>
        ))}
      </section>
      <footer className="px-3 py-3 flex items-center gap-4 bg-neutral-10">
        <InstagramIcon className="w-8" />
        <FacebookIcon className="w-8" />
        <TwitterIcon className="w-8" />
      </footer>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
