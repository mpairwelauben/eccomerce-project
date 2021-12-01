import { Avatar, Card, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react'

const Produc = ({product,deleted}) => {
    return (
        <div>
        <Container>
        <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="1.png"
        ref=""
      />
       <Card elevation={1}>
           <CardHeader
                 action={
          <IconButton onClick={()=>deleted(product.id)}>
            <DeleteOutlineIcon/>
          </IconButton>
                 }
                 title={product.name}
                 subheader={product.category}
           />
           
           <CardContent>
               <Typography variant="body2" color="textSecondary">
{product.price}
               </Typography>
           </CardContent>
       </Card>
            </Container>
        </div>
    )
}
export default Produc
