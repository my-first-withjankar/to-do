import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';

const Home = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('https://afternoon-oasis-20041.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])

    return (
        <div className='container'>
            <h1>Task {tasks.length}</h1>

            <button type="button" class="btn btn-info my-2"><Link to='dashboard' className='text-decoration-none text-white'>Add Task</Link></button>


            <div className='row'>
                {tasks.map(task => <Task key={task._id} task={task}></Task>)}
            </div>


        </div>
    );
};

export default Home;