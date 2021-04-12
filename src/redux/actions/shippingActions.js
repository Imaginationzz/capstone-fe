import { SAVE_SHIPPING_ADDRESS } from "../constants/shippingConstants"

export const saveShippingAddress =(data)=>(dispatch)=>{
    dispatch({type:SAVE_SHIPPING_ADDRESS,payload:data})
}