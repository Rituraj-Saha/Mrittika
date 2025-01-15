import {combineReducers} from 'redux';
import cartReducer from './slice/cartSlice';
const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
