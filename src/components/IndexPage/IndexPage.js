import React from 'react'
import Carousel from '../UI/Carousel/Carousel'
import Section from './Section'
import CardLayout from './CardLayout'
import LargeCards from './LargeCards'
import SecondSection from './SecondSection'
import SmallCards from './SmallCards'
import styles from './IndexPage.module.css'

const index = (props) => {
    
    return (
        <div>
            <Carousel />
            <Section />
            <LargeCards />
            <SecondSection />
            <SmallCards />
            <CardLayout />
        </div>
    )
}

export default index;