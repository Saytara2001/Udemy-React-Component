import React from 'react'
import FullStarIcon from '../../../Icons/FullStarIcon'
import styles from './FeedBacks.module.css'
import { useParams } from 'react-router-dom'
import RatingComponent from '../../../RatingComponent';

function FeedBacks(props) {

    const { id } = useParams();
    let course = props.courses.filter(item => item.id == id)?.[0];

    return (
        <div id="studentFeedBack" className="mt-5">
            <h1 className="fs-1 fw-bold">Student Feedback</h1>
            <div className={styles['container-skills']}>
                <div className={styles['student-feedback']}>
                    <h1 className={styles.h1}>{course.rate}</h1>
                    <FullStarIcon />
                    <FullStarIcon />
                    <FullStarIcon />
                    <FullStarIcon />
                    <FullStarIcon />
                    <p className={styles.p}>Course Rating</p>
                </div>
                <div className={styles.skills}>
                    {
                        course.studentFeedback.map((item, index) =>
                            <div className={styles['skill-line']} key={index}>
                                <div className={styles.progress} data-text={`${item}%`}>
                                    <div className={styles.inner} style={{ width: `${item}%` }}>
                                    </div>
                                </div>
                                <div className="icons-stars">
                                    <RatingComponent data={((item / 100) * 5)} />
                                    <span>{`${item}%`}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default FeedBacks
