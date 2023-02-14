import { useQuery } from "react-query";
import Product from "../custom/Product";
import Usefetch from "../customHook/usefetch";

interface ProductType {
  id: number;
  title: string;
  image: any;
  price: number;
}


const Store = () => {

  const {data, status} = Usefetch({url:"https://fakestoreapi.com/products/category/women's clothing"})
  console.log(data);

  return (
    <section className="text-center py-10 text-2xl font-bold">
      <h1>Top Picked For You</h1>
      <nav className="pt-12">
        <ul className="flex justify-between lg:w-nav w-96 px-10 lg:px-0 text-sm font-medium lg:pl-24 cursor-pointer">
          <li className=" hover:border-b-2 hover:border-Brown">Women</li>
          <li className=" hover:border-b-2 hover:border-Brown">Men</li>
          <li className=" hover:border-b-2 hover:border-Brown">Jewelries</li>
          <li className=" hover:border-b-2 hover:border-Brown">Gadgets</li>
        </ul>
      </nav>
      <section className="">
        {status === "error" && <p className="text-sm font-light text-center">Error in fetching data</p>}
        {status === "loading" && 
        <p className="text-sm font-light text-center">...</p>}
        {status === "success" && (
          <div className="grid lg:grid-cols-3 grid-cols-2 place-items-center gap-5 pt-10 lg:pt-16 ">
            {data &&
              data.map((product: ProductType) => (
                <section className="">
                <Product key={product.id} product={product} />
                </section>
              ))}
          </div>
        )}
      </section>
    </section>
  );
};

export default Store;
