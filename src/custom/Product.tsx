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
          <img src={product.image} alt="product"/>
        </figure>
        <figcaption>
          <h3>{product.name}</h3>
        </figcaption>
      </section>
    );
  };
  
  export default Product