import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expense/slice";
import categorySlice from "./category/slice"

export const store = configureStore({
  reducer: {
    expenseList: expenseSlice,
    categoryList: categorySlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
