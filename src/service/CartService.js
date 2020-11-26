import axios from 'axios'
import Util from '../util/util'

const _util = new Util();
class CartService {
    // Get cart list
    getCartList() {
        return _util.request('/api/cart/list.do');
    }
}

export default CartService;