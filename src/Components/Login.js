import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    if (user) {
        navigate(from, { replace: true })
    }


    return (

        <div className='d-flex align-items-center justify-content-center mt-5 w-25 mx-auto'>
            <button
                onClick={handleSignInWithGoogle}
                className='border px-5 py-1 bg-dark text-white '>
                GOOGLE LOGIN
            </button>
        </div>

    );
};

export default Login;