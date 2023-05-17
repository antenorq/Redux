import CartActionTypes from "./actiontypes";

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
        };
      } else {
        //if does not have this product into the car add it
        return {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }],
          productsTotalCount: state.productsTotalCount + 1,
        };
      }

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
        productsTotalCount: state.productsTotalCount - action.payload.quantity,
      };

    case CartActionTypes.INCREASE_QUANTITY_PRODUCT:
      return {
        ...state,
        // products: state.products.map((product) =>
        //   product.id === action.payload.id
        //     ? { ...product, quantity: product.quantity + 1 }
        //     : product
        // ),
        // productsTotalCount: state.productsTotalCount + 1,

        // const index = products.findIndex(
        //   (item) => item.id === productToUpdate.id
        // );
        // const list_products = [...products];

        // list_products[index] = productToUpdate;

        products: () => {
          const index = state.products.findIndex(
            (product) => product.id === action.payload.id
          );
          const product_increased = state.products[index].quantity + 1;
          return [...state.products, product_increased];
        },
        productsTotalCount: state.productsTotalCount - 1,
      };

    default:
      return state;
  }
};

export default cartReducer;
