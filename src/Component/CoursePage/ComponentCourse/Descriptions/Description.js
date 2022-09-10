import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Chevron from '../../../Icons/Chevron';
import styles from './Description.module.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function Description(props) {

    const [showMoreTextState, setShowMoreTextState] = useState(0)

    const { id } = useParams();
    let course = props.courses.filter(item => item.id == id)?.[0];
    let divided = course.description.length / 2;

    return (
        <div className="description mt-5">
            <h1 className="fs-1 fw-bold">Description</h1>
            {
                course.description.map((element, index) =>
                    index <= divided ?
                        <p className={`${styles.descriptionText}`} key={index}> {element} </p>
                        : <p className={showMoreTextState ? styles.moreText : ''} key={index}>{element}</p>
                )
            }
            <div>
                <button onClick={() => setShowMoreTextState(!showMoreTextState)} className={`${styles.readMoreBtn}`} >
                    {showMoreTextState ? "Show More" : "Show Less"} <ExpandLessIcon className={showMoreTextState ? ' ' : styles.rotateIcon} /></button>
            </div>
        </div>
    )
}

export default Description
