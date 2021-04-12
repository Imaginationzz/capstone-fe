import axios from "axios"
import {ADD_ITEM_CART,REMOVE_ITEM_CART} from "../constants/cartConstants"


export const addToCart=(product,Quantity=1)=>async(dispatch,getState)=>{
    try {
        const {data} = await axios.get(`http://localhost:5000/products/${product._id}`)
        dispatch({
            type:ADD_ITEM_CART,
            payload:{
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock:data.countInStock,
                _id:data._id,
                Quantity,
            }
        })
        //localStorage.setItem("cartItems",JSON.stringify(getState().cartState.cartItems))
    //    console.log("fafafa",getState().cartState.cartItems)
    } catch (error) {
        console.log(error)
    }
   
}
export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: REMOVE_ITEM_CART, payload: productId });
    
  };
  