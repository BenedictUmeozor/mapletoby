"use client";

import Container from "../container/Container";

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

const CategoriesBar = () => {
  return (
    <div className=" bg-white border-b border-neutral-40 max-md:hidden">
      <Container className="flex items-center gap-8 overflow-x-auto category-bar">
        {categories.map((category, index) => (
          <p
            key={category}
            className={
              "category-text py-4 cursor-pointer  uppercase heading-6-sm hover:text-primary-100 transition-all delay-200 ease-linear font-semibold " +
              (index === 0 ? "text-primary-100" : "text-neutral-110")
            }
          >
            {category}
          </p>
        ))}
      </Container>
    </div>
  );
};
export default CategoriesBar;
