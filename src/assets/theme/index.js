import { createTheme } from "@mui/material/styles";

export default createTheme({
    typography: {
        fontFamily: 'Poppins', // Default font family
        fontWeightBold: 700, // FontWeight for bold text
        fontWeightMedium: 500, // FontWeight for medium text
        // Specify fonts for different text elements
        h1: {
          fontFamily: 'Poppins',
          fontWeight: 'bold', // or 700
        },
        h2: {
          fontFamily: 'Poppins',
          fontWeight: 'bold', // or 700
        },
        p:{
            fontFamily: 'Poppins',
            fontWeight: 'bold',   
        }
        // Add more font settings for other text elements as needed
      },
      h1: {
        fontFamily: 'Poppins',
        fontWeight: 'bold', // or 700
      },
      h2: {
        fontFamily: 'Poppins',
        fontWeight: 'bold', // or 700
      },
      p:{
          fontFamily: 'Poppins',
           
      },
      palette: {
        primary: {
          main: '#000000', // Black
        },
        secondary: {
          main: '#53ACFF', // Accent color: 53ACFF
        },
        error: {
          main: '#D94111', // Orange: D94111
        },
        success: {
          main: '#118F4B', // Green: 118F4B
        },
        text: {
          primary: '#000000', // Black
          secondary: '#ffffff', // White
        },
      },
})