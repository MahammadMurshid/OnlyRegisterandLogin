import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
    const [user,setUser]=useState({
        username:'',
        phone:'',
        email:'',
        password:'',
    })
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(user)
    }
    return (
        <>
            <div className="container">

                <div className="login_container">
                    <div style={{ height: '225px' }} className="welcome">
                        <div className="pages">
                            <p><Link style={{ textDecoration: 'none', color: 'white' }} to={'/login'}>SIGN IN</Link> </p>
                            <p><Link style={{ textDecoration: 'none', color: 'white' }} to={'/Register'}>SIGN UP</Link> </p>
                        </div>
                        <h1>Register the Form</h1>

                    </div>
                    <form onSubmit={handleSubmit} action="">
                        <div style={{ height: "358px" }} className="inside_login">
                            <input onChange={handleChange} type="text" name="username" id="" placeholder='username' />
                            <input onChange={handleChange} type="number" name="phone" id="" placeholder='Phone' />
                            <input onChange={handleChange} type="email" name="email" id="" placeholder='Email ID' />
                            <input onChange={handleChange} type="password" name="password" id="" placeholder='Password' />
                            <button type='submit'>Register</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}
