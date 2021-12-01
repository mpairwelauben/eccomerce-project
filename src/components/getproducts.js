import React, { useEffect, useState } from 'react'
import {Button,styled,Badge, Container, Grid,IconButton,Paper} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router';
import Masonry from 'react-masonry-component';
import Produc from './produc';
const Get = () => {
    const [products,setProducts]=useState("")
    const history =useHistory()
    useEffect(()=>{
        getproducts()
     },[])
    const getproducts=async()=>{
        const response =await fetch("http://localhost:5000/products")
        const data = await response.json()
        // setProducts(data)
        console.log(data)
    }
    const deleted= async(id)=>{
        await fetch("http://localhost:5000/products/"+ id,{
        method:"DELETE"
      })
      const newproducts =products.filter(product => product.id != id)
      setProducts(newproducts)
    }
    return (
        <div> 
        <Container>
      <Grid container spacing={3} alignContent="center" alignItems="center">
        {products.map((product=>( 
            <Grid item key={product.id} xs={12} md={4} lg={4}> 
            <Produc product={product} deleted={deleted}/>
            </Grid>
        )))}
        </Grid>
            </Container>
        </div>
    )
}
export default Get
