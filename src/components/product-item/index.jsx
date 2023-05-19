import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { ADD_PRODUCT } from "../../redux/cart/slice";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(ADD_PRODUCT(product));
  };

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick}>
          Add to Cart
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
