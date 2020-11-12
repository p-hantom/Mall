import React from 'react'
import SearchHeader from '../SearchHeader/SearchHeader'
import CardList from './CardList'

import styles from './IndexPage.module.css'

const index = (props) => {
    
    return (
        <div>
            <SearchHeader />
            <CardList />
        </div>
    )
}

export default index;