import { useQuery } from "react-query";
import Product from "../custom/Product";

interface ProductType {
  id: number;
  name: string;
  image: any;
  // other properties
}

const Store = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0026960d85mshcb8f09904be444ap18147fjsn1312686e898a',
      'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
    }
  };
  
  const fetchProduct = async () => {
    const res = await fetch('https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens', options)

    return res.json();
  };

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '0026960d85mshcb8f09904be444ap18147fjsn1312686e898a',
  //     'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
  //   }
  // };

  // const fetchProduct=()=>{
  //   fetch('https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  // }

  const { data, status } = useQuery("products", fetchProduct);
  console.log(data);

  return (
    <section className="text-center py-20 text-2xl font-bold">
      <h1>Top Picked For You</h1>
      <section>
        {status === "error" && <p>Error in fetching data</p>}
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && (
          <div>
            {data &&
              data.results &&
              data.results.map((product: ProductType) => (
                <Product product={product}/>
              ))}
          </div>
        )}
      </section>
    </section>
  );
};

export default Store;
