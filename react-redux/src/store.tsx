import { configureStore } from "../node_modules/@reduxjs/toolkit/dist/index";
import { rootReducer } from "./redux/reducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
