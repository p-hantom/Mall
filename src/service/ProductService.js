import Util from '../util/util'

const _util = new Util();

class ProductService {
    getProductList(listParams) {
        // const params = new URLSearchParams();
        // Object.keys(listParams).map(key => {
        //     params.append(key, listParams[key]);
        // })
        const params = _util.getParams(listParams);
        // params.append('keyword', listParams.keyword);
        // params.append('categoryId', listParams.categoryId);
        // params.append('orderBy', listParams.orderBy);
        // params.append('pageNum', listParams.pageNum);
        // params.append('pageSize', listParams.pageSize);
        return _util.request('/api/product/list.do', params, 'post')
        // return axios.post('/api/product/list.do', params);
    }
    getProductDetail(detailParams) {
        const params = _util.getParams(detailParams);
        return _util.request('/api/product/detail.do', params, 'post');
    }
}

export default ProductService;