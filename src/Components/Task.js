import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Task = ({ task }) => {
    const { _id, name, description } = task;

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure you want to delete');
        if (proceed) {
            console.log(id);
            const url = `https://afternoon-oasis-20041.herokuapp.com/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('deleted')
                })
        }
    }




    return (
        <div class="card w-50" >
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <hr />
                <p class="card-text">{description}</p>
                <button type="button" class="btn btn-danger" onClick={() => handleDelete(_id)}>Remove Tasks</button>

            </div>
            <Toaster />
        </div>
    );
};

export default Task;