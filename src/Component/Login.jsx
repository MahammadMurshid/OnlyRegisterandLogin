import React,{useState} from 'react'
import './login.css'
import { Link } from 'react-router-dom';

export default function Login() {
    const [user,setUser]=useState({
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
          <div style={{ height: '293px' }} className="welcome">
            <div className="pages">
              <p><Link style={{ textDecoration: 'none', color: 'white' }} to={'/login'}>SIGN IN</Link> </p>
              <p><Link style={{ textDecoration: 'none', color: 'white' }} to={'/register'}>SIGN UP</Link> </p>
            </div>
            <h1>WELCOME </h1>
            <h1>to the Website </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, quasi!</p>
          </div>
          <form onSubmit={handleSubmit} action="">
            <div style={{height:'284px'}} className="inside_login">

              <input onChange={handleChange} type="email" name="email" id="" placeholder='Email ID' />
              <input onChange={handleChange} type="password" name="password" id="" placeholder='Password' />
              <button type='submit'>Login</button>
              <p style={{ textDecoration: 'underline',}}>Forget password?</p>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
