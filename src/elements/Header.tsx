import headerImage from "../assets/headerimg.png";
const Header = () => {
  return (
    <header className="flex flex-col items-center pt-0 mt-0 relative">
      <figcaption className="w-full flex justify-center lg:-mt-20 items-center">
        <h1 className="z-30 lg:text-header md:text-headermd text-headersm font-extralight">
          NEXT
        </h1>
      </figcaption>
      <h1 className="text-3xl relative right-96 bottom-24 z-20 font-extralight lg:block hidden">FASHION STORE</h1>
      <figcaption className="relative z-20  w-96 lg:text-sm md:text-sm text-xs text-white">
        <p className="absolute top-14 md:top-28 lg:top-48 left-20 lg:w-96 md:w-96 w-72 font-light">
          NEXT is a British multinational clothing, footwear and home products
          retailer, which has its headquaters in Enderby, England. It has around
          700 stores, of which circa 500 are in the United Kingdom, and circa
          across Europe, Asia and Middle East.</p>
        <p className="absolute lg:top-96 md:top-80 top-52 md:w-96 w-80 lg:w-96 lg:left-72 md:left-40 left-10 font-light">
          It is a specialty retailer that merchandises and sells clothing,
          footwear, accessories, beauty and homeware products through self owned
          and franchised stores. It markets and sells these products under NEXT,
          Label and Lispy brand names. The company merchandises and sells these
          products through various e-commerce portals. Our company also operates
          warehouses and distribution huns across Europe, the Middle East, Asia
          and Africa.
        </p>
      </figcaption>
      <figure className="flex justify-center w-screen lg:px-10 relative lg:bottom-64 md:bottom-44 bottom-20">
        <img
          src={headerImage}
          alt="fashion model"
          className="lg:w-full md:w-full w-full rounded-full"
        />
      </figure>
   
    </header>
  );
};

export default Header;
