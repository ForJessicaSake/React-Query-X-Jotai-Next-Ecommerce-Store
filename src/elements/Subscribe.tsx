import Button from "../custom/Botton";
import advert from "../assets/Images/basic.png"


const Subscribe: React.FC = () => {
  return (
    <section className="lg:flex-row py-10 flex flex-col justify-around lg:px-12 px-6 h-full items-center">
      <figure className="">
        <img src={advert} alt="models" className="lg:w-64 w-64"/>
      </figure>
      <figcaption className="flex flex-col lg:w-96 text-center items-center">
        <h1 className="text-2xl py-4 font-bold">Subscribe</h1>
        <p className="text-sm font-light">Here's your chance to not miss out on our latest products</p>
        <form className="flex flex-col items-center justify-center">
        <input placeholder="Your Mail Address" className="my-6 h-10 lg:w-96 w-80 p-4 rounded-md border-2 border-slate-200 "/>
        <Button text="Subscribe" />
        </form>
      </figcaption>
    </section>
  );
};

export default Subscribe;
