import { ADD_PRODUCT, ADD_PRODUCT_FAIL } from "../constants/addProductConstants"

const addProductState = {
    _id: "",
    loding: false,
    error: false


};

export const addProductReducer = (state = addProductState, action) => {
    switch (action.type) {


        case ADD_PRODUCT:
            return { loading: false, _id: action.payload }
        case ADD_PRODUCT_FAIL:
            return { loading: false, error: action.payload }

        default: return state
    }
}