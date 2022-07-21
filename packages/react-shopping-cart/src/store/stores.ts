import { configureStore } from "@reduxjs/toolkit";
import totalSlice from "@/store/total/totalSlice";
import shelfSlice from "@/store/shelf/shelfSlice";
import filtersSlice from "@/store/filters/filtersSlice";
import sortSlice from "@/store/sort/sortSlice";
import cartSlice from "@/store/cart/cartSlice";

export default configureStore({
  reducer: {
    total: totalSlice,
    shelf: shelfSlice,
    filters: filtersSlice,
    sort: sortSlice,
    cart: cartSlice,
  },
});
