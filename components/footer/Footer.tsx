import Link from "next/link";
import Container from "../container/Container";
import InstagramIcon from "@/assets/icons/Instagram";
import FacebookIcon from "@/assets/icons/Facebook";
import TwitterIcon from "@/assets/icons/Twitter";
import { Kantumruy_Pro } from "next/font/google";

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
    <footer className=" bg-neutral-30 pt-4">
      <div className="mt-8 pt-6 pb-24 border-t border-dashed border-custom_blue-40 overflow-y-hidden relative max-md:pb-10">
        <Container className="flex max-md:block items-center gap-20">
          <div className="flex-1 max-md:mb-8">
            <Link
              href="/"
              className={
                kantumruy.className +
                " text-lg block mb-2 text-shade-120 font-bold"
              }
            >
              MAPLETOBY
            </Link>
            <p className=" text-neutral-140 heading-6-sm">
              Join our mailing list to stay up-to-date with product releases.
            </p>
            <div className="mt-2 h-10 flex items-center relative">
              <input
                type="text"
                className="h-full w-full px-3 bg-white rounded heading-6-sm border border-custom_blue-20 focus:outline-none pr-16"
                placeholder="Enter your email address"
              />
              <button className="absolute right-[6px] rounded-sm bg-shade-120 text-white h-8 w-14 heading-6-sm">
                Join
              </button>
            </div>
          </div>
          <div className="flex-[3] flex items-start max-md:block gap-12">
            {links.map((link) => (
              <div key={link.title} className="flex-1 max-md:mb-6">
                <h5 className="text-shade-120 font-bold heading-6-lg">
                  {link.title}
                </h5>
                <ul className="mt-2">
                  {link.links.map((link) => (
                    <li key={link} className="mb-2">
                      <Link
                        href="/"
                        className=" text-custom_blue-90 heading-6-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
        <div className="absolute left-0 w-full max-md:top-[95%] md:-bottom-8">
          <Container className=" grid grid-cols-3 items-center max-md:mt-5 gap-4 footer">
            <div className="">
              <p className=" text-custom_blue-30 text-[3.5rem] max-md:text-[1.25rem]">
                EXCLUSIVE
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="h-4 w-4 bg-primary-50 rounded-full"></div>
              <p className=" text-custom_blue-30 text-[3.5rem] max-md:text-[1.25rem]">
                VOGUE
              </p>
              <div className="h-4 w-4 bg-primary-50 rounded-full mr-5"></div>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-custom_blue-30 text-[3.5rem] max-md:text-[1.25rem]">
                EXTRA-CHIC
              </p>
            </div>
          </Container>
        </div>
      </div>
      <div className="border-t border-dashed border-custom_blue-40">
        <Container className="py-6 flex items-center justify-between">
          <div>
            <p className="heading-6-lg font-bold">
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <InstagramIcon className="w-10" />
            <FacebookIcon className="w-10" />
            <TwitterIcon className="w-10" />
          </div>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
