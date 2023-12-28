import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'

function Navbarr() {
    return (
        <div>
            <div className="container">
                <nav>
                <NavLink to='/' className="navbar">Home</NavLink>
                <NavLink to='/product' className="navbar">Products</NavLink>
                <NavLink to='/cart' className="navbar">Cart</NavLink>
                <NavLink to='/signup' className="navbar">SignUp</NavLink>
                <NavLink to='/login' className="navbar">Login</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navbarr