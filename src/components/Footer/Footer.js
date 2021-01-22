import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const navList = ['Home','Shop','Our Journal','Sample Page'];
    const Nav = navList.map((item,index) => (
        <li key={index} className={styles.navItem}>
            {item}
        </li>
    ))
    return (
        <footer className={styles.footer}>
            <div className={styles.inside}>
                <div className={styles.main}>
                    <div className={styles.navMenu}>
                        <ul>
                            {Nav}
                        </ul>
                    </div>
                    <div className={styles.centerText}>
                        <p className={styles.textWidgetTitle}>Text Widget</p>
                        <p>Text widgets are very handy. You can put almost anything in them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={styles.search}></div>
                </div>
                <div className={styles.secondary}>
                    <p>
                    © 2021 Mall All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;