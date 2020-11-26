import React, { Component } from 'react'
import styles from './Search.module.css'
import { withRouter } from "react-router-dom";

import Button from '../Button/Button'

class Search extends Component {
    state = {
        keyword: ''
    }
    onValueChange = (e) => {
        this.setState({keyword: e.target.value})
    }
    clickSearchHandler = () => {
        const {keyword} = this.state;
        this.setState({keyword: ''})
        this.props.history.push({
            pathname: '/searchResult',
            search: `?keyword=${keyword}`,
            state: { keyword: keyword }
        })
        
    }
    render() {
        return (
            (
                <div className={styles.search}>
                    <input className={styles.searchInput} 
                        onChange={e => this.onValueChange(e)} 
                        value={this.state.keyword}/>
                    <Button btnType="search" clicked={this.clickSearchHandler}>Search</Button>
                </div>
            )
        )
    }
}

export default withRouter(Search);