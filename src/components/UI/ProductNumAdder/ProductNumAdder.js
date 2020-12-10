import React, { Component } from 'react'
import Button from '../Button/Button'
import styles from './ProductNumAdder.module.css'

class ProductNumAdder extends Component {
    state = {
        value: this.props.value,
        disableMinus: false,
        disablePlus: false,
        stock: this.props.stock
    }
    addHandler = () => {
        const {stock} = this.state;
        this.setState((prevState) => ({
            disablePlus: prevState.value+1===stock ? true : prevState.disablePlus,
            disableMinus: prevState.value===0 && prevState.value<stock ? false : prevState.disableMinus,
            value: prevState.value<stock ? prevState.value + 1 : prevState.value
        }),() => {
            this.props.updateNumber(this.state.value)
        });
    }
    minusHandler = () => {
        const {stock} = this.state;
        this.setState((prevState) => ({
            disablePlus: prevState.value===stock ? false : prevState.disablePlus,
            disableMinus: prevState.value-1===0 ? true : prevState.disableMinus,
            value: prevState.value>0 ? prevState.value-1 : 0
        }),() => {
            this.props.updateNumber(this.state.value)
        });
    }
    render() {
        const {value,disableMinus,disablePlus} = this.state;
        return (
            <div>
                <button className={styles.prdNumAdder}
                        onClick={this.minusHandler}
                        disabled={disableMinus}>
                    -
                </button>
                <input className={styles.input} value={value} readOnly/>
                <button className={styles.prdNumAdder}
                        onClick={this.addHandler}
                        disabled={disablePlus}>
                    +
                </button>
            </div>
        )
    }
}

export default ProductNumAdder;