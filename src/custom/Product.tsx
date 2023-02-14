import Button from "./Botton";

interface ProductType {
    id: number;
    title: string;
    image: any;
    price:any;
  }
  
  const Product = ({product}: {product: ProductType}) => {
    return(
      <section className="flex flex-col items-center justify-center px-4 w-64 h-72 py-10">
        <figure className="pb-5 w-32 flex justify-between items-center">
          <img src={product.image} alt="product" className="h-32 w-32"/>
        </figure>
        <figcaption className="flex flex-col items-center">
          <h4 className="text-xs h-14 w-40 lg:w-64 font-light">{product.title}</h4>
          <p className="text-sm font-medium pb-2">${product.price}</p>
          <Button text="Add to Cart"/>
        </figcaption>
      </section>
    );
  };
  
  export default Product