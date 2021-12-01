import React, { useEffect, useState } from 'react'

const Cart = ({match}) => {
    let productid =match.params.id
    let [product,setProduct] =useState(null)
    useEffect(()=>{
        getProduct()
    },[productid])

    let getProduct= async()=>{
        let response= await fetch(` http://localhost:5000/products/${productid}`)
        let data =await response.json()
        setProduct(data)
    }
    return (
        <div>
            
        </div>
    )
}

export default Cart
