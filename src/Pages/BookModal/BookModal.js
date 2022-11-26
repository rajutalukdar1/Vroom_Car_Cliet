import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookModal = ({ allProduct }) => {
    const { user } = useContext(AuthContext);
    const { name, resale_Price } = allProduct;


    const handleBooking = event => {
        event.preventDefault();
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
                        </label>
                        <input type="text" value={name} disabled className="input input-bordered input-warning w-full font-semibold" /> */}
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
                        <input name='number' type="text" value={resale_Price} disabled className="input input-bordered input-warning w-full font-semibold" />
                        <label className="label">
                            <span className="label-text text-black">User Number :</span>
                        </label>
                        <input type="text" placeholder='Mobile' className="input input-bordered input-warning w-full" />

                        <br />
                        <input className="btn btn-gry w-full text-white hover:bg-warning" type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookModal;