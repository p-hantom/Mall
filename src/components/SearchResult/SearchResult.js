import React, { Component } from 'react'
import ResultItem from './Content/ResultItem'
import Aux from '../../hoc/Auxiliary'
import SearchHeader from '../SearchHeader/SearchHeader'
import Pagination from '../UI/Pagination/Pagination'

import Product from '../../service/ProductService'

import styles from './SearchResult.module.css'

const _product = new Product();

const results = [
    { name: 'iPhone12 black', price: '500'},
    { name: 'iPhone12 green', price: '500'},
    { name: 'iPhone12 blue', price: '500'},
    { name: 'iPhone12 white', price: '500'},
    { name: 'iPhone12 pro black', price: '700'},
    { name: 'iPhone12 pro skyblue', price: '700'},
]

class SearchResult extends Component {
    state={
        prdList: results,
        pageNum: 1,         //current page num
        total: 100
    }
    componentDidMount() {
        this.getProductList();
    }
    componentDidUpdate(prevProps) {
        //todo : prevProps with other properties
        const keyword = this.props.location.state.keyword
        if(prevProps.location.state.keyword === keyword) {
            return;
        }
        this.getProductList();
    }
    getProductList = () => {
        const params = {
            keyword: this.props.location.state.keyword,
            pageNum: this.state.pageNum
        }
        _product.getProductList(params).then(res => {
            console.log(res);
            this.setState({
                prdList: res.data.data.list,
                total: res.data.data.total
            })
        })
    }
    onClickProductHandler = (id) => {
        const params = {
            productId: id
        }
        _product.getProductDetail(params).then(res => {
            console.log(res.data.data);
            this.props.history.push({
                pathname: '/detail',
                search: `?productId=${id}`,
                state: { detailData: res ? res.data.data : null }
            })
        })
    }
    onPageNumChange = (pageNum) => {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.getProductList();
        })
    }
    render() {
        const {prdList} = this.state;
        const ResultList = prdList.map(item => {
            return (
                <ResultItem 
                    title={item.name}
                    price={item.price}
                    key={item.id}
                    onClick={() => this.onClickProductHandler(item.id)}/>
            )
        })
        return (
            <Aux>
                <div className={styles.searchResult}>
                    {ResultList}
                </div>
                <Pagination defaultCurrent={1}
                    current={this.state.pageNum}
                    defaultPageSize={10} 
                    total={this.state.total}
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
                <div>hello</div>
            </Aux>
    
        )
    }
}

export default SearchResult;