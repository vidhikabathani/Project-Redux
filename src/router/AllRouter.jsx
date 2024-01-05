import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Error from '../pages/Error'
import AddProduct from '../pages/AddProduct'

function AllRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/addproduct' element={<AddProduct/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/*' element={<Error/>}></Route>
            <Route path='/product/:id'></Route>
        </Routes>
    )
}

export default AllRouter