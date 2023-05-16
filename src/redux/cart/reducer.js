import CartActionTypes from "./actiontypes";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCTS:
      return {
        ...initialState,
        products: [...initialState.products, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
