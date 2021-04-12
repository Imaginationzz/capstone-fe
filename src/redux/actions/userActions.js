import axios from "axios"
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: { email, password }

    })
    try {
        const { data } = await axios(`http://localhost:5000/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: { email, password }
        })
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message })
    }
}

export const signout = (dispatch) => {
    dispatch({ type: USER_SIGNOUT })

}

export const register = (firstName, userName, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: { firstName, userName, email, password }

    })
    try {
        const { data } = await axios(`http://localhost:5000/user/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: { firstName, userName, email, password }
        })

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data

        })

        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
    }
}