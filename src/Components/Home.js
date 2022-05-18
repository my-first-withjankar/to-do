import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Dashboard />
        </div>
    );
};

export default Home;