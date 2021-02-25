import Cart from '../service/CartService'
// import Order from '../service/OrderService'
import {
    ADD_TO_CART,
    DELETE_FROM_CART,
    UPDATE_CART,
    SELECT_PRODUCT,
    UNSELECT_PRODUCT,
    GET_CART_LIST,
    REDIRECT,
    CLEAR_REDIRECT
} from './types';

const _cart = new Cart();
// const _order = new Order();

export const getCartList = (params) => async (dispatch) => {
    try{
        const response = await _cart.getCartList(params);
        dispatch({ type: GET_CART_LIST, payload: getCartPayload(response) });
    } catch(err) {
        dispatch({ type: REDIRECT, payload: {redirectTo: '/login'} });
    }
    
}

export const addToCart = (params) => async (dispatch) => {
    try{
        const response = await _cart.addToCart(params);
        dispatch({ type: ADD_TO_CART, payload: getCartPayload(response) });
    } catch(err) {
        dispatch({ type: REDIRECT, payload: {redirectTo: '/login'} });
    }
}

export const deleteFromCart = (params) => async (dispatch) => {
    const response = await _cart.deleteProduct(params);

    dispatch({ type: DELETE_FROM_CART, payload: getCartPayload(response)})
}

export const updateCart = (params) => async (dispatch) => {
    const response = await _cart.updateProduct(params);

    dispatch({ type: UPDATE_CART, payload: getCartPayload(response) });
}

export const selectProduct = (params) => async dispatch => {
    const response = await _cart.selectProduct(params);

    dispatch({ type: SELECT_PRODUCT, payload: getCartPayload(response) });
}

export const unselectProduct = (params) => async dispatch => {
    const response = await _cart.unselectProduct(params);

    dispatch({ type: UNSELECT_PRODUCT, payload: getCartPayload(response) });
}

const getCartPayload = (response) => {
    const cartList = response.data.data.cartProductVoList;
    const payload = {
        cartNumber: cartList.reduce((previous, cur) => previous+cur.quantity, 0),
        cartList: cartList,
        totalPrice: response.data.data.cartTotalPrice,
        imageHost: response.data.data.imageHost
    }
    return payload;
}

export const clearRedirect = () => {
    return { type: CLEAR_REDIRECT };
}

// export const createOrder = (params) => async dispatch => {
//     try{
//         const response = await _order.createOrder(params);
//         dispatch({ type: CREATE_ORDER, payload: getCartPayload(response) });
//     } catch(err) {
//         dispatch({ type: REDIRECT, payload: {redirectTo: '/login'} });
//     }
// }