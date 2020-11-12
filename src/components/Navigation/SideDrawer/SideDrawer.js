import React, { Component } from 'react';
import styles from './SideDrawer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Title from './SideDrawerContent/Title'
import Item from './SideDrawerContent/CategoryItem'
import ReturnButton from './SideDrawerContent/ReturnButton'

import MainMenu from './SideDrawerContent/MainMenu'
import CategoryMenu from './SideDrawerContent/CategoryMenu'

const dpmt = [
    {text: 'Electronics'},
    {text: 'Computers'},
    {text: 'Smart Home'},
    {text: 'Arts & Crafts'},
    {text: 'Automotive'},
    {text: 'Beauty and Personal Care'},
    {text: 'Health and Household'},
    {text: 'Home and Kitchen'},
    {text: 'Pet Supplies'},
]

const categoryCon = [
    {text: 'Headphones'},
    {text: 'Home Audio'},
    {text: 'Camera'},
    {text: 'Television'},
    {text: 'Vedio Game Consoles'},
    {text: 'Computers'},
    {text: 'GPS'}
]

class SideDrawer extends Component {
    state = {
        showSubContent: false,
        subContent: categoryCon,  //to be fixed
        dpmtId: null
    }

    clickDpmtHandler = (dpmtId) => {
        this.setState({
            showSubContent: true,
            dpmtId: dpmtId
        })
        console.log(dpmtId)
    }

    clickCategoryHandler = (categoryId) => {
        this.closedHandler();
        //to do
    }

    clickReturnHandler = () => {
        this.setState({
            showSubContent: false
        })
    }

    closedHandler = () => {
        this.setState({
            showSubContent: false
        })
        this.props.closed()
    }

    render() {
        let classes = [styles.sideDrawer, styles.close];    //the styles of the side drawer as a whole
        let faTimesClasses = [styles.faTimes, styles.faClose];
        if(this.props.open) {
            classes = [styles.sideDrawer, styles.open];
            faTimesClasses = [styles.faTimes, styles.faOpen];
        }

        // const dpmtList = dpmt.map(item => {
        //     return (
        //         // to be fixed -> item.id
        //         <Item 
        //             showArrow={true}
        //             text={item.text} 
        //             clicked={() => this.clickDpmtHandler(item.text)}/>
        //     )
        // })

        // const categoryList = categoryCon.map(item => {
        //     return (
        //         // to be fixed -> item.id
        //         <Item
        //             showArrow={false}
        //             text={item.text} 
        //             clicked={() => this.clickCategoryHandler(item.text)}/>
        //     )
        // })

        // const content1 = this.state.showSubContent ?
        // (
        //     <div className={classes.join(' ')}>
        //         <ReturnButton clicked={this.clickReturnHandler} />
        //         <Title text={this.state.dpmtId} />
        //         {categoryList}
        //     </div>
        // )
        // : (
        //     <div className={classes.join(' ')}>
        //         <Title text="Shop By Department" />
        //         {dpmtList}
        //     </div>
        // )

        const content1 = !this.state.showSubContent ?
        (
            <MainMenu 
                clickDpmt={this.clickDpmtHandler} 
                dpmt={dpmt} />
        ) : (
            <CategoryMenu
                open={true}
                clickCategory={this.clickCategoryHandler} 
                clickReturn={this.clickReturnHandler}
                dpmt={dpmt} 
                categoryCon={categoryCon}
                titleText={this.state.dpmtId}/>
        )

        const showCategoryMenu = this.state.showSubContent;

        const content = 
        (<Aux>
            <MainMenu 
                showCategoryMenu={showCategoryMenu}
                clickDpmt={this.clickDpmtHandler} 
                dpmt={dpmt} />
            <CategoryMenu
                open={showCategoryMenu}
                clickCategory={this.clickCategoryHandler} 
                clickReturn={this.clickReturnHandler}
                dpmt={dpmt} 
                categoryCon={categoryCon}
                titleText={this.state.dpmtId}/>
        </Aux>
        )

        return (
            <Aux>
                <Backdrop show={this.props.open} clicked={this.closedHandler} />
                <div className={classes.join(' ')}>
                    {content}
                </div>
                <FontAwesomeIcon icon={faTimes} className={faTimesClasses.join(' ')} onClick={this.closedHandler} />
            </Aux>
        )
    }
}

export default SideDrawer;