import React from 'react'
import Logo from '../UI/Logo/Logo'
import Search from '../UI/Search/Search'

import styles from './SearchHeader.module.css'

const header = (props) => (
    <div className={styles.header}>
        <Logo logoStyle="index"/>
        <Search />
    </div>
)

export default header;