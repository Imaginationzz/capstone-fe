
import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_CREATE_RESET } from "../constants/orderConstants"


const orderState = {
    order: {

    },
    loding: false,
    error: false


};

export const orderReducer = (state = orderState, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true };

        case ORDER_CREATE_SUCCESS:
            return { loading: false, error: false, order: action.payload }
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case ORDER_CREATE_RESET:
            return { loading: false, error: false, order: {} }

        default: return state
    }
}