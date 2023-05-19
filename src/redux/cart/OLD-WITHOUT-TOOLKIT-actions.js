import CartActionTypes from "./OLD-WITHOUT-TOOLKIT-actiontypes";

export const addProducttoCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseQuantityProduct = (payload) => ({
  type: CartActionTypes.INCREASE_QUANTITY_PRODUCT,
  payload,
});

export const decreaseQuantityProduct = (payload) => ({
  type: CartActionTypes.DECREASE_QUANTITY_PRODUCT,
  payload,
});
