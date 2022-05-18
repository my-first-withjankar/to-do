import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        const url = `https://afternoon-oasis-20041.herokuapp.com/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('added')
            })
    };
    return (
        <div className='w-50 mx-auto style'>
            <h4 className='text-center'>Please Add Your New Products </h4>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)} >
                <input className='d-block w-100 mb-3 rounded border p-1' required placeholder='Task Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='d-block w-100 mb-3 rounded border p-1' required placeholder='Description'  {...register("description")} />
                <input
                    style={{ backgroundColor: 'rgba(5, 51, 83, 0.571)' }}
                    className='d-block text-white py-1 rounded border w-50 mx-auto'
                    type="submit" value="Add" />
            </form>
            <Toaster />
        </div>
    );
};

export default Dashboard;