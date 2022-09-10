import React, { Component } from 'react'
import styles from './Header.module.css'

class Header extends Component {
  render() {
    return (
      <header className={`container ${styles.header}`}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles['h1-p']}>New to Udemy? Lucky you.</h1>
          <p className={styles['h1-p']}>Courses start at E195.99. Get your new-student offer before it expire</p>
        </div>
        <div className={styles['header-img']}>
          <img className={styles['header-img-img']} src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/9ea59bc2-bd61-463e-9ce9-7e71e8e586ae.jpg" alt="Clock-time" />
        </div>
      </header>
    )
  }
}

export default Header
