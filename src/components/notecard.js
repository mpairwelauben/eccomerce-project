import { Avatar, Card, CardContent, CardHeader, Container, Grid, IconButton, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react'
import { blue, green, pink, yellow } from '@mui/material/colors';
import { useHistory } from 'react-router';
const useStyles =makeStyles({
avatar:{
    backgroundColor:(note)=>{
        if (note.category =='money'){
            return yellow[700]
        }
        if (note.category =='baby yoda'){
            return green[500]
        }
        if (note.category =='house'){
            return pink[500]
        }
            return blue[500]
    }
}
})
const Notecard = ({note,deleted}) => {
    const history=useHistory()
    const classes =useStyles(note)
    return (
        <div>
        <Container>
       <Card elevation={1}>
           <CardHeader
        //   avatar={
            //   <Avatar className={classes.avatar}>
            //       {note.category[0].toUpperCase()}
            //   </Avatar>
        //   }
                 action={
          <IconButton onClick={()=>deleted(note.id)}>
            <DeleteOutlineIcon/>
          </IconButton>
                 }
        //          action={
        //             <IconButton onClick={()=>history.push('/one')}>
        //     <DeleteOutlineIcon/>
        //   </IconButton>
        //          }
                 title={note.name}
                 subheader={note.category}
           />
           <CardContent>
               <Typography variant="body2" color="textSecondary">
{note.message}
               </Typography>
           </CardContent>
       </Card>
            </Container>
        </div>
    )
}

export default Notecard
