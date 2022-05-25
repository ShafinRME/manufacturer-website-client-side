import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Purchase.css';
import auth from '../../firebase.init';

const Purchase = () => {
    const { toolsId } = useParams();
    const [user, loading] = useAuthState(auth);
    const [tool, setTool] = useState({});
    const [values, setValues] = useState(0);
    const max = parseInt(tool.max);
    const min = parseInt(tool.min);

    const handlePurchase = event => {
        event.preventDefault();
        const price = event.target.quantity.value;
        setValues(price);
        console.log(price);
    }

    useEffect(() => {
        const url = `http://localhost:5000/purchase/${toolsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, []);

    return (
        <div className='container purchase-container '>
            <div className='update-inventory-container'>
                <img src={tool.img} alt="" />
                <div className='mt-5'>
                    <h2 className='mb-4'> {tool.name}</h2>
                    <p>{tool.description}</p>
                    <h4 className='text-info mt-4'>Max-Quantity: {tool.max}</h4>
                    <h4 className='text-warning mt-2'>Min-Quantity: {tool.min}</h4>
                    <h5 className='text-primary mt-2 mb-4'>Price: ${tool.price}</h5>
                </div>
            </div>
            <div>
                <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                    <input name="address" placeholder='Address' class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                    <input type="number" name='quantity' placeholder="Quantity" class="input input-bordered w-full max-w-xs" />
                    <input disabled={values === max} type="submit" value="order" placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />

                </form>
            </div>

        </div>
    );
};

export default Purchase;