import React, { useEffect } from 'react'
import { GetCart, removeCart } from '../redux/Action';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
    let dispatch = useDispatch();
    let { cart } = useSelector((store) => store.ProductReducer);
    console.log(cart);

    useEffect(() => {
        dispatch(GetCart())
    }, [])
    const handleRemove = (id) => {
        dispatch(removeCart(id))
    }
    return (
        <div>
            {cart.map((ele) => {
                return (
                    <>
                        <img src={ele.img} alt="" />
                        <p>{ele.title}</p>
                        <p>{ele.price}</p>

                        <button onClick={() => handleRemove(ele.id)}>delete</button>
                    </>
                );
            })}
        </div>
    );
}

export default Cart