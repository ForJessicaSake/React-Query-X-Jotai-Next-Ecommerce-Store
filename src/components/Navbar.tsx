import { useAtom } from "jotai/react";
import {navigation} from "../atoms/atoms"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import Button from "../custom/Botton";

const Navbar = () => {

    const [nav, setNav] = useAtom(navigation)
    const toggleNav =()=>{
        setNav(!nav)
    }

  return (
    <nav className="flex justify-between items-center lg:px-10 px-3 text-sm pt-7 cursor-pointer">
    <section className="flex justify-between lg:w-0 w-full items-center">
    <h1 className="text-xl font-medium">NEXT</h1>
    <HiOutlineMenuAlt3 className="w-16 h-8 lg:hidden" onClick={toggleNav}/>
    </section>
      <div className={`${nav ? "block" : "hidden"} py-4 lg:py-0 h-96 lg:h-0 justify-between lg:justify-between flex-col top-20 lg:top-0 lg:flex-row lg:static absolute items-center w-full lg:w-9/12 lg:flex`}>
      <ul className="lg:pl-10 flex justify-center pb-6 lg:pb-0">
        <li className="border-b-2 pb-1 border-b-gray-500">Catalog</li>
      </ul>
      <div className="flex lg:justify-between lg:h-0 h-36">
        <ul className="flex justify-between w-full lg:w-56 items-center flex-col lg:flex-row">
          <li>About</li>
          <li>Lookbook</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between h-36 lg:h-0 lg:w-32 lg:pt-0 pt-8 l:gpl-10 items-center flex-col lg:flex-row">
          <MdFavoriteBorder />
          <Button text="Login" />
          <GiShoppingCart />
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
