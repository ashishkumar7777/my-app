import { configureStore } from "@reduxjs/toolkit";
import  showData  from "../feature/showSlice";

export const store = configureStore({
  reducer: {
    show : showData,
  },
});
