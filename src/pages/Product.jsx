import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getproduct } from '../redux/Action'

function Product() {

    let dispatch = useDispatch()
    let { data } = useSelector(store => store.ProductReducer.product)

    useEffect(() => {
        dispatch(Getproduct())
    }, [dispatch])

    return (
        <div>
            {
                data.map((e) => {
                    return <div>
                        <h3>{e.title}</h3>
                        <img src={e.img} alt="" />
                        <h5>Rs. {e.price}</h5>
                    </div>
                })
            }
        </div>
    )
}

export default Product