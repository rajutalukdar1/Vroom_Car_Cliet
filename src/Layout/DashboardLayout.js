import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    // console.log(isAdmin, isSeller);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>My Orders</Link></li>
                        {!isAdmin && !isSeller &&
                            <>
                                <li><Link to='/dashboard' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>My Wish List</Link></li>
                            </>
                        }
                        {
                            isAdmin && !isSeller && <>
                                {/* <li><Link to='/dashboard/allusers' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>All Buyers</Link></li> */}
                                <li><Link to='/dashboard/allsellers' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>All Buyers</Link></li>
                                {/* <li><Link to='/dashboard/sellingproducts' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>My Products</Link></li>
                                <li><Link to='/dashboard/addproduct' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>Add Product</Link></li> */}
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addproduct' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>Add Product</Link></li>
                                <li><Link to='/dashboard/sellingproducts' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>My Products</Link></li>
                                {/* <li><Link to='/dashboard/mybuyers' className='font-semibold bg-[#6ac3ba] w-1/2 hover:bg-yellow-400'>My Buyers</Link></li> */}
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;