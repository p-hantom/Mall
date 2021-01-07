import React from 'react'
import styles from './Section.module.css'

const Section = () => (
    <section className={styles.section}>
        <div className={styles.sectionContent}>
            <h2 className={styles.title}>
                MINIMALISM + E-COMMERCE
            </h2>
            <p className={styles.passage}>
                This area shows the static content of the home page. So you can put just about anything right here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae eleifend augue, sit amet hendrerit nibh. Sed scelerisque ex id ornare.
            </p>
        </div>
    </section>
)

export default Section;