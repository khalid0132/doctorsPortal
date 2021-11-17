// NOTE: useHistory is replaced by useNavigate
// In react - router - dom version 6
// useHistory() is replaced by useNavigate();

// import {
//    useNavigate
// } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home')

import React, { useState, useContext } from 'react';
// import {initializeApp} from 'firebase/app';
import { initializeApp } from "firebase/app";
// import {firebaseConfig} from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from './firebase.config';
// import { Button } from 'react-bootstrap';
// import {UserContext} from '../../App'
import { useLocation} from 'react-router';
import { UserContext } from '../../../App';
import { useNavigate } from "react-router";
import LoginBg from '../../../images/LoginBg.png';

const app = initializeApp(firebaseConfig);



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     //for redirecting to Room comp
     const navigate = useNavigate(UserContext);
    //  const location = useLocation();
    //  const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: true,
        name: '',
        email: '',
        photo: '',
        error: ''
    })

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        const auth = getAuth();

        signInWithPopup(auth, provider)
        .then((result) => {
            
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            const {displayName, email} = result.user;
            const signedInUser = {
                isSignedIn : true,
                name: displayName,
                email: email
            }
            console.log(signedInUser)
            setUser(signedInUser)
            setLoggedInUser(signedInUser)
            navigate('/'); // for redirect 

         
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential)
        });

        
    }
    const handleSignOut = () => {
        console.log('logged out')
        const auth = getAuth();
        signOut(auth)
        .then((res) => {
            const signOutUser = {
                isSignedIn: true,
                name: '',
                email: '',
                photoURL: ''
            }
            setLoggedInUser(signOutUser)

        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className="login-page container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
            {/* Have to update later */}
          <div className="from-group mt-1 mb-5 text-center">
            {
                loggedInUser.isSignedIn? <button className="btn btn-brand text-danger" onClick={handleSignOut}>Logout</button>:
                <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
            }
          </div>

          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Login;