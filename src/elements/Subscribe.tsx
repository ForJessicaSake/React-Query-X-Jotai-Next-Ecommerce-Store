import Button from "../custom/Botton";
import advert from "../assets/Images/subscribe.svg"
import advertTwo from "../assets/Images/subscribeTwo.svg"


const Subscribe: React.FC = () => {
  return (
    <section className="flex justify-between lg:px-12 px-6 bg-Header h-96 items-center">
      <figure className="justify-between w-7/12 lg:flex hidden">
      <img src={advertTwo} alt="cushion" className="w-80" />
        <img src={advert} alt="cushion" className="w-80"/>
      </figure>
      <figcaption className="flex flex-col w-full lg:w-96 text-center items-center">
        <h1 className="text-2xl py-6 font-bold">Subscribe</h1>
        <p className="text-sm font-light">Here's your chance to not miss out on our latest products</p>
        <form className="flex flex-col items-center justify-center">
        <input placeholder="Your Mail Address" className="my-6 h-10 w-96 p-4 rounded-md border-2 border-slate-200 "/>
        <Button text="Subscribe" />
        </form>
      </figcaption>
    </section>
  );
};

export default Subscribe;
