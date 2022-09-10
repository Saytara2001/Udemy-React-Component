import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Requirements.module.css'
function Requirements(props) {
    const { id } = useParams();
    let course = props.courses.filter(item => item.id == id)?.[0];
    return (
        <div className="requiremnts mt-5">
            <h1 className="fs-1 fw-bold">Requirements</h1>
            <ul>
                {
                    course.requirements.map((element, index) =>
                        <li className={`${styles.li} fs-5`} key={index}>{element}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Requirements
