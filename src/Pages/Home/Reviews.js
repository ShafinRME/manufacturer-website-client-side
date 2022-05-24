import React from 'react';

const Reviews = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://mighty-hamlet-99009.herokuapp.com/comment')
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);


    return (
        // Comments is showing in UI
        <div id='comments' className='container'>
            <PageTitle title="Comments"></PageTitle>
            <h3 className='text-center p-5 mt-3 mb-3 comments-header'>Comments</h3>
            <div className='comments-container'>
                {
                    comments.map(comment => <Comment
                        key={comment._id}
                        comment={comment}
                    ></Comment>)
                }
            </div>



        </div>
    );
};

export default Reviews;