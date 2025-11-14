import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorSelection: {
    name: "Brown",
    code: "bg-[#4F4631]",
  },
  sizeSelection: "Large",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setColorSelection: (state, action) => {
      state.colorSelection = action.payload;
    },
    setSizeSelection: (state, action) => {
      state.sizeSelection = action.payload;
    },
  },
});

export const { setColorSelection, setSizeSelection } = productsSlice.actions;

export default productsSlice.reducer;

