import React, { Component } from 'react'
import FullStarIcon from '../Icons/FullStarIcon'
import HalfStarIcon from '../Icons/HalfStarIcon'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import RatingComponent from '../RatingComponent'
class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const courses = this.props.courses;
        return (
            <div className='row'>{
                courses.map(course =>
                    <Link className="linkA" to={`/coursePage/${course.id}`} key={course.id} style={{ textDecoration: "inherit", color: "inherit" }}>
                        <article id='HoverPopUP' className="card-box col-lg-3 col-md-6 col-sm-12">
                            <img src={course.image} className="img-fluid" alt="pyramids" />
                            <h5 className={`mb-1 ${styles.h5}`}>{course.title}</h5>
                            <p className={`mb-1 ${styles.p}`}>{course.instructor.name}</p>
                            <div className={styles.rate} id="rate-course">
                                <span className={styles['num-rate']}>{course.rate}</span>
                                <RatingComponent data={course.rate} />
                                <span className={styles['watch-rate']}>{course.enrollCount}</span>
                            </div>
                            <div className={`mb-1 ${styles.price}`}>
                                <h4 className={styles['price-after']} id="testH">{course.price}</h4>
                                <h4 className={styles['price-before']}>{course.originalPrice}</h4>
                            </div>
                        </article>
                    </Link>
                )
            }</div>)
    }
}

export default Cards