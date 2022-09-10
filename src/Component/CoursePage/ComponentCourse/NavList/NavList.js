import React from 'react'
import styles from './NavList.module.css'
import { HashLink } from 'react-router-hash-link'
function NavList() {
    return (
        <div className="nav-header container">
            <ul className={`${styles.ul} row justify-content-center`}>
                <button className={`col ${styles.button}`}><HashLink className={styles.a} to="#Overview">Overview</HashLink></button>
                <button className={`col ${styles.button}`}><HashLink className={styles.a} to="#Curriculum">Curriculum</HashLink></button>
                <button className={`col ${styles.button}`}><HashLink className={styles.a} to="#Instrutor">Instrutor</HashLink></button>
                <button className={`col ${styles.button}`}><HashLink className={styles.a} to="#Reviews">Reviews</HashLink></button>
            </ul>
        </div>
    )
}

export default NavList
