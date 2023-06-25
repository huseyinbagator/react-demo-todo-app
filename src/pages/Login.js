import React from 'react';
import './Login.css';
import image from '../images/image-1.png';
import google from '../images/Google.svg';

function Login() {
  return (
    <div className='loginPage'>
        <div className='container'>
            <div className='right'>
                <h2 className='h2title'>Welcome to To Do!</h2>
                <p className='ptitle'>"Manage your time, organize your tasks with To Do!"</p>
                <h1 className='h1title'>Log In</h1>

                <form className='formLogin'>
                    <input type='text'
                    className='inpt' />
                    <input
                    className='inpt'
                    type='password' />
                    <div className='buttonLog'>
                        <button className='btn log'>Login</button>
                        <button className='btn google' ><img src={google} ></img>Sign in with Google</button>
            
                    </div>
                </form>
            </div>
            <div className='left'>
                <img className='image' src={image} />
            </div>
        </div>
    </div>
  )
}

export default Login