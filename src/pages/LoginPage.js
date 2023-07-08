import React, { useState } from 'react';
import image from '../images/image-1.png';
import { useNavigate} from 'react-router-dom';


function Login() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();;

    const handleUsernameChange = (event) =>{
        setUsername(event.target.value);
       
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }
    const handleLogin = (event) =>{
        if( Username == "admin" && Password == 'admin'){
            navigate('/tasks');
        }
        else {
            alert('Username or password is wrong')
        }
        event.preventDefault();
    }
  return (
    <div className='LoginPage'>
        <div className='container'>
            <div className='right'>
                <h2 className='h2title'>Welcome to To Do!</h2>
                <p className='ptitle'>"Manage your time, organize your tasks with To Do!"</p>
                <h1 className='h1title'>Log In</h1>

                <form className='formLogin' onSubmit={handleLogin}>
                    <input type='text'
                    className='inpt' 
                    onChange={handleUsernameChange}
                    />
                    <input
                    className='inpt'
                    type='password'
                    onChange={handlePasswordChange}
                    />
                    <div className='buttonLog'>
                        <button className='btn log'>Login</button>
                       
            
                    </div>
                </form>
            </div>
            <div className='left'>
                <img className='image' alt='İmage' src={image} />
            </div>
        </div>
    </div>
  )
}

export default Login