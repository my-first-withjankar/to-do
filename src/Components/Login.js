import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
const Login = () => {

    // const navigate = useNavigate()
    // const location = useLocation()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // let from = location.state?.from?.pathname || "/";

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }
    // if (user) {
    //     navigate(from)
    // }


    return (

        <div className='d-flex align-items-center justify-content-center mt-0 w-25 mx-auto'>
            <button
                onClick={handleSignInWithGoogle}
                className='border-0 rounded-circle d-block bg-white'>
                google login
            </button>
        </div>

    );
};

export default Login;