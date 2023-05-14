import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
export default function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}
