import CartActionTypes from "./actiontypes";

export const addProducttoCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCTS,
  payload,
});
