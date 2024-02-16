import { AppBar, Typography, Box, Toolbar, InputBase, Badge,Divider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '75%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '75%',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: "0px",
    left: "90%"
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: "100%",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 1),

        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
}));
function NavBar() {
    return (<AppBar position="static" sx={{ width: "100%",backgroundColor:"#414040" }}><Toolbar>

        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: "flex",alignItems:"center" }}
        >
           <Divider sx={{backgroundColor:(theme)=>theme.palette.secondary.main,height:"34px",width:"10px"}} variant="middle"/>
           <Typography sx={{fontSize:"48px"}}>ALERTS</Typography> 
        </Typography>
        <Search>

            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </Search>
        <Badge badgeContent={17} color="success">
            <NotificationsIcon sx={{ color: (theme) => theme.palette.secondary.main }} />
        </Badge>
    </Toolbar>
   
    </AppBar>
    )
}
export default NavBar