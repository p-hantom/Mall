import Util from '../util/util'

const _util = new Util();
class OrderService {
    // Get order list
    getOrderList() {
        return _util.request('/api/order/list.do');
    }
    // Create an order
    createOrder(params) {
        return _util.request('/api/order/create.do',_util.getParams(params));
    }
    // Get products from cart to make an order
    getOrderCartProduct() {
        return _util.request('/api/order/get_order_cart_product.do');
    }
}

export default OrderService;