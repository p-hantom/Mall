import Util from '../util/util'

const _util = new Util();
class ShippingService {
    // Get shipping list
    getShippingList() {
        return _util.request('/api/shipping/list.do');
    }

    addShippingAddr(shippingParams) {
        const params = _util.getParams(shippingParams);
        return _util.request('/api/shipping/add.do', params);
    }
}

export default ShippingService;