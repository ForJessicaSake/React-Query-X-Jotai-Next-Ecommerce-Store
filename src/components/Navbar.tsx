import { useAtom } from "jotai/react"
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { navigation, cart } from "../atoms/atoms"
import Logo from "../assets/Images/Logo.svg"
import Cart from "../assets/Images/Cart.svg"
import Profile from "../assets/Images/Profile.svg"
import Search from "../assets/Images/Search.svg"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {

  const [nav, setNav] = useAtom(navigation)
  const [cartValue, setCartValue] = useAtom(cart)

  const toggleNav = () => {
    setNav(!nav);
  }

  return (
    <nav className="flex justify-between items-center lg:px-16 h-20 text-base lg:text-sm cursor-pointer">
      <section className="flex justify-between lg:w-28 w-full"> 
        <figure className="lg:w-20 w-24 flex justify-between items-center">
        <img src={Logo} alt="Logo" className="lg:w-5 lg:h-5 h-6 w-6 animate-bounce lg:ml-0 ml-4" />
        <h1 className="text-xl font-medium cursor-pointer lg:block">Next</h1>
        </figure>
        <HiOutlineMenuAlt3 className="w-16 h-8 lg:hidden" onClick={toggleNav} />
      </section>

      <div
        className={`${
          nav ? "block" : "hidden"
        } z-50 bg-btn lg:text-black text-white py-4 lg:py-0 h-nav lg:h-0 justify-between lg:justify-between flex-col top-20 lg:top-0 lg:flex-row lg:static absolute items-center w-full lg:w-9/12 lg:flex`}
      >
        <ul className="flex lg:flex-row flex-col items-center justify-between lg:w-96 w-full lg:h-0 h-full py-6">
        <Link to="/"><li className=" hover:border-b-2 hover:border-Brown">Home</li></Link>
        <li className=" hover:border-b-2 hover:border-Brown">Shop</li>
        <li className=" hover:border-b-2 hover:border-Brown">About Us</li>
        <li className=" hover:border-b-2 hover:border-Brown">Blog</li>
        <li className=" hover:border-b-2 hover:border-Brown">Contact Us</li>
        </ul>
        <figure className="lg:flex hidden justify-between item-center h-52 lg:h-0 lg:w-44 lg:pt-0 pt-11 lg:pl-10 items-center flex-col lg:flex-row">
       <img src={Search} alt="search" className="w-4 h-4"/>
       <img src={Profile} alt="profile" className="w-4 h-4"/>
       <figure className="flex items-center">
       <Link to="/cart" className="flex"><img src={Cart} alt="cart" className="h-5 w-5"/><span className="mr-8 w-2 h-2">{cartValue.length}</span></Link>
       </figure>
        </figure>
      </div>
    </nav>
  );
};

export default Navbar;
