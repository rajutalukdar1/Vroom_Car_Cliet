import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://vroom-car-ass-12.vercel.app/users')
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://vroom-car-ass-12.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('make admin successfully')
                    refetch();
                }
            })
    }


    const handleMakeSeller = id => {
        fetch(`https://vroom-car-ass-12.vercel.app/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('make Seller successfully')
                    refetch();
                }
            })
    }

    const handleDeleteUser = id => {

        fetch(`https://vroom-car-ass-12.vercel.app/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Users Deleted successfully')
                }
            })
    }

    return (
        <div>
            <h2 className="text-2xl font-bold">All users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Make Seller</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td>
                                <td>{user?.role !== 'seller' && <button onClick={() => handleMakeSeller(user._id)} className="btn btn-xs btn-warning">Make a Seller</button>}</td>
                                <td><button className="btn btn-xs btn-success">verify </button></td>
                                <td><button onClick={() => handleDeleteUser(user._id)} className="btn btn-xs">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;