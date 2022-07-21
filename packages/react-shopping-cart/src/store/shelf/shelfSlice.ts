import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "@/store/util";

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  },
};

const FETCH_PRODUCTS = createAsyncThunk(
  "shelf/FETCH_PRODUCTS",
  (filters, sortBy) => {
    axios
      .get(productsAPI)
      .then((res) => {
        let { products } = res.data;

        if (!!filters && filters.length > 0) {
          products = products.filter((p) =>
            filters.find((f) => p.availableSizes.find((size) => size === f))
          );
        }

        if (!!sortBy) {
          products = products.sort(compare[sortBy]);
        }

        return {
          products,
        };
      })
      .catch((err) => {
        console.log("Could not fetch products. Try again later.");
      });
  }
);

export const totalSlice = createSlice({
  name: "shelf",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    [FETCH_PRODUCTS.fulfilled]: (state, action) => {},
  },
});
export default totalSlice.reducer
