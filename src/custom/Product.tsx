import React from "react";
import Button from "./Botton";
import CartButton from "./Cartbtn";
import { cart } from "../atoms/atoms";
import { useAtom } from "jotai";

interface ProductType {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Product = ({ product }: { product: ProductType }) => {
  const [cartValue, setCartValue] = useAtom(cart);

  const addToCart = (data: ProductType) => {
    setCartValue([...cartValue, data]);
  };

  const removeCart = (id: number) => {
    const _cart = cartValue.filter((crt: ProductType) => {
      return crt.id !== id;
    });
    setCartValue(_cart);
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 w-64 h-72 py-10">
      <figure className="pb-5 w-32 flex justify-between items-center">
        <img src={product.image} alt="product" className="lg:h-32 lg:w-32 md:h-32 md:w-32 w-24 h-24" />
      </figure>
      <figcaption className="flex flex-col items-center">
        <h4 className="text-xs h-16 w-40 lg:w-64 font-light">{product.title}</h4>
        <p className="text-sm font-medium pb-2">${product.price}</p>
        {cartValue.filter((crt: ProductType) => crt.id === product.id).length === 0 ? (
          <section onClick={() => addToCart(product)}>
            <CartButton text="Add to Cart" />
          </section>
        ) : (
          <section onClick={() => removeCart(product.id)}>
            <CartButton text=" Remove from Cart" />
          </section>
        )}
      </figcaption>
    </section>
  );
};

export default Product;
