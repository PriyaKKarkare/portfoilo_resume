import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice.js";
import contactReducer from "./slices/contactSlice.js";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    contact: contactReducer,
  },
});
