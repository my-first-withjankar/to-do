import React from 'react';

const Task = ({ task }) => {
    const { _id, name, description } = task;

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure you want to delete');
        if (proceed) {
            console.log(id);
            const url = `http://localhost:5000/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // if (data.deletedCount > 0) {
                    //     const remaining = products.filter(product => product._id !== id)
                    //     setProducts(remaining)
                    // }
                })
        }
    }




    return (
        <div class="card w-50" >
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <hr />
                <p class="card-text">{description}</p>
                <button onClick={() => handleDelete(_id)}>Remove Tasks</button>
            </div>
        </div>
    );
};

export default Task;