import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./slice/shop";

const store = configureStore({
  reducer: { shop: shopReducer}
});

export default store;
