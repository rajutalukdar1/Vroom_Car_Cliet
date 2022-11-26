import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/catagories')
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-5'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }

            </div>
            <div className="flex justify-center p-5">
                <Link to='/productAll'><button className="btn btn-warning  text-white hover:bg-orange-600">View All Cars</button></Link>
            </div>
        </div>
    );
};

export default Categories;