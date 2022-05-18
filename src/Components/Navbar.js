import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)

    const Logout = () => {
        signOut(auth)
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <Link class="navbar-brand" to='/'>TO-DO</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-auto">
                    <Link class="nav-item nav-link" to='/'>Home</Link>
                    <Link class="nav-item nav-link" to='/dashboard'>Dashboard</Link>
                    {
                        user ? <button onClick={Logout} className='border-0 bg-none'>  <Link class="nav-item nav-link" to='/'>Sign Out</Link></button> : <Link class="nav-item nav-link" to='login'>Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;