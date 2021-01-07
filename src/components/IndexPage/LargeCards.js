import React from 'react'
import styles from './LargeCards.module.css'

const LargeCards = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={[styles.card,styles.card1].join(' ')}>
                <div className={styles.content}>
                    <div className={styles.inside}>
                        <h3 className={styles.title}>
                            WINTER SALE
                        </h3>
                        <p className={styles.passage}>
                            Nunc a sapien vestibulum, elementum dui vitae, mollis metus. Cras fermentum euismod metus, eget rutrum tellus posuere a. Aenean sed eros lectus.
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className={[styles.card,styles.card2].join(' ')}>
                <div className={styles.content}>
                    <div className={styles.inside}>
                        <h3 className={styles.title}>
                            WINTER SALE
                        </h3>
                        <p className={styles.passage}>
                            Nunc a sapien vestibulum, elementum dui vitae, mollis metus. Cras fermentum euismod metus, eget rutrum tellus posuere a. Aenean sed eros lectus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LargeCards;