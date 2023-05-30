import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { ADD_PRODUCT, OPEN_CART } from "../../redux/cart/slice";

//bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(ADD_PRODUCT(product));
    dispatch(OPEN_CART(true));
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body
        style={{
          marginTop: "-100px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
        }}
      >
        <Card.Title>
          {product.name} - ${product.price}
        </Card.Title>
        <Button variant="primary" onClick={handleProductClick}>
          <BsCartPlus /> Add do Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
