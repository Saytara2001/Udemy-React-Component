import React from 'react'
import styles from './InfoLearn.module.css'
import { useParams } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check';
function InfoLearn(props) {
    const { id } = useParams();
    let course = props.courses.filter(item => item.id == id)?.[0];

    return (
        <div className={`mt-5 ${styles['container-card']}`} id='Overview'>
            <h1>What you Will Learn</h1>
            <div className="d-flex">
                {
                    course.overview.map((item, index) => <div className='d-flex' key={index}>
                        <CheckIcon />
                        <p className={`mx-2 fw-bold ${styles.text}`}>{item}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default InfoLearn
