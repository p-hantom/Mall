import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./DrawerToggle.module.css";

const drawerToggle = (props) => (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
        <FontAwesomeIcon icon={faBars} className={styles.fa} />
    </div>
);

export default drawerToggle;