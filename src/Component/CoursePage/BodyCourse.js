import React from 'react'
import CourseContent from './ComponentCourse/CourseContent/CourseContent'
import Description from './ComponentCourse/Descriptions/Description'
import FeedBacks from './ComponentCourse/Feedbacks/FeedBacks'
import InfoLearn from './ComponentCourse/InfoLearn/InfoLearn'
import Instructor from './ComponentCourse/Instructor/Instructor'
import NavList from './ComponentCourse/NavList/NavList'
import Requirements from './ComponentCourse/Requirements/Requirements'
import Reviews from './ComponentCourse/Reviews/Reviews'

function BodyCourse(props) {
    return (
        <main className='container'>
            <NavList />
            <hr />
            <InfoLearn courses={props.courses} />
            <CourseContent courses={props.courses} />
            <Description courses={props.courses} />
            <Requirements courses={props.courses} />
            <Instructor courses={props.courses} />
            <FeedBacks courses={props.courses} />
            <Reviews courses={props.courses} />
        </main>
    )
}

export default BodyCourse
