import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
function HoverListItem({Icon,text}) {
    const [isChildHovered, setIsChildHovered] = useState(false);

    const handleChildHover = () => {
      setIsChildHovered(true);
    };
    const handleChildLeave = () => {
        setIsChildHovered(false);
      };
  return (
    <ListItem sx={{opacity:"0.5",transition:"all 0.5s",":hover":{
        background:`radial-gradient(#53ACFF,#000000)`,
        // borderRadius: "10px",
        opacity:"1",
        textAlign:"center",
    }}} onMouseEnter={handleChildHover} onMouseLeave={handleChildLeave}>
      {isChildHovered?<></>:<ListItemIcon  sx={{ minWidth: "25px" }}>{Icon}</ListItemIcon>}
        <ListItemText>{isChildHovered?"Coming Soon":text}</ListItemText>
    </ListItem>
  )
}
export default HoverListItem