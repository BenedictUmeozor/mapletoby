"use client";

import MenuIcon from "@/assets/icons/Menu";
import { createPortal } from "react-dom";
import Navbar from "../navbar/Navbar";
import Overlay from "../overlay/Overlay";
import { useCallback, useEffect, useState } from "react";

const NavAction = () => {
  const [showNav, setShowNav] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openNav = () => setShowNav(true);
  const closeNav = useCallback(() => setShowNav(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showNav) {
      document.body.classList.add("open")
    } else {
      document.body.classList.remove("open")
    }
  }, [showNav]);

  return (
    <>
      <div className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-[4%] md:hidden" onClick={openNav}>
        <MenuIcon className="w-10" />
      </div>
      {mounted &&
        createPortal(
          <Navbar action={closeNav} open={showNav} />,
          document.body
        )}
      {mounted && showNav && createPortal(<Overlay action={closeNav} />, document.body)}
    </>
  );
};
export default NavAction;
