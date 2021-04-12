import {
  SAVE_PAYMENT_METHOD,
  SET_CREDIT_CART,
} from "../constants/paymentConstants";

const paymentState = {
  paymentMethod: "PayPal",
  creditCard: {
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  },
};

export const paymentReducer = (state = paymentState, action) => {
  switch (action.type) {
    case SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case SET_CREDIT_CART:
      return {
        ...state,
        creditCard: { ...state.creditCard, ...action.payload },
      };

    default:
      return state;
  }
};
