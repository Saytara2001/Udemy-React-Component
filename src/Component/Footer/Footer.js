import React from 'react'
import styles from './Footer.module.css'
import imgUdemy from '../../Images/logo-udemy-inverted.svg'
import LangIcon from '../Icons/LangIcon'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-con-1']}>
                <div>
                    <h3 className={styles.h3}>Teach the world online</h3>
                    <p className={styles.p}>Create an online video course, reach students across the globe, and earn money</p>
                </div>
                <button className={styles.button}>Teach On Udemy</button>
            </div>
            <hr />
            <div className={styles['con-2']}>
                <h3 className={`${styles.h3} m-0`}>
                    Top companies choose <a className={styles['a-p']}> Udemy Business</a> to build in-demand career skills.</h3>
                <div className={styles['con-img']}>
                    <img alt="Nasdaq" height="44" width="115"
                        src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" />
                    <img alt="Volkswagen" height="44" width="44"
                        src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" />
                    <img alt="Box" height="44" width="67" src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" />
                    <img alt="NetApp" height="44" width="115"
                        src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
                    <img alt="Eventbrite" height="44" width="115"
                        src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" />
                </div>
            </div>
            <hr />
            <div className={styles['con-3']}>
                <div>
                    <a className={styles.a}>Udemy Business</a>
                    <a className={styles.a}>Teach on Udemy</a>
                    <a className={styles.a}>Get the app</a>
                    <a className={styles.a}>About us</a>
                    <a className={styles.a}>Contact us</a>
                </div>
                <div>
                    <a className={styles.a}>Careers</a>
                    <a className={styles.a}>Blog</a>
                    <a className={styles.a}>Help and Support</a>
                    <a className={styles.a}>Affiliate</a>
                    <a className={styles.a}>Investors</a>
                </div>
                <div className={styles.marginFooter}>
                    <a className={styles.a}>Terms</a>
                    <a className={styles.a}>Privacy policy</a>
                    <a className={styles.a}>Cookie settings</a>
                    <a className={styles.a}>Sitemap</a>
                    <a className={styles.a}>Accessibility statement</a>
                </div>
                <button className={`${styles.marginFooter} ${styles.button}`}><LangIcon />
                    <span className="mx-1">English</span>
                </button>
            </div>
            <div className={styles['con-4']}>
                <img src={imgUdemy} alt="udemy_image" height="44" width="130" />
                <p className={styles['con-4-p']}>© 2022 Udemy, Inc.</p>
            </div>
        </footer>
    )
}

export default Footer

