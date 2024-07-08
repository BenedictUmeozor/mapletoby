"use client"

import Container from "../container/Container";
import StoreBanner from "../banner-two/StoreBanner";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/checkout" || pathname === "/success") return null;

  return (
    <footer className=" bg-neutral-30 pt-4 ">
      <div className="mt-8 pt-36 border-t border-dashed border-custom_blue-40 overflow-y-hidden relative max-md:pb-10 overflow-x-hidden max-md:pt-12">
        <StoreBanner className="absolute left-[-0.125rem] w-full max-md:top-[50%] md:-bottom-6" />
      </div>
      <div className="border-t border-dashed border-custom_blue-40">
        <Container className="py-6">
          <div>
            <p className="heading-6-lg font-bold text-center">
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
