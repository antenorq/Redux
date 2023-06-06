import { useState, useEffect } from "react";
import Header from "./components/header";
import Products from "./components/products";

//products
import products_json from "./data/products";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products_json);
  }, []);

  return (
    <div>
      <Header />
      <Products products={products} />
    </div>
  );
};

export default App;
