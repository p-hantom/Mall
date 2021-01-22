import React, { Component } from 'react';
import styles from './SideDrawer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'
// import Title from './SideDrawerContent/Title'
// import Item from './SideDrawerContent/CategoryItem'
// import ReturnButton from './SideDrawerContent/ReturnButton'

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
    {text: '手机'},
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
        console.log(categoryId)
        //to do
        this.props.history.push({
            pathname: '/searchResult',
            search: `?keyword=${categoryId}`,
            state: { keyword: categoryId }
        })
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

        // const content1 = !this.state.showSubContent ?
        // (
        //     <MainMenu 
        //         clickDpmt={this.clickDpmtHandler} 
        //         dpmt={dpmt} />
        // ) : (
        //     <CategoryMenu
        //         open={true}
        //         clickCategory={this.clickCategoryHandler} 
        //         clickReturn={this.clickReturnHandler}
        //         dpmt={dpmt} 
        //         categoryCon={categoryCon}
        //         titleText={this.state.dpmtId}/>
        // )

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
                <div className={faTimesClasses.join(' ')}>
                    <FontAwesomeIcon icon={faTimes} onClick={this.closedHandler} />
                </div>
                
            </Aux>
        )
    }
}

export default withRouter(SideDrawer);