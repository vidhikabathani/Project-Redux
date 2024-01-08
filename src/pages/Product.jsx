import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getproduct } from '../redux/Action'
import { NavLink } from 'react-router-dom'

function Product() {

    let dispatch = useDispatch()
    let { product } = useSelector((store) => store.ProductReducer)
    console.log(product);

    useEffect(() => {
        dispatch(Getproduct())
    }, [dispatch])

    return (
        <div className='container p-100 flex center justify-between'>
            {
                product.map((ele) => {
                    return (
                        <div className='main-div col-4'>
                            <NavLink to={`/product/${ele.id}`}>
                                <img src={ele.url} alt="" />
                                <h3>{ele.title}</h3>
                                <h5 className='f-blue'>Rs. {ele.price}</h5>
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product