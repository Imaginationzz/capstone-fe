import { SAVE_PAYMENT_METHOD, SET_CREDIT_CART } from "../constants/paymentConstants"

export const savePaymentMethod =(data)=>(dispatch)=>{
    dispatch({type:SAVE_PAYMENT_METHOD,payload:data})
}


export const setCreditCard =(data)=>(dispatch)=>{
    dispatch({type:SET_CREDIT_CART,payload:data})
}