// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

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
          Your Cart ({currentUser ? currentUser.name : null})
        </Styles.CartTitle>
        {products.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
        <h2 style={{ color: "#000" }}>TOTAL CART: ${productsTotalPrice}</h2>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
