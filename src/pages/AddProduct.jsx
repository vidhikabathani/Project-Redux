import React, { useState } from 'react'
import { Product } from '../redux/Action'
import axios from 'axios'
import { useDispatch } from 'react-redux'

function AddProduct() {

    let[title,setTitle]=useState("")
    let[url,setUrl]=useState("")
    let[price,setPrice]=useState("")
    let[category,setCategory]=useState("")

    let dispatch=useDispatch()

    const handlepost = async (data) => {
        let products = await axios.post("http://localhost:3100/products", data)
        dispatch(Product(products.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let products = {
            title, url, price,category
        }
        handlepost(products)
        setCategory("")
        setTitle("")
        setUrl("")
        setPrice("")
    }

    return (
        <div>
            <form action="">
                <input type="text" placeholder='Enter Product Title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
                <input type="url" placeholder='Enter Product image URL' onChange={(e)=>setUrl(e.target.value)} value={url}/>
                <input type="number" placeholder='Enter Product price' onChange={(e)=>setPrice(e.target.value)} value={price}/>
                <input type="text" placeholder='Enter Product Category' onChange={(e)=>setCategory(e.target.value)} value={category}/>
                <input type="submit" value="Add Product" className='btn' onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default AddProduct