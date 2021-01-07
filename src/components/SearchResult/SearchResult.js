import React, { Component } from 'react'
import ResultItem from './Content/ResultItem'
import Aux from '../../hoc/Auxiliary'
import ProductCard from '../UI/ProductCard/ProductCard'
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
        total: 0
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
    render() {
        const {prdList, total} = this.state;
        // const ResultList1 = prdList.map(item => {
        //     return (
        //         <ResultItem 
        //             data={item}
        //             key={item.id}
        //             // onClick={() => this.onClickProductHandler(item.id)}
        //             />
        //     )
        // })
        const ResultList = prdList.map((item, index) => {
            return (
                <div className={styles.productDiv} key={index}>
                    <ProductCard 
                        data={item}
                        key={item.id}
                        onClick={() => this.onClickProductHandler(item.id)}/>
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
                <section className={styles.main}>
                    <div>
                        <p className={styles.totalInfo}>Showing all {total} results</p>
                    </div>
                    <div className={styles.productsDiv}>
                        {ResultList}
                    </div>
                    {/* <div className={styles.searchResult}>
                        {ResultList}
                    </div> */}
                    <Pagination defaultCurrent={1}
                        current={this.state.pageNum}
                        defaultPageSize={10} 
                        total={this.state.total}
                        onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
                    <div>hello</div>
                </section>
                
            </Aux>
    
        )
    }
}

export default SearchResult;