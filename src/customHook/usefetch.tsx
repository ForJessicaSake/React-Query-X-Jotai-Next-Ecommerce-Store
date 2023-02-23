import { useQuery } from "react-query";
type Url = {
    url:any;
}
function Usefetch(url:Url) {
    const fetchProduct = async () => {
        const res = await fetch(url.url);
        return res.json();
      };
      const { data, status } = useQuery("products", fetchProduct);

  return  {data, status}
}

export default Usefetch