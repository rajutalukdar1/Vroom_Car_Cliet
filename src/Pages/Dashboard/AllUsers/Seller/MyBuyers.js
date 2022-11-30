import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const MyBuyers = () => {
    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`https://vroom-car-ass-12.vercel.app/users?role=buyer`)
            .then(res => res.json())
    })

    const handleDeleteUser = id => {
        // console.log(id);
        fetch(`https://vroom-car-ass-12.vercel.app/users/${id}`, {
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
                    toast.success('Users Deleted successfully')
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold'>All Buyers : {allBuyers.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Gmail</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => handleDeleteUser(user._id)} className="btn btn-xs">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;