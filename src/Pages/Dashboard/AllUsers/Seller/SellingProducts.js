import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const SellingProducts = () => {

    const { loading } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/:name/myProducts`)
            .then(data => {
                // console.log('seller product data', data);
                setMyProducts(data.data);
            })
    }, []);

    if (loading) {
        return <Loading></Loading>
    }

    const handleAdvertise = (product) => {
        // console.log(product);
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('data', data);
                if (data.acknowledged) {
                    <Loading></Loading>
                    toast.success('Booking successfully')
                }
                else {
                    toast.error(data.message);
                }
            })
    }


    return (
        <div>
            <h2 className='text-3xl font-bold'>Seller Products : {myProducts.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Avatar</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><img className=' w-24 rounded-xl' src={product.image} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleAdvertise(product)} className='btn btn-xs btn-warning hover:bg-green-400'>Advertise</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellingProducts;