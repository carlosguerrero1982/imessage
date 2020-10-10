import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth,provider} from './firebase';

function Login() {


    const signIn = ()=>{

        auth.signInWithPopup(provider).catch(error=> alert(error.message));

    }


    return (
        <div className="login">

            <div className="login_logo">

                <img src="https://iphonewired.com/wp-content/uploads/2020/05/Mac-message-app-will-change-to-Catalyst-version-soon.png" 

                alt=""

                />

                <h1> Message</h1>
           
            </div>

            <Button onClick={signIn}> Sign in </Button>

            
        </div>
    )
}

export default Login
