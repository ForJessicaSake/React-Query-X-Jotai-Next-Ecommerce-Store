interface ProductType {
    id: number;
    name: string;
    image: string;
    // other properties
  }
  
  const Product = ({product}: {product: ProductType}) => {
    return(
      <section>
        <figure>
        </figure>
        <figcaption>
          <h3>{product.name}</h3>
        </figcaption>
      </section>
    );
  };
  
  export default Product