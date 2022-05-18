import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';

const Home = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])

    return (
        <div className='container'>
            <h1>Task {tasks.length}</h1>


            <Link
                className='text-decoration-none  btn btn-info'
                to='/dashboard'
            >
                <p> Add Task </p>
            </Link>

            <div className='row'>
                {tasks.map(task => <Task key={task._id} task={task}></Task>)}
            </div>


        </div>
    );
};

export default Home;