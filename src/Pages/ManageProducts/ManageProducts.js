import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('http://localhost:5000/tools')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td><img className='w-20' src={product.img} alt="" /></td>
                                <td>{product.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;