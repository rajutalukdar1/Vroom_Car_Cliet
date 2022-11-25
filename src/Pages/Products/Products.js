import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    // const { name } = products;
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-5 '>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
            {/* <h2>{products.length}</h2> */}
        </div>
    );
};

export default Products;