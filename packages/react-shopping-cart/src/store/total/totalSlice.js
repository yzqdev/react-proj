import { createSlice } from "@reduxjs/toolkit";

export const totalSlice = createSlice({
  name: "total",
  initialState: {
    data: {
      productQuantity: 0,
      installments: 0,
      totalPrice: 0,
      currencyId: "USD",
      currencyFormat: "$",
    },
  },
  reducers: {UPDATE_CART:(state,action) => {
    let cartProducts=action.payload.cartProducts
      let productQuantity = cartProducts.reduce((sum, p) => {
        sum += p.quantity;
        return sum;
      }, 0);

      let totalPrice = cartProducts.reduce((sum, p) => {
        sum += p.price * p.quantity;
        return sum;
      }, 0);

      let installments = cartProducts.reduce((greater, p) => {
        greater = p.installments > greater ? p.installments : greater;
        return greater;
      }, 0);

      let cartTotal = {
        productQuantity,
        installments,
        totalPrice,
        currencyId: "USD",
        currencyFormat: "$",
      };
      state.data=cartTotal
  }},
});
export default totalSlice.reducer
