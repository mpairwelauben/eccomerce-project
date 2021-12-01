import { ClassNames } from '@emotion/react'
import { makeStyles } from '@mui/styles'
import { Button, FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
const usestyles =makeStyles({
    back:{
    background:'grey',
    padding:10
    }
})
const Message = () => {
    const classes =usestyles()
    const [message, setMessage]=useState("")
    const [messageError, setMessageError]=useState(false)
const body ={message}
const postmessages=async()=>{    
await fetch("  http://localhost:5000/messages",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(body)    
})}
const handlemessage=(e)=>{
    e.preventDefault()
    postmessages()
    setMessageError(false)

if (message){
   console.log(message)
}
if (message ==''){
    setMessageError(true) 
}
}
    return (
        <div>
        <form onSubmit={handlemessage}>
        <FormLabel>Messages are inserted here </FormLabel>
            <TextField  className={classes.back}
            onChange={(e)=>setMessage(e.target.value)}
                value={message}
                variant="outlined"
                color="secondary"
                label="insert message"
                fullWidth
                rows="4"
                required
            />
            <hr/>
            <Button variant="contained" color="secondary" type="submit">
                insert
            </Button>
            </form>

            
        </div>
    )
}

export default Message
