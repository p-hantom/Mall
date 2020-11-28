import axios from 'axios'
import Util from '../util/util'

const _util = new Util();
class CartService {
    // Get cart list
    getCartList() {
        return _util.request('/api/cart/list.do');
    }
    // Add product to cart
    addToCart(prdParams) {
        const params = _util.getParams(prdParams);
        return _util.request('/api/cart/add.do', params);
    }
    // Delete a product from the cart
    deleteProduct(prdParams) {
        const params = _util.getParams(prdParams);
        return _util.request('/api/cart/delete_product.do', params);
    }
    // Update quantity
    updateProduct(prdParams) {
        const params = _util.getParams(prdParams);
        return _util.request('/api/cart/update.do', params);
    }
    // Select a product
    selectProduct(prdParams) {
        const params = _util.getParams(prdParams);
        return _util.request('/api/cart/select.do', params);
    }
    // Unselect a product
    unselectProduct(prdParams) {
        const params = _util.getParams(prdParams);
        return _util.request('/api/cart/un_select.do', params);
    }
}

export default CartService;