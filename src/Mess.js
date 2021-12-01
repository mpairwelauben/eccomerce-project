import React, { useEffect, useState } from 'react'
import {Container, Grid,Paper} from '@mui/material';

const Mess = ({history}) => {
    const [messages,setMessages]=useState([])
    useEffect(()=>{
        getmessages()
     },[])
    const getmessages=async()=>{
        const response =await fetch("http://localhost:5000/messages")
        const data = await response.json()
        setMessages(data)
        console.log(data)
    }
    return (
        <div>
        <h1>{messages.length}</h1>
        <Container>
        <Grid container>
        {messages.map((message=>( 
            <Grid  item key={message.id} xs={12} md={6} lg={4}>
            <Paper>{message.message}</Paper>
            
            </Grid>
        )))}
            </Grid>
            </Container>
        </div>
    )
}

export default Mess
