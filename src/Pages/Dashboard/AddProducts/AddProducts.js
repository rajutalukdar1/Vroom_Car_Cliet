import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imgbbHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imgbbHostKey);

    const handleAddProduct = data => {
        // console.log(data.productImage[0]);
        const image = data.productImage[0];
        // console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    // console.log(imgData);
                    const addProducts = {
                        // image: data.productImage,
                        product_id: data.brandName,
                        name: data.productName,
                        sellerName: data.sellerName,
                        location: data.location,
                        resale_Price: data.resale_Price,
                        original_Price: data.original_Price,
                        years_of_use: data.years_of_use,
                        image: imgData.data.url,
                        email: `${user.email}`

                    }
                    // console.log(addProducts.email);
                    // console.log(addProducts);

                    fetch('https://vroom-car-ass-12.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addProducts)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('products added success')
                            reset();
                        })

                }
            })
    }



    return (
        <div>
            <h2 className='text-2xl font-bold'>Add A Products</h2>

            <div className='mx-5 mb-5'>
                <form onSubmit={handleSubmit(handleAddProduct)} >
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Product Name :</span>
                            </label>
                            <input type="text" {...register("productName", {
                                required: "Product Name is required"
                            })}
                                placeholder="Product Name" className="input select-warning input-bordered " />
                            {errors.productName && <p role="alert" className='text-red-500'>{errors.productName?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Product Image :</span>
                            </label>
                            <input type="file" {...register("productImage", {
                                required: "Product Image is required"
                            })}
                                placeholder="Product Image" className="file-input file-input-bordered file-input-warning w-full " />
                            {errors.productImage && <p role="alert" className='text-red-500'>{errors.productImage?.message}</p>}
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Brand Name :</span>
                            </label>
                            <input type="text" {...register("brandName", {
                                required: "Brand Name is must  is required"
                            })}
                                placeholder="Brand Name" className="input input-bordered " />
                            {errors.brandName && <p role="alert" className='text-red-500'>{errors.brandName?.message}</p>}
                        </div> */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Brand Name:</span>
                            </label>
                            <select type="text" {...register("brandName", {
                                required: "Brand Name is must  is required"
                            })}
                                placeholder="Brand Name" className="select select-warning w-full" >
                                <option>Audi</option>
                                <option>BMW</option>
                                <option>Mercedes</option>
                                <option>Suzuki</option>
                            </select>
                            {errors.brandName && <p role="alert" className='text-red-500'>{errors.brandName?.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Seller Name :</span>
                            </label>
                            <input type="text" {...register("sellerName", {
                                required: "Seller Name is required"
                            })}
                                placeholder="Seller Name" className="input select-warning input-bordered capitalize" />
                            {errors.sellerName && <p role="alert" className='text-red-500'>{errors.sellerName?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Location :</span>
                            </label>
                            <input type="text" {...register("location", {
                                required: "Location is required"
                            })}
                                placeholder="Location" className="input select-warning input-bordered capitalize" />
                            {errors.location && <p role="alert" className='text-red-500'>{errors.location?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Years Of Use:</span>
                            </label>
                            <input type="text" {...register("years_of_use", {
                                required: "Years Of Use is required"
                            })}
                                placeholder="Years Of Use" className="input select-warning input-bordered " />
                            {errors.years_of_use && <p role="alert" className='text-red-500'>{errors.years_of_use?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Original Price :</span>
                            </label>
                            <input type="text" {...register("original_Price", {
                                required: "original_Price is required"
                            })}
                                placeholder="Original Price" className="input select-warning input-bordered " />
                            {errors.original_Price && <p role="alert" className='text-red-500'>{errors.original_Price?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Now Price</span>
                            </label>
                            <input type="text" {...register("resale_Price", {
                                required: "Resale Price is required"
                            })}
                                placeholder="Resale Price" className="input select-warning input-bordered " />
                            {errors.resale_Price && <p role="alert" className='text-red-500'>{errors.resale_Price?.message}</p>}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <input className='btn btn-gry w-1/2 text-white hover:bg-warning mt-5' type="submit" value="Submit" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProducts;