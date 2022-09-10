import React from 'react'
import './Instructor.css'
import { useParams } from 'react-router-dom'
import FullStarIcon from '../../../Icons/FullStarIcon';
import PlayIcon from '../../../Icons/PlayIcon';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReviewsIcon from '@mui/icons-material/Reviews';
function Instructor(props) {
    const { id } = useParams();
    let course = props.courses.filter(item => item.id == id)?.[0];
    return (
        <div className="instrutors mt-5" id="Instrutor">
            <h1 className="fs-1 fw-bold">Instrutors</h1>
            <h3 className="fs-2 fw-bold mt-3"><a>{course.instructor.name}</a></h3>
            <h3>{course.instructor.intro}</h3>
            <div className="con-inffo d-flex">
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/511/72/909/movies-1920x1080-batmanbatman-batman-hd-wallpaper-preview.jpg" />
                <div className="con-right mx-3">
                    <div className="d-flex">
                        <FullStarIcon />
                        <p className="mx-2">{course.instructor.Rating} Rating</p>
                    </div>
                    <div className="d-flex">
                        <ReviewsIcon />
                        <p className="mx-2">{course.instructor.reviewsNumber} Reviews</p>
                    </div>
                    <div className="d-flex">
                        <PeopleAltIcon />
                        <p className="mx-2">{course.instructor.studentsNumber}  Students</p>
                    </div>
                    <div className="d-flex">
                        <PlayIcon />
                        <p className="mx-2">{course.instructor.coursesNumber} Courses</p>
                    </div>
                </div>
            </div>
            <p className="text">{course.instructor.description}</p>
            {/* The Codex */}
            <h3 className="fs-2 mt-5 fw-bold mt-3"><a>The Codex</a></h3>
            <h3>{course.instructor.intro}</h3>
            <div className="con-inffo d-flex">
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/511/72/909/movies-1920x1080-batmanbatman-batman-hd-wallpaper-preview.jpg" />
                <div className="con-right mx-3">
                    <div className="d-flex">
                        <FullStarIcon />
                        <p className="mx-2">{course.instructor.Rating} Rating</p>
                    </div>
                    <div className="d-flex">
                        <ReviewsIcon />
                        <p className="mx-2">{course.instructor.reviewsNumber} Reviews</p>
                    </div>
                    <div className="d-flex">
                        <PeopleAltIcon />
                        <p className="mx-2">{course.instructor.studentsNumber}  Students</p>
                    </div>
                    <div className="d-flex">
                        <PlayIcon />
                        <p className="mx-2">{course.instructor.coursesNumber} Courses</p>
                    </div>
                </div>
            </div>
            <p className="text">{course.instructor.description}</p>
        </div>
    )
}

export default Instructor
