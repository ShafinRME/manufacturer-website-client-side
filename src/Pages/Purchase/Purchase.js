import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Purchase.css';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { toolsId } = useParams();
    const [user, loading] = useAuthState(auth);
    const [tool, setTool] = useState({});

    const handlePurchase = event => {
        event.preventDefault();
        const purchasing = {
            toolId: tool._id,
            tool: tool.name,
            buyerName: user.displayName,
            buyerEmail: user.email,
            price: event.target.quantity.value,
            phone: event.target.phone.value

        }
        fetch('https://murmuring-castle-77166.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchasing)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Successfully You have a ordered ${tool.name}`);
                }
                else {
                    toast(`Failed to ordered ${tool.name}`);
                }
            })
    }

    useEffect(() => {
        const url = `https://murmuring-castle-77166.herokuapp.com/purchase/${toolsId}`;
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
                <h2 className='text-center text-3xl text-primary mb-5'>Purchasing Information</h2>
                <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                    <input name="address" placeholder='Address' class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                    <input type="number" name='quantity' placeholder="Quantity" class="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="order" placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />

                </form>
            </div>

        </div>
    );
};

export default Purchase;