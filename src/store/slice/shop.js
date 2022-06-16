import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    category: [],
    product: [],
    error: null,
    page: 1,
    totalPages: 0,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});

export const { setCategory, setError, setProduct, setPage, setTotalPages } =
  shopSlice.actions;

export const shopReducer = shopSlice.reducer;
