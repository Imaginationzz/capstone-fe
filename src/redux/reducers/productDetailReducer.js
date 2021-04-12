import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";


const productDetailState={
    
        product:{},
        error: false,
        loading:false
      
};

export const productDetailReducer = (state = productDetailState, action)=>{
    let { type, payload } = action;
    switch(type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                ...state,
                loading:true};
            case PRODUCT_DETAILS_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error:false,
                    product:payload};
                case PRODUCT_DETAILS_FAIL:
                    return{
                        ...state,
                        loading:false,error:payload}
                        default:
                            return state;
      
    }
}
