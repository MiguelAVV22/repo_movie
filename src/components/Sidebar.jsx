import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import  watch  from "../assets/icons/folder.svg";
import  bell  from "../assets/icons/bell.svg";
import  calendar  from "../assets/icons/calendar.svg";
import  comment  from "../assets/icons/comment.svg";
import  film  from "../assets/icons/film.svg";
import  heart  from "../assets/icons/heart.svg";
import  trendingUp  from "../assets/icons/trending-up.svg";
import  users  from "../assets/icons/users.svg";


function Sidebar() {
  const navItems=[
    { text: "Home", path: "/home" ,imageIcon:film},
    { text: "Favorites", path: "/favorites" ,imageIcon:heart },
    { text: "Trending", path: "/trending" ,imageIcon:trendingUp},
    { text: "Coming Soon", path: "/coming-soon" ,imageIcon:calendar},
    { text: "Community", path: "/community" ,imageIcon:users},
    { text: "Social", path: "/social" ,imageIcon:comment},
  ]
  return (
      <Box
        sx={{
          // width: "190px",
          backgroundColor: "#21201E",
          color: "white",
          // height: "100%",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >

        <Box
          sx={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
            // gap: '0.4rem',
            marginBottom: '2rem'
          }}
        >
          <img
              src={watch}
              alt="Watch Icon"
              style={{
                width: '40px',
                height: '40px',
              }}
            />
        <Typography variant="h5" sx={{ margin:'2rem 1rem'}}>
        WATCH
        </Typography>
          </Box>  
        <List>
          {navItems.map((item, index) => (
            <ListItem 
             button
             key={index}
             component={Link}
             to={item.path} 
             sx={{
               color: "#ffffff50" ,
               display:'flex',
               gap:'1rem',
               '&:hover':{
                backgroundColor:'#21201E',
                color:'white'
               }
              }}>
                <img
              src={item.imageIcon}
              alt={`${item.text} Icon`}
              style={{
                width: '15px',
                height: '15px'
              }}
            />
              <ListItemText primary={item.text} 
              
              />
              
            </ListItem>
          ))}
        </List>
      </Box>
  )
}

export default Sidebar