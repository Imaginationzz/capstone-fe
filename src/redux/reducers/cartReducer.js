import { ADD_ITEM_CART, REMOVE_ITEM_CART, RESET_CART } from "../constants/cartConstants";

const cartState = {
  cartItems: [],
};
export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      const item = action.payload;
      const index = state.cartItems.findIndex(
        (cartItem) => cartItem._id === item._id
      );
      if (index !== -1) {
        // we have in the cart
        const copyCart = [...state.cartItems];

        // if I have asmuch as you want I can increase how ever youwant : I will increasse only as much as I have in stock
        copyCart[index].Quantity += item.Quantity <= item.countInStock ? item.Quantity : item.countInStock
        return { ...state, cartItems: copyCart }
      }
      else {
        // You dont have in cart, If I have as much as you want, I will add as much as you want :  I will have as much as I have in the stock 
        return {
          ...state,
          cartItems:
            item.Quantity <= item.countInStock
              ? [
                ...state.cartItems,
                { ...item, Quantity: item.Quantity }
              ]
              : [
                ...state.cartItems,
                { ...item, Quantity: item.countInstock }
              ]
        };
      }
    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(val => val._id !== action.payload)
      }
    case RESET_CART:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state;
  }
};
