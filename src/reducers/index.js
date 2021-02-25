import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import redirectReducer from './redirectReducer';

export default combineReducers({
    cart: cartReducer,
    redirect: redirectReducer
});