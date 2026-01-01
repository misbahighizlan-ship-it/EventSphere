import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    }
  }
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
