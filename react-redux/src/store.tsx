import { configureStore } from "@reduxjs/toolkit";
import mainComponentReducer from "./main/slice";
import detailsComponentReducer from "./details/slice";

export const store = configureStore({
  reducer: {
    mainComponent: mainComponentReducer,
    detailsComponent: detailsComponentReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
