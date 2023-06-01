// Styles
import { useSelector, useDispatch } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item";

//Bootstrap
import Button from "react-bootstrap/Button";
import { BsCartPlus } from "react-icons/bs";

import { OPEN_CART } from "../../redux/cart/slice";

const Cart = ({ handleShow, isVisible }) => {
  const dispatch = useDispatch();
  const handleEscapeAreaClick = () => {
    dispatch(OPEN_CART(false));
  };

  const handleCheckout = () => {
    handleShow();
    dispatch(OPEN_CART(false));
  };

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  const { productsTotalPrice } = useSelector(
    (rootReducer) => rootReducer.cartReducer
  );

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>
          Your Cart {currentUser ? "- " + currentUser.name : null}
        </Styles.CartTitle>
        {products.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
        <h2 style={{ color: "#000" }}>TOTAL CART: ${productsTotalPrice}</h2>
        <Button variant="primary" onClick={handleCheckout}>
          <BsCartPlus /> Proceed To Checkout
        </Button>

        <div className={"mt-3"}>
          This is a Test React App using Redux-Toolkit.
          <br />
          The checkout button will not work as checkout.
        </div>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
