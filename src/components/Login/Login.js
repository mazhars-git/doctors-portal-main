import React from 'react';
import loginImg from '../../images/Group 140.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch((error) => {
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            // ...
        });
    }
    return (
        <section className="container">
            <div className="row align-items-center" style={{height: '100vh'}}>
                <div className="col-md-6 shadow p-5">
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
                    <div className="from-group mt-5">
                        <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>
                
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={loginImg} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Login;