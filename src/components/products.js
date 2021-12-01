import { DeleteOutlineOutlined } from '@mui/icons-material'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import { Avatar, Button, Container, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Products = () => {
    const [name,setName] =useState("")
    const [image,setImage]=useState("")
    const [price,setPrice] =useState("")
    const [category,setCategory] =useState("")
    const [nameError,setNameError] =useState(false)
    const [priceError,setPriceError] =useState(false)
    
    const body={category,name,price,image}
  
const history =useHistory()

const postnotes=async()=>{
  await fetch("http://localhost:5000/products",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(body)
  }
  )}
  // history.push('/')}
const Handlesubmit=(e)=>{
e.preventDefault()
postnotes()
setPriceError(false)
setNameError(false)
if (price== ''){
    setPriceError(true)
  }
if (name == ''){ 
  setNameError(true)
}
if (name && price){
  console.log(price,name,category)
}
}
    return (
        <div>
                 <Container>
<form onSubmit={Handlesubmit} noValidate autoComplete='off'>
        <TextField
        value={name}
        onChange={(e)=>setName(e.target.value)}
            label="Insert please Name"  
            required
            variant="outlined"
            error={nameError}
            fullWidth
        /> 
        <hr/>
        <TextField
        value={image}
       
        type="file"
        onChange={(e)=>setImage(e.target.value)}
           placeholder="please insert image"  
            required
            variant="outlined"    
        /> 
        <hr/>
        <TextField
          value={price}
          label="Insert the price please"
            variant="outlined"
            fullWidth
            required
            // type="image"
            type="number"
            error={priceError}
        onChange={(e)=>setPrice(e.target.value)}
        />
      <hr/>
      <FormControl>
      <FormLabel>Select the areas to choose from</FormLabel>
      <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)}>
        <FormControlLabel value="Sports" control={<Radio/>} label="Sports"/>
        <FormControlLabel value="Toys" control={<Radio/>} label="Toys"/>
        </RadioGroup>
        </FormControl>
        <Button 
        type='submit'
        endIcon={<ArrowForwardIos/>}
        xl
        color="primary" variant="contained">Submit</Button>
       </form>
        </Container>   
        </div>
    )
}
export default Products
