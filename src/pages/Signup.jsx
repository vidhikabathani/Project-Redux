import axios from 'axios'
import '../css/Style.css'
import React, { useState } from 'react'
import { Signup } from '../redux/Action'
import { useDispatch } from 'react-redux'

function Signupp() {

    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch((store) => store)

    const handleSignup = async (data) => {
        let user = await axios.post("http://localhost:3100/users", data)
        dispatch(Signup(user.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            username, email, password
        }
        handleSignup(user)
        setPassword("")
        setEmail("")
        setUsername("")
    }

    return (
        <div className='p-100 sign_up'>
            <div className="container center">
                <fieldset>
                <div>
                <h1 className='allura f-5'>EBuy</h1>
                <h3>Create new Account!</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Uername' value={username} onChange={(e) => { setUsername(e.target.value) }} /><br />
                        <input type="email" placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                        <input type="password" placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                        <button className='btn' onClick={handleSubmit}> SignUp</button><br />
                        <span>Login Now</span>
                    </form>
                </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Signupp