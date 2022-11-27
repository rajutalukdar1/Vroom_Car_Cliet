import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';

const BookModal = ({ allProduct, setAllProduct }) => {
    const { user } = useContext(AuthContext);
    const { name, resale_Price } = allProduct;


    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const product_name = form.product_name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const meeting = form.meeting.value;


        // console.log('click');
        const booking = {
            product_name,
            name,
            email,
            price,
            phone,
            meeting
        }
        // console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    <Loading></Loading>
                    setAllProduct(null);
                    toast.success('Booking successfully')
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 mt-10'>
                        {/* <label className="label">
                            <span className="label-text text-black">Car Name :</span>
                        </label> */}
                        <input name='product_name' type="text" value={name} disabled className="input input-bordered input-warning w-full font-semibold" />
                        <label className="label">
                            <span className="label-text text-black">User Name :</span>
                        </label>
                        <input name='name' type="text" value={user.displayName} disabled className="input input-bordered input-warning w-full font-semibold" />
                        <label className="label">
                            <span className="label-text text-black">User Email :</span>
                        </label>
                        <input name='email' type="text" value={user.email} disabled className="input input-bordered input-warning w-full font-semibold" />
                        <label className="label">
                            <span className="label-text text-black">Car Price :</span>
                        </label>
                        <input name='price' type="text" value={resale_Price} disabled className="input input-bordered input-warning w-full font-semibold" />
                        <label className="label">
                            <span className="label-text text-black">User Number :</span>
                        </label>
                        <input name='phone' type="Number" placeholder='Mobile' className="input input-bordered input-warning w-full" required />
                        <label className="label">
                            <span className="label-text text-black">Meeting Location</span>
                        </label>
                        <input name='meeting' type="text" placeholder='Meeting Location' className="input input-bordered input-warning w-full" required />

                        <br />
                        <input className="btn btn-gry w-full text-white hover:bg-warning" type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookModal;