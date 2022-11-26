import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../BookModal/BookModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    const [allProduct, setAllProduct] = useState(null);
    console.log(products);
    // const { name } = products;
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-5 '>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setAllProduct={setAllProduct}
                    ></Product>)
                }

            </div>
            {
                allProduct &&
                <BookModal
                    allProduct={allProduct}
                    setAllProduct={setAllProduct}
                ></BookModal>
            }
        </div>
    );
};

export default Products;