import axios from "axios"
import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_CREATE_RESET } from "../constants/orderConstants"


export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({
        type: ORDER_CREATE_REQUEST,
        payload: order
    })
    console.log("Creating order.")
    try {
        const { data } = await axios(`http://localhost:5000/order`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: { order }
        })
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ORDER_CREATE_FAIL, payload: error.message })
    }
}