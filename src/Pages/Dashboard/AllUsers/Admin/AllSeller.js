import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users?role=seller`)
            .then(res => res.json())
    })

    const handleDeleteUser = id => {
        // console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
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
            <h2 className='text-3xl font-bold'>All Sellers : {allUsers.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Gmail</th>
                            <th>verify</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className="btn btn-xs btn-success">verify</button></td>
                                <td><button onClick={() => handleDeleteUser(user._id)} className="btn btn-xs">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;