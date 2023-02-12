import { useAtom } from "jotai";
import { femalecollection} from "../atoms/atoms";
import femaleModel from "../assets/model.png";
import maleModel from "../assets/malemodel.png"


const Collections = () => {

    const [femaleCollection, setFemaleCollection] = useAtom(femalecollection)


    const handleHoverWomen=()=>{
        setFemaleCollection(!femaleCollection)
    }

  return (
    <section className="bg-Collections uppercase flex flex-col px-7 pb-4 mt-0 h-nav justify-between text-4xl font-extralight text-slate-50">
      <div className="flex justify-between lg:w-collection py-8">
        <figcaption className="">
        <h1 className="animate-bounce hover:border-b-2 border-Blue" onMouseOver={handleHoverWomen}>Women <span className="text-sm">300</span>
        </h1>
        {femaleCollection && <img src ={femaleModel} alt="model" className=" z-30 left-52 absolute h-96 w-64"/> }
        </figcaption>

        <figcaption className="">
        <h1 className="hover:border-b-2 border-Blue">
          Men <span className="text-sm">200</span>
        </h1>
        </figcaption>
      </div>
      <div className="flex justify-between lg:ml-96 lg:w-collection py-7">
        <h1 className="hover:border-b-2 border-Blue">
          Boys <span className="text-sm">100</span>
        </h1>
        <h1 className="animate-bounce hover:border-b-2 border-Blue">
          Girls <span className="text-sm">80</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:w-collectionB py-7">
      <h1 className="hover:border-b-2 border-Blue">
          Furniture <span className="text-sm">50</span>
        </h1>
        <h1 className="lg:ml-0 ml-28 lg:mt-0 mt-12 hover:border-b-2 border-Blue">
          Beauty <span className="text-sm">150</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:ml-96 lg:w-collection py-7">
        <h1 className="animate-bounce hover:border-b-2 border-Blue">
          Shoes <span className="text-sm">250</span>
        </h1>
        <h1 className="lg:ml-0 ml-14 lg:mt-0 mt-10 hover:border-b-2 border-Blue">
          Accessories <span className="text-sm">120</span>
        </h1>
      </div>
    </section>
  );
};

export default Collections;
