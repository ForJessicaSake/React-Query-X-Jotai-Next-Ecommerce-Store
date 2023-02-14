import Logo from "../assets/Images/Logo.svg"
import Facebook from "../assets/Icons/Facebook.svg"
import Twitter from "../assets/Icons/Twitter.svg"
import Instagram from "../assets/Icons/Instagram.svg"
import LinkedIn from "../assets/Icons/Linkedin.svg"
import Contact from "../assets/Icons/Contact.svg"
import Email from "../assets/Icons/Email.svg"
import Address from "../assets/Icons/Address.svg"


const Footer = () => {
  return (
    <footer className=" lg:mt-0 mt-10 flex py-8 lg:flex-row flex-col justify-between lg:px-10 px-6 bg-btn text-Header h-full lg:items-center">
      <nav className="">
        <figure className="lg:w-20 flex justify-between lg:items-center">
          <img
            src={Logo}
            alt="Logo"
            className="lg:w-5 lg:h-5 h-7 w-7 animate-bounce lg:ml-0 lg:block hidden"
          />
          <h1 className="text-2xl font-medium cursor-pointer lg:block pb-5">
            Next
          </h1>
        </figure>
        <p className="w-72 pb-6">
          A British multinational office, home and outdoor items
          retailer.
        </p>
        <figure className="flex justify-between w-32">
            <img src={Facebook} alt="Facebook" className="h-5 w-5"/>
            <img src={Twitter} alt="Twitter"  className="h-5 w-5"/>
            <img src={Instagram} alt="Instagram"  className="h-5 w-5"/>
            <img src={LinkedIn} alt="LinkedIn"  className="h-5 w-5"/>
        </figure>
      </nav>
      <ul className="flex flex-col h-44 lg:mt-0 mt-8 lg:items-center justify-between">
        <li>Shop</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <hgroup className="flex flex-col lg:mt-0 mt-8 h-40  w-52 items-start justify-between">
        <h3 className="lg:block hidden">Contact</h3>
        <h6 className="flex items-center w-32 justify-between"><span><img src={Address} alt="" className="h-4 w-4"/></span>Binori Square</h6>
        <h6 className="flex items-center  w-52 justify-between"> <span><img src={Email} alt="" className="h-4 w-4"/></span>Iskon info@gmail.com</h6>
        <h6 className="flex items-center lg:w-36 w-36 justify-between"><span><img src={Contact} alt="" className="h-4 w-4"/></span>+91 9876543210</h6>
      </hgroup>
      <hgroup className="flex flex-col lg:mt-0 mt-8 h-20 lg:items-center justify-between">
        <h2>Download App</h2>
        <h4>2022. All rights reserved</h4>
      </hgroup>
    </footer>
  );
};
export default Footer;
