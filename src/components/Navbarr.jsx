import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import '../css/stylesheet.css'
import { useSelector } from 'react-redux'

function Navbarr() {

    let data = useSelector((store) => store.UserReducer)
    console.log(data);
    return (
        <div>
            <div className="container">
                <nav className='nav'>
                    <h1 className='allura f_primary'>EBuy</h1>
                    <NavLink to='/' className="navbar active">Home</NavLink>
                    <NavLink to='/addproduct' className="navbar">Add Product</NavLink>
                    <NavLink to='/product' className="navbar">Products</NavLink>
                    <NavLink to='/cart' className="navbar">Cart</NavLink>
                    <NavLink to='/signup' className="navbar">SignUp</NavLink>
                    {/* {data.isLogin ? (<span className='navbar'>{data.userdata.username}</span>) : <NavLink to='/signup' className="navbar">SignUp</NavLink>} */}
                    {data.isLogin ? (<span className='navbar'>Logout</span>) : <NavLink to='/login' className="navbar">Login</NavLink>}
                    <span className='nav-in'></span>
                </nav>
            </div>
        </div>
    )
}

export default Navbarr