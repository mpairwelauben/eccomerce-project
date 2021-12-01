import React, { useEffect, useState } from 'react'
import {Button, Container, Grid,IconButton,Paper} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CommentIcon from '@mui/icons-material/Comment';
import Notecard from './components/notecard';
import { useHistory } from 'react-router';
import './styles.css'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Masonry from 'react-masonry-component';
import { makeStyles } from '@mui/styles';
import { Label } from '@mui/icons-material';
const useStyles= makeStyles({
  root:{
    display:'grid',

},
})
const Javas = () => {
  const classes =useStyles()
    const [notes,setNotes]=useState([])
    const history =useHistory()
   
    const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }));
    useEffect(()=>{
        getnotes()
     },[])
    const getnotes=async()=>{
        const response =await fetch("http://localhost:5000/notes")
        const data = await response.json()
        setNotes(data)
        console.log(data)
    }
    const deleted= async(id)=>{
        await fetch("http://localhost:5000/notes/"+ id,{
        method:"DELETE"
      })
      const newNotes =notes.filter(note => note.id != id)
      setNotes(newNotes)
    }
    return (
        <div>
        <Container>
        <Grid container spacing={2} className={classes.root}>
     <Grid item  xs={12} md={8} lg={8}> 
            <Paper className={classes.root}>
            <video width="100%" height="100%" controls autoplay>
              <source src="/lau.mp4" type="video/mp4"/>
              <source src="movie.ogg" type="video/ogg"></source>
              </video>
              <img src="/info.png" width="100%" height="50%"/>
            </Paper>
            </Grid>
      <div className={classes.root}>
      
        {notes.map((note=>(
            <Grid item key={note.id} xs={12} md={12} lg={12} > 
            <Notecard note={note} deleted={deleted}/>
            </Grid>
        )))}
        </div>
        </Grid>
            </Container>
        </div>
    )
}

export default Javas
