"use client";

import Container from "../container/Container";
import Link from "next/link";
import NavAction from "./NavAction";
import { Kantumruy_Pro } from "next/font/google";

const kantumruy = Kantumruy_Pro({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className=" bg-neutral-30 sticky top-0 z-50">
      <Container className="flex items-center justify-center py-4 relative">
        <NavAction />
        <Link
          href="/"
          className={kantumruy.className + " heading-2-sm font-extrabold"}
        >
          MAPLETOBY
        </Link>
      </Container>
    </header>
  );
};
export default Header;
