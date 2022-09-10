import React, { useState } from 'react'
import styles from './Reviews.module.css'
import FullStarIcon from '../../../Icons/FullStarIcon'
import { useParams } from 'react-router-dom'
import HalfStarIcon from '../../../Icons/HalfStarIcon';
import FillLike from '../../../Icons/FillLike';
import EmptyLike from '../../../Icons/EmptyLike';
import ReviewCard from './ReviewCard';
import SearchIcon from '../../../Icons/SearchIcon';

function Reviews(props) {
    const { id } = useParams();
    let course = props.courses.filter(item => item.id == id)?.[0];
    // const [LikeIconState, setLikeIconState] = useState(false);
    return (
        <div className="Reviews mt-5" id='Reviews'>
            <h1 className="fs-1 fw-bold">Reviews</h1>
            <div className={`d-flex ${styles['container-search']}`}>
                <input className={styles['container-search-input']} placeholder="Search Review" />
                <div className={`d-flex ${styles.iconButton}`}>
                    <SearchIcon className={styles.i} />
                </div>
            </div>
            {
                course.reviews.map((item, index) =>
                    <ReviewCard key={index} data={item} />
                )
            }
        </div>
    )
}

export default Reviews
