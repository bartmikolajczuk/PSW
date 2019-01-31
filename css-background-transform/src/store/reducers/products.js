import { FETCH_PRODUCTS_SUCCESS } from "../actions/products";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      const { products } = action;
      return [...state, ...products];
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
