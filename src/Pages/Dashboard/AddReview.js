import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mr-48 mb-6 text-3xl'>Add a Review</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Name' {...register("name")} />
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Reviews' type="text" {...register("reviews")} />
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Ratings' type="number" {...register("ratings")} />
                <input className='btn btn-success w-full max-w-xs' value="Add Review" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;