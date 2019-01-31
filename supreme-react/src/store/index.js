import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import productsReducer from "./reducers/products";
import cartReducer from "./reducers/cart";

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  middlewares.push(thunk);

  const store = createStore(
    combineReducers({
      products: productsReducer,
      cart: cartReducer,
      //shippingForm: shippingFormReducer,
      //billingForm: billingFormReducer
    }),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;
