import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://safe-beach-33580.herokuapp.com/clothes"
      );
      const products = response.data;
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        products
      });
    } catch (e) {
      console.log(e);
    }
  };
};
