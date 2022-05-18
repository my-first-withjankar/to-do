import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Dashboard = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    // const email = user.email
    // const onSubmit = data => {
    //     const newData = { ...data, email };
    //     console.log(newData);
    //     const url = `https://secret-depths-91808.herokuapp.com/products`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newData)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             toast('added product')
    //         })
    // };
    return (
        <div className='w-50 mx-auto style'>
            <h4 className='text-center'>Please Add Your New Products </h4>
            <form className='d-flex flex-column w-50 mx-auto' >
                <input className='d-block w-100 mb-3 rounded border p-1' required placeholder='Product  Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='d-block w-100 mb-3 rounded border p-1' required placeholder='Description'  {...register("description")} />
                <input
                    style={{ backgroundColor: 'rgba(5, 51, 83, 0.571)' }}
                    className='d-block text-white py-1 rounded border w-50 mx-auto'
                    type="submit" value="Add" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;