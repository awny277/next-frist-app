import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const NextSliceHello = createSlice({
  name: "offer",
  initialState: {
    isLoading: false,
    error: null,
    NextSliceHello: "HI Next",
  },
  reducers: {
    PrintHello: (state, action) => {
      state.NextSliceHello = "Update Next";
    },
  },
});
export const { PrintHello } = NextSliceHello.actions;

export default NextSliceHello.reducer;
