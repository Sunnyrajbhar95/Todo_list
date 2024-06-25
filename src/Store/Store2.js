import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./Slice/Slice";

const store = configureStore({
  reducer: {
     counter:counterSlice
  },
});

export default store;