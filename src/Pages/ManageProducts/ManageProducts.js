import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://murmuring-castle-77166.herokuapp.com/tools')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? ');
        if (proceed) {
            fetch(`https://murmuring-castle-77166.herokuapp.com/tools/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`${data.name} is deleted successfully.`);
                        refetch();
                    }
                })
        }

    }
    return (
        <div>
            <h2>All Products: {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Product Name</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td><img className='w-20' src={product.img} alt="" /></td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;