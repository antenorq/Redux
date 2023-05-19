import CartActionTypes from "./OLD-WITHOUT-TOOLKIT-actiontypes";

const initialState = {
  products: [],
  productsTotalPrice: 0,
  productsTotalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      //check if this product is already into the cart
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      //if already have this product in the car add quantity +1
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
          productsTotalCount: state.productsTotalCount + 1,
          productsTotalPrice: state.productsTotalPrice + action.payload.price,
        };
      } else {
        //if does not have this product into the car add it
        return {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }],
          productsTotalCount: state.productsTotalCount + 1,
          productsTotalPrice: state.productsTotalPrice + action.payload.price,
        };
      }

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
        productsTotalCount: state.productsTotalCount - action.payload.quantity,
        productsTotalPrice:
          state.productsTotalPrice -
          action.payload.quantity * action.payload.price,
      };

    case CartActionTypes.INCREASE_QUANTITY_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        productsTotalCount: state.productsTotalCount + 1,
        productsTotalPrice: state.productsTotalPrice + action.payload.price,
      };

    case CartActionTypes.DECREASE_QUANTITY_PRODUCT:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
        productsTotalCount: state.productsTotalCount - 1,
        productsTotalPrice: state.productsTotalPrice - action.payload.price,
      };

    default:
      return state;
  }
};

export default cartReducer;
