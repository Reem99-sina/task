import {
    FormLabel, Typography, Box, ListItemText, FormControl, ListItemButton,
    ListItemIcon, List, Accordion, AccordionDetails, RadioGroup, FormControlLabel, Radio, Item,Button
} from "@mui/material"
import { Search, SearchIconWrapper, StyledInputBase } from "./NavBar"
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useState } from "react";
import { AddBoxOutlined } from "@mui/icons-material";
function FilterBar() {
    let [items, setItems] = useState([
        "Big Option Buys",
        "Merger Arbitrage",
        "Short Reports",
        "Short Reports",
        "Short Reports",
        "Short Reports",
        "Merger Arbitrage",
        "Merger Arbitrage",
        "Merger Arbitrage",
        "Big Option Buys",
        "Big Option Buys",
        "Big Option Buys",
        "Short Reports",
        "Short Reports",
        "Short Reports",
        "Short Reports",
        "Short Reports",
        "Big Option Buys",
        "Big Option Buys",
        "Big Option Buys"
    ])
    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: (theme) => theme.palette.text.secondary }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));
    return (<>
        <Typography component={"h2"} sx={{ color: (theme) => theme.palette.text.secondary, fontSize: "2rem" }}>Filter</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
            <Typography component={"p"} sx={{ color: "#414040" }}>Filters Applied</Typography>
            <Typography component={"p"} sx={{ color: (theme) => theme.palette.text.secondary }}>Clear All</Typography>


        </Box>
        <Box


            sx={{ height: "51px", backgroundColor: "#202020", my: 2, borderRadius: "7px" }}
        >

        </Box>
        <Box
            sx={{ backgroundColor: "#202020" }}
        >
            <Typography component={"h2"} sx={{
                color: (theme) => theme.palette.text.secondary,
                fontSize: "1.5rem", borderRadius: "7px", textAlign: "left", p: 2
            }}>Stock</Typography>
            <Search>

                <StyledInputBase
                    placeholder="$ tICKER"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
            </Search>
            <Box sx={{ backgroundColor: "#202020" }}>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ color: (theme) => theme.palette.text.secondary, minHeight: "20px !important" }}>Industry</FormLabel>

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <List
                        sx={{
                            width: '40%', position: "relative", listStyleType: 'disc', "::before": {
                                content: '" "',
                                height: "230px",
                                backgroundColor: (theme) => theme.palette.text.secondary,
                                position: "absolute",
                                display: "inherit",
                                width: "3px"
                            }
                        }}
                        component="nav"
                    // aria-labelledby="nested-list-subheader"

                    >
                        {/* <Divider sx={{backgroundColor:(theme)=>theme.palette.text.secondary,height:"34px",width:"3px"}} variant="middle"/> */}
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <FavoriteIcon sx={{ color: (theme) => theme.palette.text.secondary }} />
                                {/* <SendIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Sent mail" />
                        </ListItemButton>
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <RecyclingIcon sx={{ color: (theme) => theme.palette.text.secondary }} />
                                {/* <DraftsIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <ElectricBoltIcon sx={{ color: (theme) => theme.palette.text.secondary }} />
                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />

                        </ListItemButton>
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <CreditCardIcon sx={{ color: (theme) => theme.palette.text.secondary }} />
                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />

                        </ListItemButton>
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <AddShoppingCartIcon sx={{ color: (theme) => theme.palette.text.secondary }} />

                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />

                        </ListItemButton>
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <HomeIcon sx={{ color: (theme) => theme.palette.text.secondary }} />

                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />

                        </ListItemButton>


                    </List>
                    <List sx={{ width: '50%', listStyleType: 'disc' }}
                        component="nav">
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <CarpenterIcon sx={{ color: (theme) => theme.palette.text.secondary }} />


                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />

                        </ListItemButton>
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <TextsmsIcon sx={{ color: (theme) => theme.palette.text.secondary }} />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />

                        </ListItemButton>
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <ConstructionIcon sx={{ color: (theme) => theme.palette.text.secondary }} />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />

                        </ListItemButton>
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <ApartmentOutlinedIcon sx={{ color: (theme) => theme.palette.text.secondary }} />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />

                        </ListItemButton>
                        <ListItemButton sx={{ color: (theme) => theme.palette.text.secondary, py: 0.3 }}>
                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                <LocalAtmIcon sx={{ color: (theme) => theme.palette.text.secondary }} />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />

                        </ListItemButton>

                    </List>
                </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ backgroundColor: "#202020", width: "50%" }}>
                    <FormLabel

                        sx={{ color: (theme) => theme.palette.text.secondary, minHeight: "20px !important" }}

                    >
                        market cap
                    </FormLabel>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", color: (theme) => theme.palette.text.secondary }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio sx={{
                                color: "#494949", '&.MuiRadio-root.Mui-checked': {
                                    color: (theme) => theme.palette.secondary.main,
                                },
                            }} />} label="Female" />
                            <FormControlLabel value="male" control={<Radio sx={{
                                color: "#494949", '&.MuiRadio-root.Mui-checked': {
                                    color: (theme) => theme.palette.secondary.main,
                                },
                            }} />} label="Male" />
                            <FormControlLabel value="other" control={<Radio sx={{
                                color: "#494949", '&.MuiRadio-root.Mui-checked': {
                                    color: (theme) => theme.palette.secondary.main,
                                },
                            }} />} label="Other" />
                        </RadioGroup>
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: "#202020", width: "50%" }}>
                    <FormLabel

                        sx={{ color: (theme) => theme.palette.text.secondary, minHeight: "20px !important" }}

                    >
                        Risk Level
                    </FormLabel>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", color: (theme) => theme.palette.text.secondary }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"

                        >
                            <FormControlLabel value="female" control={<Radio sx={{
                                color: "#494949", '&.MuiRadio-root.Mui-checked': {
                                    color: (theme) => theme.palette.secondary.main,
                                },
                            }} />} label="Female" />
                            <FormControlLabel value="male" control={<Radio sx={{
                                color: "#494949", '&.MuiRadio-root.Mui-checked': {
                                    color: (theme) => theme.palette.secondary.main,
                                },
                            }} />} label="Male" />
                            <FormControlLabel value="other" control={<Radio sx={{
                                color: "#494949", '&.MuiRadio-root.Mui-checked': {
                                    color: (theme) => theme.palette.secondary.main,
                                },
                            }} />} label="Other" />
                        </RadioGroup>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex",justifyContent:"space-between" ,py:"20px"}}>
                <Box>
                    <Typography variant={"h6"} sx={{ color: (theme) => theme.palette.text.secondary, fontWeight: "700" }}>strategy</Typography>

                    <Box sx={{
                        height: `97px`,
                        width: "119px",
                        overflow: "auto",
                        backgroundColor: "#202020",
                        "&::-webkit-scrollbar": {
                            display: "none"
                        }
                    }} >

                        {items.map((item, index) => (
                            <Box sx={{
                                padding: `6px`,
                                color: "#494949",
                                ":hover": {
                                    backgroundColor: (theme) => theme.palette.secondary.main,
                                    borderRadius: "8px",
                                    color: "white"
                                }

                            }} value={item}>{item}


                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <Typography variant={"h6"} sx={{ color: (theme) => theme.palette.text.secondary, fontWeight: "700" }}>asset</Typography>

                    <Box sx={{
                        height: `97px`,
                        width: "119px",
                        overflow: "auto",
                        backgroundColor: "#202020",
                        "&::-webkit-scrollbar": {
                            display: "none"
                        }
                    }} >
                        {items.map((item, index) => (
                            <Box sx={{
                                padding: `6px`,
                                color: "#494949",
                                ":hover": {
                                    backgroundColor: (theme) => theme.palette.secondary.main,
                                    borderRadius: "8px",
                                    color: "white"
                                },":current":{
                                    backgroundColor: (theme) => theme.palette.secondary.main,
                                    borderRadius: "8px",
                                    color: "white"
                                }

                            }} value={item}>{item}


                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
        <Button variant="contained" sx={{backgroundColor:(theme)=>theme.palette.secondary.main,padding:"5px 31px",my:"30px"}}>Apply</Button>
        {/* backgroundColor: (theme)=>theme.palette.secondary.main,
             borderRadius:" 8px",
             color: "white" */}
    </>
    )
}
export default FilterBar