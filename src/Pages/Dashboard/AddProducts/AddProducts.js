import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div>
            <h2 className='text-2xl font-bold'>Add A Products</h2>

            <div className='mx-5 mb-5'>
                <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Product Name :</span>
                        </label>
                        <input type="text" {...register("productName", {
                            required: "Product Name is required"
                        })}
                            placeholder="Product Name" className="input input-bordered " />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Product Image :</span>
                        </label>
                        <input type="file" {...register("productImage", {
                            required: "Product Image is required"
                        })}
                            placeholder="Product Image" className="input input-bordered " />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProducts;