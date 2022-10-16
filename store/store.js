import { configureStore } from "@reduxjs/toolkit";
import NextSliceHello from "./NextSliceHello";

export default configureStore({
  reducer: {
    NextSliceHello,
  },
});
