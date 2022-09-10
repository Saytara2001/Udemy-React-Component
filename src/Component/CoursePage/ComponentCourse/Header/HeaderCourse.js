import React from 'react'
import FullStarIcon from '../../../Icons/FullStarIcon'
import styles from './HeaderCourse.module.css'
import { useParams } from 'react-router-dom'
import DangerIcon from '../../../Icons/DangerIcon'
import LangIcon from '../../../Icons/LangIcon'
import ClosedCapIcon from '../../../Icons/ClosedCapIcon'
import HalfStarIcon from '../../../Icons/HalfStarIcon'
import RatingComponent from '../../../RatingComponent'

function HeaderCourse(props) {

    const { id } = useParams();
    let course = props.courses.filter(item => item.id == id)?.[0];

    return (
        <header className={styles.header}>
            <div className="container">
                <div className="d-flex">
                    <p className="fw-bold mt-4"><a className={styles.a}>Development</a>
                        <span className="mx-2 text-light">{`>`}</span> <a className={styles.a}>Programming
                            Languages</a> <span className="mx-2 text-light">{`>`}</span>
                        <a className={styles.a}>{course.topic}</a></p>
                </div>
                <h1 className={styles.h1}>{course.title}</h1>
                <p className={styles['h6-p']}>{course.Introduction}</p>
                <div className='d-flex mt-2'>
                    <h6 className={`${styles.i}`}>{course.rate}</h6>
                    <RatingComponent data={course.rate} />
                    <h6 className={styles['h6-p']}>(1,266 ratings) {course.enrollCount} students</h6>
                </div>
                <h6 className={`mt-2 ${styles.p}`}>Created By <a href="#">{course.instructor.name}</a></h6>
                <div className='d-flex gap-3 mt-2 pb-5'>
                    <div className='d-flex gap-2 align-items-center'>\
                        <DangerIcon />
                        <p className={`m-0 ${styles.p}`}>Last updated {course.lastUpdate}</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <LangIcon />
                        <p className={`m-0 ${styles.p}`}>English</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <ClosedCapIcon />
                        <p className={`m-0 ${styles.p}`}>English[Auto]</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderCourse
