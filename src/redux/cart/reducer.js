import CartActionTypes from "./actiontypes";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCTS:
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
        };
      }

      //if does not have this product into the car add it
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    default:
      return state;
  }
};

export default cartReducer;
