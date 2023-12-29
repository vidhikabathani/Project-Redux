import axios from 'axios'
import React, { useState } from 'react'
import { Signup } from '../redux/Action'
import { useDispatch } from 'react-redux'

function Signupp() {

    let[username,setUsername]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let dispatch=useDispatch((store)=>store)

    const handleSignup=async(data)=>{
        let user=await axios.post("http://localhost:3100/users",data)
        dispatch(Signup(user.data))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        let user={
            username,email,password
        }
        handleSignup(user)
    }

    return (
        <div className='p-100'>
            <div className="container">
            <form action="">
                <input type="text" placeholder='Enter Uername' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <input type="submit" onClick={handleSubmit} className='btn' />
            </form>
            </div>
        </div>
    )
}

export default Signupp