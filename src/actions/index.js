import Cart from '../service/CartService'
import {
    ADD_TO_CART,
    DELETE_FROM_CART,
    UPDATE_CART,
    SELECT_PRODUCT,
    UNSELECT_PRODUCT,
    GET_CART_LIST
} from './types';

const _cart = new Cart();

export const getCartList = (params) => async (dispatch) => {
    const response = await _cart.getCartList(params);

    dispatch({ type: GET_CART_LIST, payload: getCartPayload(response) });
}

export const addToCart = (params) => async (dispatch) => {
    const response = await _cart.addToCart(params);

    dispatch({ type: ADD_TO_CART, payload: getCartPayload(response) });
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