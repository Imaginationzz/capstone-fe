import { SAVE_SHIPPING_ADDRESS } from "../constants/shippingConstants";

const shippingState = {
    shippingAdress:{}
}

  export const shippingReducer=(state=shippingState,action)=>{
    switch(action.type){
        case SAVE_SHIPPING_ADDRESS:
            return {...state,
                shippingAdress: action.payload
            };

            
        
            default: return state
    }
}