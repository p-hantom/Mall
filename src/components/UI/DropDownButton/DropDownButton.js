import React, { Component } from 'react';
import DropDownButton from 'react-bootstrap/DropDownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from '../../UI/Button/Button'

class DropDown extends Component {
    state = {
        currentVal: 1,
        showInputNum: false
    }
    // Click a number in dropdown list
    clickValHandler = (val) => {
        this.props.onSelectVal(val);    //Pass the value to /detail component
        this.setState({
            currentVal: val
        })
    }
    // Click 10+ button in dropdown list, change dropdown to input text
    clickTenPlusHandler = () => {
        this.setState({
            showInputNum: true
        })
    }
    // After inputting a number and click 'update' button
    clickUpdateHandler = () => {
        this.props.onSelectVal(this.state.currentVal);
    }
    // Input mode, when inputting a number
    onInputValueChange = e => {
        this.setState({
            currentVal: e.target.value
        })
    }
    render() {
        const valList = this.props.list ? this.props.list : [...Array(10).keys()];

        const ItemList = valList.map(val => (
            <div key={val}>
                <Dropdown.Item eventKey={val} onSelect={this.clickValHandler}>{val}</Dropdown.Item>
            </div>
        ))

        const View = this.state.showInputNum ? (
                <div>
                    <input type='text' onChange={e => this.onInputValueChange(e)}/>
                    <Button onClick={this.clickUpdateHandler}>Update</Button>
                </div>
            ): (
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Qty:{' '+this.state.currentVal}
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                        {ItemList}
                        <Dropdown.Divider />
                        <Dropdown.Item onSelect={this.clickTenPlusHandler}>10+</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        return View;
    }
}

export default DropDown;