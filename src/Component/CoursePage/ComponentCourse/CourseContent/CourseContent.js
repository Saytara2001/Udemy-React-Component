import React, { useRef, useState } from 'react'
import FullStarIcon from '../../../Icons/FullStarIcon'
import { useParams } from 'react-router-dom'
import styles from './CourseContent.module.css'
import Chevron from '../../../Icons/Chevron';
import DocIcon from '../../../Icons/DocIcon';
import PlayIcon from '../../../Icons/PlayIcon';
import "./CourseContent.module.css"
import ChapterContent from './ChapterContent';
function CourseContent(props) {
    const { id } = useParams();
    let course = props.courses.filter(item => item.id == id)?.[0];
    let CourseContentData = course


    return (
        <div className="course-content mt-5" id='Curriculum'>
            <h1 className="fs-1 fw-bold">Course Content</h1>
            <p>{CourseContentData.sectionsCount} sections • {CourseContentData.lecturesCount} lectures • {CourseContentData.totalLength} total length</p>
            {
                CourseContentData.content.map((item, index) => <ChapterContent key={index} data={item} index={index} />
                )
            }
        </div >
    )
}

export default CourseContent
