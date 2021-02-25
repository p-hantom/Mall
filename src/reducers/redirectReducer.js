import {
    REDIRECT,
    CLEAR_REDIRECT
} from '../actions/types';

const reducer = (state = {redirectTo: null}, action) => {
    switch (action.type) {
        case REDIRECT:
            return { ...state, ...action.payload };
        case CLEAR_REDIRECT:
            return { redirectTo: null };
        default:
            return state;
    }
}

export default reducer;