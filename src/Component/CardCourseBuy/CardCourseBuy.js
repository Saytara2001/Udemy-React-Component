import React, { useState } from 'react'
import FullStarIcon from '../Icons/FullStarIcon'
import styles from './CardCourseBuy.module.css'
import { useParams } from 'react-router-dom'
import FillHeartIcon from '../Icons/FillHeartIcon'
import EmptyHeartIcon from '../Icons/EmptyHeartIcon'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import DocIcon from '../Icons/DocIcon'
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
function CardCourseBuy(props) {
    const [FavIconState, setFavIconState] = useState(false)
    const { id } = useParams();
    let course = props.courses.filter(item => item.id == id)?.[0];
    return (
        <div className={styles.headerCard}>
            <div className={styles.containerCard}>
                <img className={styles.img} alt="" width="240" height="135" src={course.image} />
                <div className={styles.info}>
                    <h1 className={styles.h1}>$1,256,88</h1>
                    <div className="con-buy">
                        <div className={styles['info-buy']}>
                            <button className={styles['button-1']}>Add To Cart</button>
                            <div onClick={() => { setFavIconState(!FavIconState) }} className={`d-flex align-items-center justify-content-center ${styles.hoverButton} ${styles.icon} ${styles.i}`}>
                                {FavIconState ?
                                    <FillHeartIcon />
                                    :
                                    <EmptyHeartIcon />
                                }
                            </div>
                        </div>
                        <button className={`mt-2 ${styles['button-2']} ${styles.hoverButton}`}>Buy now</button>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <p>30-Day money-Back Guarantee</p>
                    </div>
                    <h4 className="fs-5 fw-bold">This course includes:</h4>
                    <div className="details">
                        <div className="d-flex gap-3 align-items-center mt-2">
                            <LiveTvIcon style={{ fontSize: 18 }} />
                            <p className="m-0 fw-bold">65 hours on-demand video</p>
                        </div>
                        <div className="d-flex gap-3 align-items-center mt-2">
                            <DocIcon />
                            <p className="m-0 fw-bold">85 articles</p>
                        </div>
                        <div className="d-flex gap-3 align-items-center mt-2">
                            <AssignmentReturnedIcon style={{ fontSize: 18 }} />
                            <p className="m-0 fw-bold">49 downloadable resources</p>
                        </div>
                        <div className="d-flex gap-3 align-items-center mt-2">
                            <AllInclusiveIcon style={{ fontSize: 18 }} />
                            <p className="m-0 fw-bold">Full lifetime access</p>
                        </div>
                        <div className="d-flex gap-3 align-items-center mt-2">
                            <SmartphoneIcon style={{ fontSize: 18 }} />
                            <p className="m-0 fw-bold">Access on mobile and TV</p>
                        </div>
                        <div className="d-flex gap-3 align-items-center mt-2">
                            <EmojiEventsIcon style={{ fontSize: 18 }} />
                            <p className="m-0 fw-bold">Certificate of completion</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly mt-3 mb-4 con-share">
                        <a className={styles.a}>Share</a>
                        <a className={styles.a}>Gift this course</a>
                        <a className={styles.a}>Apply Coupon</a>
                    </div>
                </div>
                <hr />
                <div className={styles.info}>
                    <h3 className={`fw-bold m-0 ${styles.h3}`}>Training 5 or more people?</h3>
                    <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                    <button className={styles['button-2']}>Try udemy Business</button>
                </div>
            </div>
        </div>
    )
}

export default CardCourseBuy
