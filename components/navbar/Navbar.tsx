"use client";
import { memo, useEffect, useState } from "react";

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
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!open) {
      setShowDropdown(false);
    }
  }, [open]);

  return (
    <nav
      className={
        "md:hidden navbar fixed top-0 z-30 bg-white w-[75%] max-w-[500px] shadow-md " +
        (open ? "left-0" : "left-[-1000%]")
      }
    >
      <header className="flex h-11 items-center bg-neutral-30 gap-4"></header>
      <section className="overflow-y-scroll">
        {categories.map((category, index) => (
          <p
            key={category}
            className={
              "category-text py-4 cursor-pointer  uppercase text-[0.85rem] hover:text-primary-100 transition-all delay-200 ease-linear font-semibold border-b border-neutral-30 px-3 " +
              (index === 0 ? "text-primary-100" : "text-neutral-110")
            }
            onClick={action}
          >
            {category}
          </p>
        ))}
      </section>
      <footer className="h-11 bg-neutral-10"></footer>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
