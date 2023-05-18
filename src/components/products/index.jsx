import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {
  const index = products.findIndex(
    (product) => product.id === "6228ff71b7e6cb904bbe0175"
  );
  console.log(index);

  return (
    <Styles.Container>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </Styles.Container>
  );
};

export default Products;
