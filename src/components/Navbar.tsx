import { useAtom } from "jotai/react";
import { Link } from "react-router-dom";
import { navigation, cart } from "../atoms/atoms";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import Button from "../custom/Botton";

const Navbar: React.FC = () => {
  const [nav, setNav] = useAtom(navigation);
  const [cartValue, setCartValue] = useAtom(cart);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center lg:px-10 h-20 text-sm font-light">
      <section className="flex justify-between lg:w-0 w-full items-center px-4">
        <h1 className="text-xl font-medium cursor-pointer">NEXT</h1>
        <HiOutlineMenuAlt3 className="w-16 h-8 lg:hidden" onClick={toggleNav} />
      </section>
      <div
        className={`${
          nav ? "block" : "hidden"
        } z-50 bg-black lg:text-black text-white py-4 lg:py-0 h-nav lg:h-0 justify-between lg:justify-between flex-col top-20 lg:top-0 lg:flex-row lg:static absolute items-center w-full lg:w-9/12 lg:flex`}
      >
        <ul className="lg:pl-10 flex justify-center items-center pb-16 lg:pb-0">
          <Link to="/catalog">
            <li className="border-b-2 pb-1 border-b-gray-500">Catalog</li>
          </Link>
        </ul>
        <div className="flex lg:flex-row flex-col justify-between lg:justify-between lg:h-0 h-96 cursor-pointer">
          <ul className=" flex justify-between w-full h-64 lg:h-0 lg:w-64 items-center flex-col lg:flex-row">
            <li>About</li>
            <li>Lookbook</li>
            <li>Contact</li>
          </ul>
          <div className="items-center justify-center lg:hidden flex">
              <GiShoppingCart className="text-2xl" />
              <p className="relative">({cartValue})</p>
            </div>
        </div>
        <div className="cursor-pointer lg:block hidden">
          <ul className=" flex justify-between item-center h-52 lg:h-0 lg:w-44 lg:pt-0 pt-11 lg:pl-10 items-center flex-col lg:flex-row">
            <MdFavoriteBorder className="lg:text-xl text-2xl" />
            <Button text="Login" />
            <div className="flex items-center">
              <GiShoppingCart className="text-2xl" />
              <p className="relative">({cartValue})</p>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
