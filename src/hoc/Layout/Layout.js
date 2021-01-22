import React, { Component } from 'react'

import Navigation from '../../components/Navigation/Navigation'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Aux from '../Auxiliary'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    componentDidMount() {
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Navigation 
                    clickDrawerToggle={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerToggleHandler}/>
                {this.props.children}
                {/* <Footer /> */}
            </Aux>
        )
    }
}

export default Layout;