import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getproduct } from '../redux/Action'

function Product() {

    let dispatch = useDispatch()
    let {data} = useSelector(store => store.ProductReducer.product)

    useEffect(() => {
        dispatch(Getproduct())
    }, [dispatch])

    return (
        <div>
            {
                data.map((ele) => {
                    return (<div className=' flex main-div'>
                        <div>
                        <img src={ele.url} alt="" />
                        <h3>{ele.title}</h3>
                        <h5>Rs. {ele.price}</h5>
                        </div>
                    </div>)
                })
            }
        </div>
    )
}

export default Product