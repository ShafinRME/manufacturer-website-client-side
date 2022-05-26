import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/tools`;
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
            <h2 className='text-center mr-48 mb-6 text-3xl'>Add a Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Name' {...register("name")} />
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Description' type="text" {...register("description")} />
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Min Quantity' type="number" {...register("min")} />
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Max Quantity' type="number" {...register("max")} />
                <input className='mb-2 border-slate-400 input w-full max-w-xs' placeholder='Price' type="number" {...register("price")} />
                <input className='btn btn-success w-full max-w-xs' value="Add" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct; 