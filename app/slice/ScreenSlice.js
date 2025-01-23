import {createSlice} from '@reduxjs/toolkit';
export const SCREEN_NAME = {
  CART: 'cart',
  ORDER_CHECKOUT: 'order_checkout',
  PAYMENT: 'payment',
};
const initialState = {
  screenName: SCREEN_NAME.CART,
};
const modalScreenTransitionSlice = createSlice({
  name: 'modalScreenTransitionSlice',
  initialState,
  reducers: {
    navigateToScreen: (state, action) => {
      state.screenName = action.payload;
    },
  },
});
export const {navigateToScreen} = modalScreenTransitionSlice.actions;
export default modalScreenTransitionSlice.reducer;
