import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import ProductCard from '../UI/ProductCard/ProductCard'
import Pagination from '../UI/Pagination/Pagination'

import Product from '../../service/ProductService'

import styles from './SearchResult.module.css'
import MyToast from '../UI/Toast/Toast'

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
        pageNum: 0,         //current page num
        total: 0,
        showToast: false
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
        
        this.props.history.push({
            pathname: '/detail',
            search: `?productId=${id}`,
            state: {
                id: id 
            }
        })
    }
    onPageNumChange = (pageNum) => {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.getProductList();
        })
    }
    showAddToCartToast = () => {
        this.setState({
            showToast: true,
            toastMsg: "Add to cart successfully!"
        })
    }
    closeToastHandler = () => {
        this.setState({
            showToast: false,
            toastMsg: ""
        })
    }
    render() {
        const {prdList, total} = this.state;
        const ResultList = prdList.map((item, index) => {
            return (
                <div className={styles.productDiv} key={index}>
                    <ProductCard 
                        data={item}
                        key={item.id}
                        onClick={() => this.onClickProductHandler(item.id)}
                        showToast={() => this.showAddToCartToast()}/>
                </div>
            )
        })
        return (
            <Aux>
                <section className={styles.headerSection}>
                    <h1 className={styles.headerTitle}>
                        SHOP
                    </h1>
                </section>

                <MyToast message={this.state.toastMsg} show={this.state.showToast}
                    delay={3000} autohide onClose={this.closeToastHandler}/>

                <section className={styles.main}>
                    <div>
                        <p className={styles.totalInfo}>Showing all {total} results</p>
                    </div>
                    <div className={styles.productsDiv}>
                        {ResultList}
                    </div>
                    <Pagination defaultCurrent={1}
                        current={this.state.pageNum+1}
                        defaultPageSize={10} 
                        total={this.state.total}
                        onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
                </section>
                
            </Aux>
    
        )
    }
}

export default SearchResult;