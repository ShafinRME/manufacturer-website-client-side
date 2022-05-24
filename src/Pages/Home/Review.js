import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { _id, name, img, reviews, ratings } = review;
    return (
        <div className='comment-container' >
            <img src={img} alt="" />
            <h3 className='text-primary'>{name}</h3>
            <p>{reviews}</p>
            <h5 className='text-info'>Ratings: {ratings} <FontAwesomeIcon className='font-color' icon={faStar}></FontAwesomeIcon> </h5>

        </div>
    );
};

export default Review;