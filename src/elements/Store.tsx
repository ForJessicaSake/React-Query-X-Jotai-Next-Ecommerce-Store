import { useAtom } from "jotai";
import { store } from "../atoms/atoms";
import Men from "./Men";
import Women from "./Women";
import Jewelry from "./Jewelries";


const Store = () => {
  const [storeContent, setStoreContent] = useAtom(store);

  return (
    <section className="text-center py-10 text-2xl font-bold">
      <h1>Top Picked For You</h1>
      <nav className="pt-12">
        <ul className="flex justify-between lg:w-nav w-96 px-10 lg:px-0 text-sm font-medium lg:pl-24 cursor-pointer">
          <li
            className=" hover:border-b-2 hover:border-Brown"
            onClick={() => setStoreContent("women")}
          >
            Women
          </li>
          <li
            className=" hover:border-b-2 hover:border-Brown"
            onClick={() => setStoreContent("men")}
          >
            Men
          </li>
          <li className=" hover:border-b-2 hover:border-Brown" onClick={() => setStoreContent("jewelries")}>Jewelries</li>
        </ul>
      </nav>

      <section>
        <section>
          {storeContent === "women" ? (
            <Women />
          ) : storeContent === "men" ? (
            <Men />
          ) : (
            <Jewelry />
          )}
        </section>
      </section>
    </section>
  );
};

export default Store;
