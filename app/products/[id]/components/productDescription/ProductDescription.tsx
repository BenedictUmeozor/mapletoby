const ProductDescription = () => {
  return (
    <div className="mt-8 max-md:mt-4 mb-12 border border-neutral-50">
      <header className="px-4 border-b border-neutral-50">
        <ul className="flex items-center gap-6">
          <li className="py-4 max-md:heading-6-sm md:caption font-semibold text-shade-120 border-b border-primary-100">PRODUCT</li>
          <li className="py-4 max-md:heading-6-sm md:caption font-semibold text-neutral-110">SIZE GUIDE</li>
          <li className="py-4 max-md:heading-6-sm md:caption font-semibold text-neutral-110">CARE</li>
        </ul>
      </header>
      <section className="p-4">
        <p className="heading-6-lg max-md:heading-6-sm mb-4">
          Experience unparalleled comfort and style with our Elegant Black Yoga
          Skirt Set. This versatile set includes a high-waisted skirt and a
          matching crop top, both crafted from premium materials designed to
          enhance your performance and keep you looking chic.
        </p>
        <div className="mb-4">
          <h6 className="heading-6-lg max-md:heading-6-sm font-semibold">Item Specifications</h6>
          <ul className=" list-disc pl-8">
            <li className="heading-6-lg max-md:heading-6-sm">Fabric Composition: 75% Nylon, 25% Spandex</li>
            <li className="heading-6-lg max-md:heading-6-sm">
              Fabric Features: Moisture-wicking, breathable, and quick-drying
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h6 className="heading-6-lg max-md:heading-6-sm font-semibold">Skirt</h6>
          <ul className="list-disc pl-8">
            <li className="heading-6-lg max-md:heading-6-sm">Length: Mid-thigh with built-in shorts for added coverage</li>
            <li className="heading-6-lg max-md:heading-6-sm">
              Waistband: High-waisted with a wide, elastic band for a secure and
              flattering fit
            </li>
            <li className="heading-6-lg max-md:heading-6-sm">
              Fit: Stretchable and flexible, allowing full range of motion
            </li>
            <li className="heading-6-lg max-md:heading-6-sm">Design: Sleek, minimalist design with a smooth finish:</li>
          </ul>
        </div>
        <div>
          <h6 className="heading-6-lg max-md:heading-6-sm font-semibold">Crop Top</h6>
          <ul className="list-disc pl-8">
            <li className="heading-6-lg max-md:heading-6-sm">Support: Medium support with a fitted design</li>
            <li className="heading-6-lg max-md:heading-6-sm">Straps: Wide, comfortable straps that provide stability</li>
            <li className="heading-6-lg max-md:heading-6-sm">Neckline: Round neck for a classic, flattering look</li>
            Fit: Form-fitting yet comfortable, enhancing your natural shape
          </ul>
        </div>
      </section>
    </div>
  );
};
export default ProductDescription;
