import React, { useEffect, useState } from 'react';
import Review from './Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-castle-77166.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        // Comments is showing in UI
        <div id='comments' className='container'>
            <h3 className='text-center p-5 mt-3 mb-3 comments-header'>Reviews</h3>
            <div className='comments-container'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>



        </div>
    );
};

export default Reviews;