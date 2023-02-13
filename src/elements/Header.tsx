import React from "react";
import Button from "../custom/Botton";
import header from "../assets/Images/drop.png"

const Header:React.FC=()=> {
  return (
    <header className="flex flex-col items-center lg:flex-row justify-between w-full lg:pb-28 pb-6 px-6 lg:px-16 pt-0">
    <figcaption className="">
    <h1 className="lg:text-3xl w-72 lg:leading-tight leading-8 text-2xl lg:pt-20 lg:w-header pt-10 font-bold">Buy, sell, wear, trend. You can have it all in your wardrope</h1>
      <p className="text-sm font-light py-5">Browse, Choose & Order, Very Simple</p>
      <Button text="Shop Now"/>
      <section className="flex justify-between lg:pt-32 pt-20 cursor-pointer ">
        <div className="flex flex-col w-28 pb-4">
            <h1 className="text-2xl font-semibold">1000+</h1>
            <p className="text-sm font-light">Clothing & Accessories</p>
        </div>
        <div className="flex flex-col w-28 pb-4">
        <h1 className="text-2xl font-semibold">130+</h1>
            <p className="text-sm font-light">Fresh Clothing Design</p>
        </div>
        <div className="flex flex-col w-28 pb-4">
        <h1 className="text-2xl font-semibold">640+</h1>
            <p className="text-sm font-light">Happy Clients</p>
        </div>
      </section>
    </figcaption>
    <figure>
        <img src ={header} alt="living room furniture" className="lg:full w-96  lg:pt-0 pt-0"/>
    </figure>
    </header>
  );
}

export default Header;
