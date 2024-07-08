import Link from "next/link";
import Container from "../container/Container";
import InstagramIcon from "@/assets/icons/Instagram";
import FacebookIcon from "@/assets/icons/Facebook";
import TwitterIcon from "@/assets/icons/Twitter";
import { Kantumruy_Pro } from "next/font/google";
import StoreBanner from "../banner-two/StoreBanner";

interface LinkInterface {
  title: string;
  links: string[];
}

const kantumruy = Kantumruy_Pro({ subsets: ["latin"] });

const links: LinkInterface[] = [
  {
    title: "ORDER",
    links: ["Order Process", "Returns & Exchanges", "Gift Cards"],
  },
  {
    title: "HELP",
    links: ["Contact Us", "FAQs", "Style Guide"],
  },
  {
    title: "ABOUT",
    links: ["The Brand", "Our Angels", "Stores"],
  },
  {
    title: "TERMS",
    links: ["Privacy Policy", "Terms & Conditions", "Accessibility"],
  },
];

const Footer = () => {
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
