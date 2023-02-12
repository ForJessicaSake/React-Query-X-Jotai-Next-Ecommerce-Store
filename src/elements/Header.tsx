import React from "react";
import Button from "../custom/Botton";
import header from "../assets/header.svg"

const Header:React.FC=()=> {
  return (
    <header className="flex flex-col lg:flex-row justify-between pb-40 lg:pl-16 px-6 lg:px-0 pt-10 bg-Header">
    <figcaption className="">
    <h1 className="text-2xl font-bold w-96 lg:pt-10 pt-0">Awesome Design Best Furniture For Your Home</h1>
      <p className="text-sm font-light py-4">Browse, Choose & Order, Very Simple</p>
      <Button text="Shop Now"/>
      <section className="flex justify-between lg:pt-28 pt-16">
        <div className="flex flex-col w-28 pb-4">
            <h1 className="text-2xl font-semibold">1000+</h1>
            <p className="text-sm font-light">Furnitures & Equipments</p>
        </div>
        <div className="flex flex-col w-28 pb-4">
        <h1 className="text-2xl font-semibold">130+</h1>
            <p className="text-sm font-light">Fresh Interior Design</p>
        </div>
        <div className="flex flex-col w-28 pb-4">
        <h1 className="text-2xl font-semibold">640+</h1>
            <p className="text-sm font-light">Happy Clients</p>
        </div>
      </section>
    </figcaption>
    <figure>
        <img src ={header} alt="living room furniture" className="lg:w-9/12 lg:h-9/12 w-full lg:pt-0 pt-4"/>
    </figure>
    </header>
  );
}

export default Header;
