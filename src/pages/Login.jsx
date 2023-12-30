import axios from 'axios'
import '../css/Style.css'
import React, { useState } from 'react'
import { Login } from '../redux/Action'
import { useDispatch } from 'react-redux'

function Loginn() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch()

    const handleLogin = async (email,password) => {
        let user = await axios.get(`http://localhost:3100/users?email=${email}&password=${password}`)
        dispatch(Login(user.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email, password
        }
        handleLogin(user)
        setPassword("")
        setEmail("")
    }

    return (
        <div className='p-100 sign_up'>
            <div className="container center">
                <fieldset>
                    <div>
                        <h1 className='allura f-5'>EBuy</h1>
                        <h3>Login now!</h3>
                        <form action="" onSubmit={handleSubmit}>
                            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                            <input type="password" placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                            <button className='btn' onClick={handleSubmit}> Login</button><br />
                            <span>Not a member? Sign Up</span>
                        </form>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Loginn