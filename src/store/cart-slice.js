import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{items:[],totalQuantity:0,totalAmount:0},
    reducers: {
         addToCart: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            state.totalQuantity+=action.payload.quantity;
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
       
        state.items.push({ ...action.payload, quantity:action.payload.quantity });
      }
    },
    
    }

})
export const cartActions = cartSlice.actions;
export default cartSlice;