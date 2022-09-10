import React from 'react'
import EmptyStarIcon from './Icons/EmptyStarIcon'
import FullStarIcon from './Icons/FullStarIcon'
import HalfStarIcon from './Icons/HalfStarIcon'

function RatingComponent({ data }) {
    return (
        <span>
            {Array(Math.floor(data)).fill().map((_, i) => <FullStarIcon key={i} />)}

            {((data - Math.floor(data)) >= 0.5) ? <HalfStarIcon /> : <EmptyStarIcon key={0} />}

            {Array(Math.max(4 - Math.floor(data), 0)).fill().map((_, i) => <EmptyStarIcon key={i + 1} />)}
        </span>
    )
}

export default RatingComponent
