import React from 'react'
import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to={'/login'}> <button>Login Page</button></Link>
            <Link to={'/register'}> <button>Register Page</button></Link>
        </div>
    )
}
