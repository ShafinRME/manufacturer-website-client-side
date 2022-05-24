import React from 'react';
import './Tool.css'

const Tool = ({ tool }) => {
    const { _id, name, img, description, min, max, price } = tool;
    return (
        <div className='inventory-container'>
            <img src={img} alt="" />
            <div className='mt-5'>
                <h2 className='mb-4'> {name}</h2>
                <p>{description}</p>
                <h4 className='text-info mt-4'>Max-Quantity: {max}</h4>
                <h4 className='text-warning mt-2'>Min-Quantity: {min}</h4>
                <h5 className='text-primary mt-2 mb-4'>Price: ${price}</h5>
                <button className='btn inventory-button text-white'>Purchase</button>
            </div>

        </div>
    );
};

export default Tool;