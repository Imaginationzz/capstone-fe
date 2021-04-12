import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";


const productState={
    
        products: [],
        error: false,
        loading:false
      
};

export const productReducer = (state = productState, action)=>{
    let { type, payload } = action;
    switch(type){
        case PRODUCT_LIST_REQUEST:
            return{
                ...state,
                loading:true};
            case PRODUCT_LIST_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error:false,
                    products:payload};
                case PRODUCT_LIST_FAIL:
                    return{
                        ...state,
                        loading:false,error:payload}
                        default:
                            return state;
      
    }
}
