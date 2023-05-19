import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

// import {
//   removeProductFromCart,
//   increaseQuantityProduct,
//   decreaseQuantityProduct,
// } from "../../redux/cart/OLD-WITHOUT-TOOLKIT-actions";

import {
  REMOVE_PRODUCT,
  INCREASE_QUANTITY_PRODUCT,
  DECREASE_QUANTITY_PRODUCT,
} from "../../redux/cart/slice";

// Styles
import * as Styles from "./styles";

const CartItem = ({ product }) => {
  const dispath = useDispatch();

  const handleRemoveClick = () => {
    dispath(REMOVE_PRODUCT(product));
  };

  const handleIncreaseClick = () => {
    dispath(INCREASE_QUANTITY_PRODUCT(product));
  };

  const handleDecreaseClick = () => {
    dispath(DECREASE_QUANTITY_PRODUCT(product));
  };

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
