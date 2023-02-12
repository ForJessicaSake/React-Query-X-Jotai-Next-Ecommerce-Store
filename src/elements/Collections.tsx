import { useAtom } from "jotai";
import { collection } from "../atoms/atoms";

const Collections = () => {

    const [collectionState, setCollectionState] = useAtom(collection)

    const handleHover=()=>{
        setCollectionState(!collectionState)
    }
  return (
    <section className="bg-Collections uppercase flex flex-col px-7 pb-4 mt-0 h-nav justify-between text-4xl font-extralight text-slate-50">
      <div className="flex justify-between lg:w-collection py-8">
        <h1 className="animate-bounce">
          Women <span className="text-sm">300</span>
        </h1>
        <h1>
          Men <span className="text-sm">200</span>
        </h1>
      </div>
      <div className="flex justify-between lg:ml-96 lg:w-collection py-7">
        <h1>
          Boys <span className="text-sm">100</span>
        </h1>
        <h1 className="animate-bounce">
          Girls <span className="text-sm">80</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:w-collectionB py-7">
        <h1>
          Furniture <span className="text-sm">50</span>
        </h1>
        <h1 className="lg:ml-0 ml-28 lg:mt-0 mt-12">
          Beauty <span className="text-sm">150</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:ml-96 lg:w-collection py-7">
        <h1 className="animate-bounce">
          Shoes <span className="text-sm">250</span>
        </h1>
        <h1 className="lg:ml-0 ml-20 lg:mt-0 mt-10">
          Accessories <span className="text-sm">120</span>
        </h1>
      </div>
    </section>
  );
};

export default Collections;
