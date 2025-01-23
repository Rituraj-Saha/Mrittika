import {combineReducers} from 'redux';
import cartReducer from './slice/cartSlice';
import modalScreenTransitionSlice from './slice/ScreenSlice';
const rootReducer = combineReducers({
  cart: cartReducer,
  modalScreenTransitionSlice: modalScreenTransitionSlice,
});

export default rootReducer;
