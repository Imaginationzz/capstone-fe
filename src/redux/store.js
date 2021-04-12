import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";

import { productReducer } from "./reducers/productReducer";
import { productDetailReducer } from "./reducers/productDetailReducer";
import { cartReducer } from "./reducers/cartReducer";

import storage from "redux-persist/lib/storage";
import { registerReducer, signinReducer } from "./reducers/userReducer";
import { shippingReducer } from "./reducers/shippingReducer";
import { paymentReducer } from "./reducers/paymentReducer";
import { orderReducer } from "./reducers/orderReducer";
import { addProductReducer } from "./reducers/addProductReducer";

const persistConfig = {
  key: "root",
  storage,
};

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mainReducer = combineReducers({
  productState: productReducer,
  productDetailState: productDetailReducer,
  cartState: cartReducer,
  userState: signinReducer,
  userRegister: registerReducer,
  shippingState: shippingReducer,
  paymentState: paymentReducer,
  orderState: orderReducer,
  addProductState: addProductReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    composedEnhancer(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
