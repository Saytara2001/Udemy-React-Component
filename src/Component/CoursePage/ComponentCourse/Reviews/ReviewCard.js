import React, { useState } from 'react'
import styles from './Reviews.module.css'
import FullStarIcon from '../../../Icons/FullStarIcon'
import HalfStarIcon from '../../../Icons/HalfStarIcon';
import FillLike from '../../../Icons/FillLike';
import EmptyLike from '../../../Icons/EmptyLike';
import EmptyDislike from '../../../Icons/EmptyDislike';
import FillDislike from '../../../Icons/FillDislike';
import RatingComponent from '../../../RatingComponent';
import { InsertEmoticon } from '@mui/icons-material';

function ReviewCard({ data }) {
    const [LikeIconState, setLikeIconState] = useState(0);
    return (
        <div className="review d-flex mt-3">
            <img className={styles.img}
                src="https://c4.wallpaperflare.com/wallpaper/511/72/909/movies-1920x1080-batmanbatman-batman-hd-wallpaper-preview.jpg" />
            <div className="con-right mx-3">
                <h5 className={styles.h5}>{data.name}</h5>
                <div className={styles['row-rate']}>
                    <div className={styles['icons-rate']}>
                        <RatingComponent data={data.rate} />
                    </div>
                    <p className={`my-1 ${styles.p}`}>a Week ago</p>
                </div>
                <p className={`my-1 ${styles.p}`}>{data.content}</p>
                <h4 className={styles.h4}>Was this review helpful?</h4>
                <div className="icon-review d-flex gap-3 align-items-center">
                    <div className={`${styles['con-icon']} d-flex justify-content-center align-items-center`}>
                        {

                            (LikeIconState === 1) ?
                                <span onClick={() => { setLikeIconState(0) }}>
                                    <FillLike />
                                </span>
                                : <span onClick={() => { setLikeIconState(1) }}>
                                    <EmptyLike />
                                </span>
                        }
                    </div>
                    <div className={`${styles['con-icon']} d-flex justify-content-center align-items-center`}>
                        {
                            (LikeIconState === -1) ?
                                <span onClick={() => { setLikeIconState(0) }}>
                                    <FillDislike />
                                </span>
                                : <span onClick={() => { setLikeIconState(-1) }}>
                                    <EmptyDislike />
                                </span>
                        }
                    </div>
                    <p className={`m-0 ${styles['icon-review-p']}`}>Report</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
