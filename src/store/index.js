import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from "./cartSlice";

export default configureStore ({
  reducer: {
    cart: itemsReducer,
  },
})