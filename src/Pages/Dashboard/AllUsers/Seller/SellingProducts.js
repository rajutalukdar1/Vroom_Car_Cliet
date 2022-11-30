import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const SellingProducts = () => {

    const { loading, user } = useContext(AuthContext);
    // const [myProducts, setMyProducts] = useState([]);

    // useEffect(() => {
    //     axios.get(`https://vroom-car-ass-12.vercel.app/products/myProducts?email=${user?.email}`)
    //         .then(data => {
    //             console.log('seller product data', data);
    //             setMyProducts(data.data);
    //         })
    // }, []);

    const url = `https://vroom-car-ass-12.vercel.app/productsMy?email=${user?.email}`;
    // console.log(url);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })

    if (loading) {
        return <Loading></Loading>
    }

    const handleAdvertise = (product) => {
        // console.log(product);
        fetch('https://vroom-car-ass-12.vercel.app/advertise', {
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

    const handleDeleteUser = product => {
        // console.log(id);
        fetch(`https://vroom-car-ass-12.vercel.app/productsMy/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('My Product Deleted successfully')
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold'>Seller Products : {products.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Avatar</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Advertise</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><img className=' w-24 rounded-xl' src={product.image} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleAdvertise(product)} className='btn btn-xs btn-warning hover:bg-green-400'>Advertise</button></td>
                                <td><button onClick={() => handleDeleteUser(product)} className="btn btn-xs">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellingProducts;