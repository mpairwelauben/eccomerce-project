import React, {useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControlLabel,Radio, RadioGroup } from '@mui/material';
import { FormControl } from '@mui/material';
import Container from '@mui/material/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FormLabel } from '@mui/material';
const One = ({history}) => {
 
    const [name,setName] =useState("")
    const [message,setMessage] =useState("")
    const [nameError,setNameError] =useState(false)
    const [messageError,setMessageError] =useState(false)
    const [category,setCategory] =useState("")
    

    const body={category,name,message}


const postnotes=async()=>{
  await fetch("http://localhost:5000/notes",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(body)
  }
  )
  history.push('/')}
const Handlesubmit=(e)=>{
e.preventDefault()
postnotes()
setMessageError(false)
setNameError(false)
if (message== ''){
  setMessageError(true)
}
if (name == ''){ 
  setNameError(true)
}
if (message && name){
  console.log(message,name,category)
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
          value={message}
          label="Insert please"
          multiline
            rows="4"
            
            variant="outlined"
            fullWidth
            required
            error={messageError}
        onChange={(e)=>setMessage(e.target.value)}

        />
      <hr/>
      <FormControl>
      <FormLabel>buttons to choose from</FormLabel>
      <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)}>
        <FormControlLabel value="excellent" control={<Radio/>} label="excellent"/>
        <FormControlLabel value="good" control={<Radio/>} label="good"/>
        <FormControlLabel value="Fair" control={<Radio/>} label="Fair"/>
        <FormControlLabel value="poor" control={<Radio/>} label="poor"/>
        </RadioGroup>
        </FormControl>
        <Button 
        type='submit'
        endIcon={<ArrowForwardIosIcon/>}
        xl
        color="primary" variant="contained">Submit</Button>
       </form>
     
        </Container>   

        </div>
    )
}
export default One
