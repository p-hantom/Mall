import React from 'react'
import Item from './CategoryItem';
import Title from './Title'

import styles from './MainMenu.module.css'

const mainMenu = (props) => {
    const dpmtList = props.dpmt.map((item,key) => {
        return (
            // to be fixed -> item.id
            <Item 
                key={key}
                showArrow={true}
                text={item.text} 
                clicked={() => props.clickDpmt(item.text)}/>
        )
    })

    let classes = [styles.mainMenu, styles.in];
    if(props.showCategoryMenu) {
        classes = [styles.cateMenu, styles.out];
    }

    return (
        <div className={classes.join(' ')}>
            <Title text="Shop By Department" />
            {dpmtList}
        </div>
    )
}

export default mainMenu;