import {useSelector} from 'react-redux';

export const useCartUtilGetItemById = id => {
  const cartItems = useSelector(state => state.cart.items);
  const requiredItem = cartItems.find(item => item.id === id);
  return requiredItem;
};
