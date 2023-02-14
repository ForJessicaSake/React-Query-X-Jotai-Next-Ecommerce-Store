import { useAtom } from "jotai";
import { cart } from "../atoms/atoms";
import Button from "../custom/Botton";

interface ProductType {
  id: number;
  title: string;
  image: string;
  price: number;
}

function Cart() {
  const [cartValue, setCartValue] = useAtom(cart);

  const removeCart = (id: number) => {
    const _cart = cartValue.filter((crt: ProductType) => {
      return crt.id !== id;
    });
    setCartValue(_cart);
  };

  return (
    <main className="px-16  py-20">
      {cartValue &&
        cartValue.map((cartItems: any) => (
          <section
            key={cartItems.id}
            className="flex justify-between w-full items-center border-b-2"
          >
            <figure className="w-10/12">
              <img
                src={cartItems.image}
                alt="clothes"
                className="w-24 h-24 mb-6 mt-10"
              />
              <figcaption className="cart-content">
                <h4 className="text-sm h-14 w-40 lg:w-72 font-light">
                  {cartItems.title}
                </h4>
                <p className="text-xs font-medium pb-4">${cartItems.price}</p>
              </figcaption>
            </figure>
            <section className="">
              <h3
                onClick={() => {
                  removeCart(cartItems.id);
                }}
                style={{ cursor: "pointer" }}
              >
                X
              </h3>
            </section>
          </section>
        ))}
      <section className="pt-16">
        <p className="text-sm pt-4">Shopping Fee: $10</p>
        <h3 className="texr-base py-4">
          Total: $
          {cartValue.reduce((total: number, cart: any) => {
            return cart.price + total;
          }, +10)}
        </h3>
        <Button text="checkout" />
      </section>
    </main>
  );
}

export default Cart;
