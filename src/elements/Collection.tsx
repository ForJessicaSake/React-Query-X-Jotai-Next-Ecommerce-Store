import Chair from "../assets/Images/collection.svg";
import Sofa from "../assets/Images/collection2.svg"

const Collection = () => {
  return (
    <section className="flex lg:flex-row flex-col justify-between px-12 pt-12 py-8">
      <section className="flex">
        <figcaption className="pl-4 lg:h-64 h-52 w-48 bg-Collection flex flex-col justify-center ">
          <h4 className="text-lg font-bold pb-6">20% off</h4>
          <h1 className="text-xl font-bold">Chair Collection</h1>
        </figcaption>
        <figure>
          <img src={Chair} alt="" className="lg:h-64 h-52 w-80 "/>
        </figure>
      </section>
      <section className="flex lg:mt-0 mt-10">
      <figcaption className="lg:h-64 h-56 w-48 pl-6 bg-Collection flex flex-col justify-center ">
      <h4 className="text-lg font-bold pb-6">30% off</h4>
      <h1 className="text-xl font-bold">Sofa Collection</h1>
        </figcaption>
        <figure>
        <img src={Sofa} alt="" className="lg:h-64 h-56 w-80"/>
        </figure>
      </section>
    </section>
  );
};

export default Collection;
