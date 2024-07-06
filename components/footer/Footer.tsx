import Link from "next/link";
import Container from "../container/Container";
import InstagramIcon from "@/assets/icons/Instagram";
import FacebookIcon from "@/assets/icons/Facebook";
import TwitterIcon from "@/assets/icons/Twitter";

interface LinkInterface {
  title: string;
  links: string[];
}

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
    <footer className=" bg-custom_blue-20">
      <div className="mt-16 pt-12 border-t border-dashed border-custom_blue-40">
        <Container className="flex items-center gap-8">
          <div className="flex-1">
            <Link
              href="/"
              className="heading-5-lg block mb-4 text-shade-120 font-bold"
            >
              MAPLETOBY
            </Link>
            <p className=" text-neutral-140 heading-6-sm">
              Join our mailing list to stay up-to-date with product releases.
            </p>
            <div className="mt-4 h-10 flex items-center relative">
              <input
                type="text"
                className="h-full w-full px-3 bg-white rounded heading-6-sm focus:outline-none pr-16"
                placeholder="Enter your email address"
              />
              <button className="absolute right-1 bg-shade-120 text-white h-9 w-14 heading-6-sm">
                Join
              </button>
            </div>
          </div>
          <div className="flex-[3] flex items-center">
            {links.map((link) => (
              <div key={link.title} className="flex-1">
                <h5 className="text-shade-120 font-bold heading-6-lg">
                  {link.title}
                </h5>
                <ul className="mt-4">
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
        <Container className="grid grid-cols-3 items-center mt-32 gap-4">
          <div className="flex items-center justify-center">
            <p className=" text-custom_blue-30 text-[4rem]">EXCLUSIVE</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-6 w-6 bg-primary-50 rounded-full"></div>
            <p className=" text-custom_blue-30 text-[4rem]">VOGUE</p>
            <div className="h-6 w-6 bg-primary-50 rounded-full mr-5"></div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-custom_blue-30 text-[4rem]">EXTRA-CHIC</p>
          </div>
        </Container>
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
