import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsTotalPrice: 0,
  productsTotalCount: 0,
  cartIsVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    OPEN_CART: (state, action) => {
      state.cartIsVisible = action.payload;
    },

    ADD_PRODUCT: (state, action) => {
      //check if this product is already into the cart
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      //if already have this product in the car add quantity +1
      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        state.productsTotalCount = state.productsTotalCount + 1;
        state.productsTotalPrice =
          state.productsTotalPrice + action.payload.price;
      } else {
        //if does not have this product into the car add it

        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];
        state.productsTotalCount = state.productsTotalCount + 1;
        state.productsTotalPrice =
          state.productsTotalPrice + action.payload.price;
      }
    },
    REMOVE_PRODUCT: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.productsTotalCount =
        state.productsTotalCount - action.payload.quantity;
      state.productsTotalPrice =
        state.productsTotalPrice -
        action.payload.quantity * action.payload.price;
    },
    INCREASE_QUANTITY_PRODUCT: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      state.productsTotalCount = state.productsTotalCount + 1;
      state.productsTotalPrice =
        state.productsTotalPrice + action.payload.price;
    },
    DECREASE_QUANTITY_PRODUCT: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
      state.productsTotalCount = state.productsTotalCount - 1;
      state.productsTotalPrice =
        state.productsTotalPrice - action.payload.price;
    },
  },
});

export const {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_QUANTITY_PRODUCT,
  DECREASE_QUANTITY_PRODUCT,
  OPEN_CART,
} = cartSlice.actions;

export default cartSlice.reducer;
