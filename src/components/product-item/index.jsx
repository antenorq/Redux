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
    <Card>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Button variant="primary" onClick={handleProductClick}>
          <BsCartPlus /> Add do Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
