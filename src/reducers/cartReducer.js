import {
    ADD_TO_CART,
    DELETE_FROM_CART,
    UPDATE_CART,
    SELECT_PRODUCT,
    UNSELECT_PRODUCT,
    GET_CART_LIST
} from '../actions/types';

// how are the arguments passed into reducer function???
const reducer = (state = {cartNumber: 0, cartList: []}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, ...action.payload };
        case DELETE_FROM_CART:
            return { ...state, ...action.payload };
        case UPDATE_CART:
            return { ...state, ...action.payload };
        case SELECT_PRODUCT:
            return { ...state, ...action.payload };
        case UNSELECT_PRODUCT:
            return { ...state, ...action.payload };
        case GET_CART_LIST:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default reducer;