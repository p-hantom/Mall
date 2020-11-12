import React from 'react'
import styles from './Search.module.css'

import Button from '../Button/Button'

const search = (props) => (
    <div className={styles.search}>
        <input className={styles.searchInput}/>
        <Button btnType="search" clicked={props.clickSearch}>Search</Button>
    </div>
)

export default search;