import { Avatar, Drawer, IconButton, MenuList, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { AppBar } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { Toolbar } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import { useHistory, useLocation } from 'react-router';
import { CardTravel } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const menuItems =[
    {
        text:'home',
        icon:<HomeIcon color='secondary'/>,
        path:'/'
    },
    {
        text:'Products',
        icon:<ProductionQuantityLimitsIcon color='secondary'/>,
        path:'/prod'
    },
    {
        text:'Confirm',
        icon:<Inventory2Icon color='secondary'/>,
        path:'/product'
    },
    
    {
        text:'review',
        icon:<HomeIcon color='secondary'/>,
        path:'/one'
    },
    // {
    //     text:'input products',
    //     icon:<CardTravel color='secondary'/>,
    //     path:'/products'
    // },
    
]
const drawerWidth=270
const useStyles =makeStyles(()=>{

    return{
        page:{
            background:'#f9f9f9f9',
            width:'100%', 
            padding:20
        },
        title:{
            padding:16 
        },
        drawer:{
            width:drawerWidth,
            padding:4
        },
        drawerPaper:{
            width:drawerWidth
        },
        root:{
            display:'flex',
           
        },
    active:{
        background:'f4f4f4'
    },
    appbar:{
        // width:`calc(100% - ${drawerWidth}px)`,
        paddingLeft:250,
        background:'white'
    },
    toolbar:{
        marginTop:20
    },
    date:{
      flexGrow:2 
    }
    }
    
})
const Layout = ({children}) => {
    const [products,setProducts]=useState([])
    const [notes,setNotes]=useState([])
    
    useEffect(()=>{
        getproducts()
        getmessage()
     },[])
    const getproducts=async()=>{
        const response =await fetch("http://localhost:5000/products")
        const data = await response.json()
        setProducts(data)
        console.log(data)
    }
    const getmessage=async()=>{
        const response =await fetch("http://localhost:5000/notes")
        const data = await response.json()
        setNotes(data)
        console.log(data)
    }
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
        //   border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
   const classes =useStyles()
   const history = useHistory()
   const location =useLocation()
    return (
        <div className={classes.root}>
        <AppBar className={classes.appbar}
        elevation={0}>
         <Toolbar>
            <Typography variant="h6"  className={classes.date}>
          Date {format(new Date(),'do MMM Y')}

<IconButton aria-label="cart" color="inherit">
  <StyledBadge badgeContent={products.length} color="secondary" onClick={()=> history.push('/notes')}>
    <CircleNotificationsIcon/>
  </StyledBadge>
  </IconButton>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <IconButton aria-label="cart" color="inherit">
  <StyledBadge badgeContent={notes.length} color="secondary" onClick={()=> history.push('/product')}>
    <ChatIcon/>
  </StyledBadge>
          </IconButton>
            </Typography>
            <Typography>
                Lauben
            </Typography>
            <Avatar src="/beats1.jpg"/>
        </Toolbar>
        </AppBar> 
       
        <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{paper:classes.drawerPaper}}
        >
        <div>
            <Typography variant="h2" color="secondary" className={classes.title}
            >
SPOY
            </Typography>
        </div>
        <List>
            {menuItems.map(item=>
            <ListItem  
            button
            key={item.text} 
            onClick={()=> history.push(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text}/>
            </ListItem>
                )}
        </List>

        </Drawer>
        <div className={classes.page}>
        <div className={classes.toolbar}>
        {children}
        </div>
        </div>
        </div>
    )
}
export default Layout
