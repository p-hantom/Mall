import React from 'react'
import Item from './CategoryItem';
import Title from './Title'
import ReturnButton from './ReturnButton'
import styles from './CategoryMenu.module.css'

const categoryMenu = (props) => {
    const list = props.categoryCon.map(item => {
        return (
            // to be fixed -> item.id
            <Item 
                showArrow={false}
                text={item.text} 
                clicked={() => props.clickCategory(item.text)}/>
        )
    })

    let classes = [styles.cateMenu, styles.out];
    if(props.open) {
        classes = [styles.cateMenu, styles.in];
    }

    return (
        <div className={classes.join(' ')}>
            <ReturnButton clicked={props.clickReturn} />
            <Title text={props.titleText} />
            {list}
        </div>
    )
}

export default categoryMenu;