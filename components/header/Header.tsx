"use client";

import Container from "../container/Container";
import Link from "next/link";
import SearchIcon from "@/assets/icons/Search";
import UserIcon from "@/assets/icons/User";
import HeartIcon from "@/assets/icons/Heart";
import ShoppingBagIcon from "@/assets/icons/ShoppingBag";
import DropdownAction from "../dropdown/DropdownAction";
import NavAction from "./NavAction";
import { Kantumruy_Pro } from "next/font/google";

const kantumruy = Kantumruy_Pro({ subsets: ["latin"] });

const Header = () => {

  return (
    <header className=" bg-neutral-30 sticky top-0 z-20">
      <Container className="flex items-center justify-between py-4">
        <NavAction />
        <DropdownAction />
        <div>
          <Link
            href="/"
            className={kantumruy.className + " heading-2-sm font-extrabold"}
          >
            MAPLETOBY
          </Link>
        </div>
        <div>
          <div className="flex items-center gap-6 max-md:gap-3">
            <div className="cursor-pointer">
              <SearchIcon className="w-7" />
            </div>
            <div className="cursor-pointer max-md:hidden">
              <UserIcon className="w-8" />
            </div>
            <div className="cursor-pointer max-md:hidden">
              <HeartIcon className="w-8" />
            </div>
            <div className="cursor-pointer">
              <ShoppingBagIcon className="w-8" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
