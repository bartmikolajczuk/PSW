import { ADD_TO_CART, REMOVE_FROM_CART } from "./../actions/cart";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { cartItem } = action;
      return [...state, cartItem];
    }
    case REMOVE_FROM_CART: {
      const { id } = action;
      return state.filter(({ id: currentId }) => currentId !== id);
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
