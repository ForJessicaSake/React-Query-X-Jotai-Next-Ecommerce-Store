import React from "react";
import Usefetch from "../customHook/usefetch";
import Product from "../custom/Product";

interface ProductType {
  id: number;
  title: string;
  image: string;
  price: number;
}

function Women() {
  const { data, status } = Usefetch({
    url: "https://fakestoreapi.com/products/category/women's clothing",
  });

  return (
    <section>
      {status === "error" && (
        <p className="text-sm font-light text-center">Error in fetching data</p>
      )}
      {status === "loading" && (
        <p className="text-sm font-light text-center">...</p>
      )}
      {status === "success" && (
        <div className="grid lg:grid-cols-3 grid-cols-2 place-items-center gap-5 pt-10 lg:pt-16 ">
          {data &&
            data.map((product: ProductType) => (
              <section key={product.id}>
                <Product key={product.id} product={product} />
              </section>
            ))}
        </div>
      )}
    </section>
  );
}

export default Women;
