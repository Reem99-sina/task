import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Drawer from '@mui/material/Drawer';
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import logo from "../images/street suite logo-04.png"
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SchoolIcon from '@mui/icons-material/School';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HoverListItem from './HoverListItem';
import vector from "../images/Vector.svg"
import avatar from "../images/avatar.png"

import { useState } from 'react';
const drawerWidth = 240;



function Sidebar() {
    //   const classes = useStyles();
    const [isChildHovered, setIsChildHovered] = useState(false);

    const handleChildHover = () => {
      setIsChildHovered(true);
    };
    const handleChildLeave = () => {
        setIsChildHovered(false);
      };
    
    return (
        <div >
            <Drawer
                // className={classes.drawer}
                variant="permanent"
                sx={{
                    ".MuiPaper-root": { width: isChildHovered?"180px":"100px", 
                    backgroundColor:(theme)=>theme.palette.primary.main, 
                    color: "white",transition:"width 0.5s",    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between" },
                    transition:"width 0.5s"
                    //   paper: classes.drawerPaper,
                }}
                onMouseEnter={handleChildHover}
                onMouseLeave={handleChildLeave}
            >
                <Box>
                <Avatar src={logo} sx={{ width:  isChildHovered?"124px":"100px" }} />
                <List>
                    <ListItem button>
                        <ListItemIcon sx={{ minWidth: "25px" }}><NotificationsIcon sx={{ width: "20px", color: "white" }} /></ListItemIcon>
                        <ListItemText>{isChildHovered==true?"Alerts":""}</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon sx={{ minWidth: "25px" }}><SchoolIcon sx={{ width: "20px", color: "white" }} /></ListItemIcon>
                        <ListItemText>{isChildHovered==true?"Training":""}</ListItemText>

                    </ListItem>
                    <HoverListItem Icon={<EngineeringIcon  sx={{ width: "20px", color: "white" }}/>} text={isChildHovered==true?"Automation":""}/>
                    <HoverListItem Icon={<FolderCopyIcon  sx={{ width: "20px", color: "white" }}/>} text={isChildHovered==true?"Portfolio":""}/>
                    <HoverListItem Icon={<img src={vector} style={{ width: "20px", color: "white" }}/>} text={isChildHovered==true?"Trading":""}/>

                    
                    {/* <ListItem sx={{opacity:"0.5",":hover":{
                        backgroundColor:(theme)=>theme.palette.secondary.main,
                        borderRadius: "10px",
                        opacity:"1"
                    }}} onMouseEnter={handleChildHover}>
                        <ListItemIcon  sx={{ minWidth: "25px" }}><EngineeringIcon sx={{ width: "20px", color: "white" }} /></ListItemIcon>
                        <ListItemText>Automation</ListItemText>
                    </ListItem> */}

                </List>
                </Box>
                <Box>
                <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Avatar src={avatar}/>
                    {isChildHovered?<Box sx={{mx:"10px"}}>
                    <Typography component={"h4"}>
                    Moni Roy
                    </Typography>
                    <Typography component={"h4"} sx={{color:"#414040"}}>
                    Beginner
                    </Typography>
                    </Box>:<></>}
                    
                </Box>
                <Typography sx={{color:"#414040",my:2,fontSize:"14px"}}>Street Suite. 2.0</Typography>
                </Box>
            </Drawer>
        </div>
    );
}

export default Sidebar;