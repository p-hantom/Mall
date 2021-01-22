import React, { Component } from 'react'
import brokenImage from '../../../assets/images/broken_image.png'
import styles from './Image.module.css'

class Image extends Component {
    render() {
        return (
            <div className={[styles.imgCon,styles[this.props.imgDivType]].join(' ')}>
                {
                    !this.props.mainImage ? <img alt="" className={styles.img} src={brokenImage} />
                        : <img alt="" className={styles.img} src={this.props.imageHost+this.props.mainImage} />
                }
            </div>
        )
    }
}

export default Image;