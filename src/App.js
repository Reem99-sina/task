import logo from './logo.svg';
import './App.css';
import { styled, alpha } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";
import theme from './assets/theme';
import Sidebar from './assets/component/Sidebar';
import { AppBar, Typography, Box, Toolbar, InputBase, Badge } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import NavBar from './assets/component/NavBar';
import Tablebody from './assets/component/Table';
import FilterBar from './assets/component/FilterBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar />
        <Box sx={{ ml: "108px", display: "flex" }}>
          <Box sx={{width:"70%"}}>
            <NavBar />
            <Tablebody />
          </Box>
          <Box sx={{width:"30%"}}>
          <FilterBar/>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
