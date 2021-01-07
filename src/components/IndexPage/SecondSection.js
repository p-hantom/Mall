import React from 'react'
import styles from './SecondSection.module.css'

const SecondSection = () => (
    <section className={styles.section}>
        <h3 className={styles.title}>
            Featured Products
        </h3>
        <p className={styles.passage}>
            Checkout some of our best products.
        </p>
    </section>
)

export default SecondSection;