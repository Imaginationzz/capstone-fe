import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

const userState = {
    userInfo: {
        token: "",
        userName: "",
        firstName: "",
        role: ""

    },
    loding: false,
    error: false


};

export const registerReducer = (state = userState, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };

        case USER_REGISTER_SUCCESS:
            return { loading: false, error: false, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        default: return state
    }
}

export const signinReducer = (state = userState, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };

        case USER_SIGNIN_SUCCESS:
            return { loading: false, error: false, userInfo: action.payload }
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_SIGNOUT:
            return { loading: false, error: false, userInfo: null }



        default: return state
    }
}