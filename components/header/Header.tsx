import NigeraIcon from "@/assets/icons/Nigera";
import Container from "../container/Container";
import Divider from "../ui-utils/Divider";
import ChevronDownIcon from "@/assets/icons/ChevronDown";
import Link from "next/link";
import SearchIcon from "@/assets/icons/Search";
import UserIcon from "@/assets/icons/User";
import HeartIcon from "@/assets/icons/Heart";
import ShoppingBagIcon from "@/assets/icons/ShoppingBag";
import MenuIcon from "@/assets/icons/Menu";

const Header = () => {
  return (
    <header className=" bg-neutral-30">
      <Container className="flex items-center justify-between py-6">
        <div className="cursor-pointer md:hidden">
          <MenuIcon className="w-8" />
        </div>
        <div className="flex items-center gap-6 max-md:hidden">
          <div className="flex items-center gap-2 bg-white p-2 rounded-md">
            <div className="flex items-center gap-1 cursor-pointer">
              <NigeraIcon className="w-5" />
              <span className="heading-6-lg text-neutral-150">NGN</span>
            </div>
            <ChevronDownIcon className="w-5" />
          </div>
          <Divider />
          <button className="font-bold heading-6-lg bg-neutral-50 text-white w-20 py-2 rounded-md">
            Shop
          </button>
        </div>
        <div>
          <Link href="/" className="heading-2-sm font-extrabold">
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
