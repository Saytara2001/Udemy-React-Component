import React, { useRef, useState } from 'react'
import FullStarIcon from '../../../Icons/FullStarIcon'
import { useParams } from 'react-router-dom'
import styles from './CourseContent.module.css'
import Chevron from '../../../Icons/Chevron';
import DocIcon from '../../../Icons/DocIcon';
import PlayIcon from '../../../Icons/PlayIcon';

function ChapterContent({ data, index }) {
    const [rotateIconList, setRotateIconList] = useState(0);
    const item = data
    return (
        <div>
            <div onClick={() => setRotateIconList(!rotateIconList)} className={styles['list-1']} data-bs-toggle="collapse" data-bs-target={`#collapseExample${index}`} aria-expanded="false"
                aria-controls="collapseExample">
                <span className={rotateIconList ? styles['iconRotate'] : ''} >
                    <Chevron id='iconUpToggle' className='p-5' />
                </span>
                <div className={styles['con-content']}>
                    <h5 className={`m-0 fw-bold fs-6 ${styles['card-body-title']}`}>{item[0]}</h5>
                    <p className="m-0">11 lectures . 24min</p>
                </div>
            </div>
            <div className="collapse" id={`collapseExample${index}`}>
                <div className={styles['card-collapse']}>
                    {
                        item[1].map((item, index) => <div className={styles['card-body']} key={index}>
                            {index % 5 ? <PlayIcon /> : <DocIcon />}
                            <div className={styles['con-content']}>
                                <h5 className={`m-0 ${styles['card-body-h5']}`}>{item}</h5>
                                <p className="m-0">30:55</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ChapterContent
